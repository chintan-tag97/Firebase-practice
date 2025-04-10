import { useState } from "react";

import { collection, addDoc } from "firebase/firestore"; // Firestore functions to interact with the database.
import { db } from "../../firebase/firebase";// Firebase database instance, imported from configuration.

function App() {
  const [step, setStep] = useState(1); // State to manage the current step of the form

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const [details, setDetails] = useState({ 
    CompanyEmail: "",
    Password: "",
    ConformPassword: "",
    fullName: "",
    designation: "",
    baseSalary: "",
    dateOfJoining: "",
    status: "",
    address: "",
    gender: "",
    personalEmail: "",
    birthDate: "",
    contactNo: "",
    profilePic: " ",
    aadharCard: "",
    aadharNo: "",
    panCard: "",
    pancardNo: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

 
  const handleSubmit = async (e: { preventDefault: () => void; }) => { //preventDefault: Prevents the default form submission behavior (page reload).
    //async: When you use async before a function, it always returns a Promise and allows the use of await inside it.
    //promise: A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
    e.preventDefault(); 
    
    try { //      //try: This block contains the code that might throw an error (in this case, addDoc).
      // Add new document to Firestore collection 'details' with user input.
      await addDoc(collection(db, "details"), details);
         //await: await is used inside an async function to pause execution until the Promise is resolved.
        //Adds a new document to the  collection in Firestore.
        // Stores the user's input (name, description, imageUrl).
      console.log("Data Added Successfully"); // Log success message.
    } catch (error) {  //catch: If an error occurs, the catch block executes and logs the error instead of crashing the app.
            // Handle any errors that might occur

      console.error("Error adding document: ", error); // Log error if submission fails.
    }
    window.alert("Form submitted successfully!");
    console.log("Form Submitted", details);
  };

  return (
    <>
     <div className="flex flex-col items-center justify-center min-h-screen  p-6">
     <div className="w-full max-w-lg bg-white shadow-2xl rounded-3xl p-8">
          <div className="flex justify-between mb-4">
            {["Employee Details", "Personal Details", "Documents"].map(
              (label, index) => (
                <div
                  key={index}
                  className={`flex-1 text-center py-2 text-sm font-medium cursor-pointer ${
                    step === index + 1 ? "text-blue-600" : "text-gray-400"
                  }`}
                  onClick={() => setStep(index + 1)}
                >
                  {label}
                </div>
              )
            )}
          </div>

          <div className="border-t border-gray-300 mb-4"></div>

          <div className="p-4 overflow-scroll overflow-x-hidden h-96">
            {step === 1 && ( 
              <div>
                <p className="text-lg font-semibold mb-2 text-center">
                  Employee Details
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                <label className="block font-semibold">
                    CompanyEmail
                    <input
                      type="text"
                      name="CompanyEmail"
                      value={details.CompanyEmail}
                      onChange={handleChange}
                      className="w-full p-2 border rounded mt-1 font-normal "
                    />
                  </label>
                  
                  <label className="block font-semibold">
                    Password
                    <input
                      type="password"
                      name="Password"
                      value={details.Password}
                      onChange={handleChange}
                      className="w-full p-2 border rounded mt-1 font-normal "
                    />
                  </label>
                  <label className="block font-semibold">
                    ConformPassword
                    <input
                      type="password"
                      name="ConformPassword"
                      value={details.ConformPassword}
                      onChange={handleChange}
                      className="w-full p-2 border rounded mt-1 font-normal "
                    />
                  </label>
                  <label className="block font-semibold">
                    Full Name
                    <input
                      type="text"
                      name="fullName"
                      value={details.fullName}
                      onChange={handleChange}
                      className="w-full p-2 border rounded mt-1 font-normal "
                    />
                  </label>
                 
                  <label className="block font-semibold">
                    Designation
                    <select
                      name="designation"
                      value={details.designation}
                      onChange={handleChange}
                      className="w-full p-2 border rounded mt-1 font-normal"
                    >
                      <option value="Intern">Intern</option>
                      <option value="Employee">Employee</option>
                    </select>
                  </label>
                  <label className="block font-semibold">
                    Base Salary
                    <input
                      type="text"
                      name="baseSalary"
                      value={details.baseSalary}
                      onChange={handleChange}
                      className="w-full p-2 border rounded mt-1 font-normal"
                    />
                  </label>
                  <label className="block font-semibold">
                    Date of Joining
                    <input
                      type="date"
                      name="dateOfJoining"
                      value={details.dateOfJoining}
                      onChange={handleChange}
                      className="w-full p-2 border rounded mt-1 font-normal"
                    />
                  </label>
                  
                  <label className="block font-semibold">
                    Status
                    <select
                      name="status"
                      value={details.status}
                      onChange={handleChange}
                      className="w-full p-2 border rounded mt-1 font-normal"
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </label>
                  
                </form>
              </div>
            )}
            {step === 2 && (
              <div>
                <p className="text-lg font-semibold mb-2 text-center">
                  Personal Details
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <label className="block font-semibold">
                    Address
                    <textarea
                      
                      name="address"
                      value={details.address}
                      onChange={handleChange}
                      className="w-full p-2 border rounded mt-1 font-normal"
                    />
                  </label>
                  <div className="block ">
                    <label className="text-dark font-semibold">Gender</label>
                    <div className="flex space-x-4 mt-1">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="Male"
                          checked={details.gender === "Male"}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        Male
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="Female"
                          checked={details.gender === "Female"}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        Female
                      </label>
                    </div>
                  </div>
                  <label className="block font-semibold">
                    Personal Email
                    <input
                      type="text"
                      name="personalEmail"
                      value={details.personalEmail}
                      onChange={handleChange}
                      className="w-full p-2 border rounded mt-1 font-normal"
                    />
                  </label>
                  <label className="block font-semibold">
                    Birth Date
                    <input
                      type="date"
                      name="birthDate"
                      value={details.birthDate}
                      onChange={handleChange}
                      className="w-full p-2 border rounded mt-1 font-normal"
                    />
                  </label>
                  <label className="block font-semibold">
                    Contact No
                    <input
                      type="text"
                      name="contactNo"
                      value={details.contactNo}
                      onChange={handleChange}
                      className="w-full p-2 border rounded mt-1 font-normal"
                    />
                  </label>

                  
                </form>
              </div>
            )}
            {step === 3 && (
              <div>
                <p className="text-lg font-semibold mb-2">Upload Documents</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <label className="block font-semibold">
                    Profile Picture Url
                    <input
                      type="text"
                      name="profilePic"
                      onChange={handleChange}
                      className="w-full p-2 border rounded mt-1 font-normal"
                    />
                    
                  </label>
                  
                  <label className="block font-semibold">
                    Aadhar Card Url
                    <input
                      type="text"
                      name="aadharCard"
                      onChange={handleChange}
                      className="w-full p-2 border rounded mt-1 font-normal"
                    />
                  </label>
                  <label className="block font-semibold">
                    Aadhar Card Number
                    <input
                      type="text"
                      name="aadharNo"
                      value={details.aadharNo}
                      onChange={handleChange}
                      className="w-full p-2 border rounded mt-1 font-normal"
                    />
                  </label>
                  <label className="block font-semibold">
                    PAN Card Url
                    <input
                      type="text"
                      name="panCard"
                      onChange={handleChange}
                      className="w-full p-2 border rounded mt-1 font-normal"
                    />
                   
                  </label>
                  <label className="block font-semibold">
                    PAN Card Number
                    <input
                      type="text"
                      name="pancardNo"
                      value={details.pancardNo}
                      onChange={handleChange}
                      className="w-full p-2 border rounded mt-1 font-normal"
                    />
                  </label>
                  <button
                    type="submit"
                    className="w-full p-2  bg-blue-600 text-white rounded"
                  >
                    Submit
                  </button>
                </form>
              </div>
            )}
          </div>

          <div className="flex justify-between mt-4">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
              onClick={prevStep}
              disabled={step === 1}
            >
              Previous
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
              onClick={nextStep}
              disabled={step === 3}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;



