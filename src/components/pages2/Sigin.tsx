import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../firebase/firebase";

const Sigin = () => {
  const [SiginData, setFormData] = useState({
    name: "",
    number: "",
    address: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate(); // <-- Initialize navigate

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "sigin"), SiginData);

      console.log("Sigin Successfully");
      navigate("/"); // <-- Navigate to Home after successful login
    } catch (error) {
      console.error("Error in Sigin");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Sigin Page
      </h1>
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your Name"
              required
              onChange={(e) =>
                setFormData({ ...SiginData, name: e.target.value })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="number"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="number"
              placeholder="Enter your Phone Number"
              required
              onChange={(e) =>
                setFormData({ ...SiginData, number: e.target.value })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              placeholder="Enter your Address"
              required
              onChange={(e) =>
                setFormData({ ...SiginData, address: e.target.value })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
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
                setFormData({ ...SiginData, email: e.target.value })
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
              placeholder="Enter your Password"
              required
              onChange={(e) =>
                setFormData({ ...SiginData, password: e.target.value })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Sigin
          </button>
          Already have an account?
          <Link to="/" className="text-blue-500 hover:underline">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Sigin;
