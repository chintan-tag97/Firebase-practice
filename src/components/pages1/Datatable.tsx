import { collection, onSnapshot, updateDoc, doc } from "firebase/firestore"; // Firestore functions for data retrieval and update.
import { useEffect, useState } from "react"; // React hooks for state and lifecycle management.
import { db } from "../../firebase/firebase"; // Firebase database instance.
import { Data } from "../../type"; // Type definition for data structure.
import Todo from "./Todo"; // Importing the Todo component for adding new data.
import { Link } from "react-router-dom";

const DataTable = () => {
  // State to hold the list of todos
  const [todos, setTodos] = useState<Data[]>([]); // useState: React hook to manage component state.
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  useEffect(() => {
    //useEffect: This hook runs the fetchPost function when the component is first mounted. This ensures that data is fetched from Firestore only once when the component is rendered.

    // Set up real-time listener
    // Real-time data listener: Listens for changes in the "formdata" collection in Firestore.
    const data = onSnapshot(collection(db, "formdata"), (querySnapshot) => {
      //The onSnapshot function in Firestore enables real-time data synchronization by listening for changes in a Firestore collection or document.

      // Maps Firestore documents to an array of objects with the document data and ID.
      const newData = querySnapshot.docs.map(
        (doc) =>
          ({
            ...doc.data(), // Spreads document data to include all fields.
            id: doc.id, // Assigns the document ID to the object.
          } as Data)
      );

      setTodos(newData); // Updates state with the latest data.
    });

    // Cleanup  on unmount
    return () => data();
  }, []);

  // Toggles the status of a todo item and updates Firestore.

  const toggleStatus = async (todoId: string, currentStatus: string) => {
    const newStatus = currentStatus === "active" ? "inactive" : "active";
    await updateDoc(doc(db, "formdata", todoId), { status: newStatus });
  };

  // Closes the modal.

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Data Table
      </h1>

      {/* Add Button */}
      <div className="relative ml-320 mb-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-800"
          onClick={() => setIsModalOpen(true)}
        >
          Add
        </button>
      </div>

      {/* Table */}
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Description</th>
            <th className="px-4 py-2 border">Image Url</th>
            <th className="px-4 py-2 border">Status</th>
          </tr>
        </thead>

        <tbody className=" border-collapse  ">
          {todos.map((todo) => (
            <tr
              key={todo.id}
              className="odd:bg-gray-100 even:bg-white hover:bg-blue-200  "
            >
              <td className="px-4 py-2  text-center">{todo.id}</td>
              <td className="px-4 py-2 ">{todo.name}</td>
              <td className="px-4 py-2 ">{todo.description}</td>
              <td className="px-4 py-2 ">{todo.imageUrl}</td>
              <td className="px-4 py-2  text-center">
                {/* Status Toggle Button */}
                <div
                  className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer  ${
                    todo.status === "active" ? "bg-blue-500" : "bg-gray-400"
                  }`}
                  onClick={() => toggleStatus(todo.id, todo.status)}
                >
                  <div
                    className={`bg-white w-5 h-5 rounded-full shadow-md transform ${
                      todo.status === "active"
                        ? "translate-x-5"
                        : "translate-x-0"
                    }`}
                  ></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Adding Data */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={closeModal}
            >
              ✖
            </button>
            <Todo closeModal={closeModal} />
          </div>
        </div>
      )}
      <div className="mt-5">
        <Link to="/todocontext" className="hover:text-blue-400  font-bold">
          View Data
        </Link>
      </div>
    </div>
  );
};

export default DataTable;
