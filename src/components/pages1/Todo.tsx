import { useState } from "react"; // useState: React hook to manage component state.
import { collection, addDoc } from "firebase/firestore"; // Firestore functions to interact with the database.
import { db } from "../../firebase/firebase";
// Firebase database instance, imported from configuration.

// Interface to define prop types for Todo component, ensuring type safety.
interface TodoProps {
  closeModal: () => void; // Function prop to close the modal.
}

const Todo: React.FC<TodoProps> = ({ closeModal }) => { //A generic type provided by React to define functional components with TypeScript.
  // useState to manage form input data
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    imageUrl: "",
  });

  
   // Handles form submission.
   // Prevents default behavior and submits form data to Firestore.
   
  const addSubmit = async (e: React.FormEvent) => { //   //async: When you use async before a function, it always returns a Promise and allows the use of await inside it.
    e.preventDefault(); // Prevents page reload on form submission.

    try { //      //try: This block contains the code that might throw an error (in this case, addDoc).
      // Add new document to Firestore collection 'formdata' with user input.
      await addDoc(collection(db, "formdata"), formData);
         //await: await is used inside an async function to pause execution until the Promise is resolved.
        //Adds a new document to the  collection in Firestore.
        // Stores the user's input (name, description, imageUrl).
      console.log("Data Added Successfully"); // Log success message.
      closeModal(); // Close modal after successful submission.
    } catch (error) {  //catch: If an error occurs, the catch block executes and logs the error instead of crashing the app.
            // Handle any errors that might occur

      console.error("Error adding document: ", error); // Log error if submission fails.
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={addSubmit} className="space-y-4">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Add Data
          </h1>



          {/* Input field for Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Enter Name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          
          {/* Input field for Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Add description"
              rows={3}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Input field for Image URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              id="imageUrl"
              type="text"
              value={formData.imageUrl}
              onChange={(e) =>
                setFormData({ ...formData, imageUrl: e.target.value })
              }
              placeholder="Enter Image URL"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Todo;
