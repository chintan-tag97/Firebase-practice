import { collection, onSnapshot } from "firebase/firestore"; // Firestore functions for data retrieval and update.
import { useEffect, useState } from "react"; // React hooks for state and lifecycle management.
import { db } from "../../firebase/firebase"; // Firebase database instance.
import { Data } from "../../type";
 // Type definition for data structure.

const TodoContext = () => {
  const [todos, setTodos] = useState<Data[]>([]);  // useState: React hook to manage component state.

  useEffect(() => {
     //useEffect: This hook ensures that data is fetched from Firestore only once when the component is rendered.

    // Set up real-time listener
    // Real-time data listener: Listens for changes in the "formdata" collection in Firestore.
    const data = onSnapshot(collection(db, "formdata"), (querySnapshot) => { //The onSnapshot function in Firestore enables real-time data synchronization by listening for changes in a Firestore collection or document.

      const newData = querySnapshot.docs 
        .map((doc) => ({ //   // Maps Firestore documents to an array of objects with the document data and ID.

          ...doc.data(), // Spreads document data to include all fields.
            id: doc.id, // Assigns the document ID to the object.
        } as Data))
        .filter((todo) => todo.status === "active"); //This .filter() function is used to extract only the items that have status set to "active" from an array of objects.
        //  === operator compares both content and type

      setTodos(newData); // Updates state with the latest data.
    });

    // Cleanup subscription on unmount
    return () => data();
  }, []);

  return (
    <div>
      <div className="space-y-4 bg-gray-100 rounded-lg p-5 ">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Active Data
        </h1>
        {todos?.map((todo) => (
          <div key={todo.id} className=" bg-white w-sm p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {todo.name}
            </h2>
            <p className="text-gray-600 mb-4">{todo.description}</p>
            {todo.imageUrl && (
              <img
                src={todo.imageUrl}
                alt={todo.name}
                className="w-sm h-48 object-cover rounded-md mb-4"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoContext;
