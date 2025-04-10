import { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

interface Items {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

const Page = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [todos, setTodos] = useState<Items[]>([]);

  const addTodo = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "data"), {
        name: name,

        description: description,
        imageUrl: imageUrl,
      });
      console.log("Document written with ID: ", docRef.id);
      setName("");
      setDescription("");
      setImageUrl("");
      fetchPost();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const fetchPost = async () => {
    await getDocs(collection(db, "data")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as Items[];
      setTodos(newData);
    });
  };
  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Form
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <form onSubmit={addTodo} className="space-y-4">
            <div>
              <label
                htmlFor="todo"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                id="todo"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Name"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
                placeholder="Add a description..."
              />
            </div>

            <div>
              <label
                htmlFor="imageUrl"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Image URL
              </label>
              <input
                id="imageUrl"
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter image URL"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="space-y-4  bg-white rounded-lg p-5 ">
          {todos?.map((todo) => (
            <div key={todo.id}>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {todo.name}
              </h2>
              <p className="text-gray-600 mb-4">{todo.description}</p>
              {todo.imageUrl && (
                <img
                  src={todo.imageUrl}
                  alt={todo.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Page;
