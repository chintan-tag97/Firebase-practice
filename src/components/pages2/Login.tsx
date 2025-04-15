import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [Logindata, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // <-- Initialize navigate

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "login"), Logindata);

      console.log("Login Successfully");
      navigate("/"); // <-- Navigate to Home after successful login
    } catch (error) {
      console.error("Error in Login");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Login Page
      </h1>
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter your Email"
              required
              onChange={(e) =>
                setFormData({ ...Logindata, email: e.target.value })
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
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Login
          </button>
          Don't have an account?
          <Link to="/Sigin" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
