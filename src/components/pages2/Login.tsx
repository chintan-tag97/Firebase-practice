import { useState } from "react";
import { collection, addDoc } from "firebase/firestore"; // Firestore functions to interact with the database.
import { db } from "../../firebase/firebase";

const Login = () => {
  const [Logindata, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      await addDoc(collection(db, "login"), Logindata);
        
      console.log("Login Successfully");
    } catch (error) {
      console.error("Error in Login"); // Log error if submission fails.
    }
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Login Page
      </h1>
      <div className="flex justify-center items-center h-screen">
        <form onSubmit={handleSubmit} className="space-y-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              required
              onChange={(e) =>
                setFormData({ ...Logindata, username: e.target.value })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              onChange={(e) =>
                setFormData({ ...Logindata, password: e.target.value })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
