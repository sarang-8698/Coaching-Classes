import React, { useState } from "react";
import { generateUniqueId } from "../utils/idGenerator"; // Unique ID generator
import { sendVerificationEmail } from "../utils/api"; // API for email verification

// Utility function to convert a file to base64 format
const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    dob: new Date(),
    gender: "",
    password: "",
    occupation: "",
    employerName: "",
    designation: "",
    functionalArea: "",
    experience: { years: "", months: "" },
    salary: "",
    additionalSkills: "",
    knowCenter: "",
    address: { line1: "", line2: "", city: "", pincode: "" },
    studentPhoto: null,
    signature: null,
  });

  const [loginId] = useState(generateUniqueId());
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = async (e, key) => {
    const file = e.target.files[0];
    if (file && file.size <= 512000) {
      // Check for file size limit
      const base64 = await toBase64(file);
      setFormData((prev) => ({ ...prev, [key]: base64 }));
    } else {
      alert("Please upload an image under 500KB.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send verification email and store user data
    await sendVerificationEmail(formData.email, loginId);
    localStorage.setItem("user", JSON.stringify({ ...formData, loginId }));
    setShowPopup(true); // Show the popup with the login ID
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl transition duration-300 transform hover:scale-105"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Admission Form</h2>
        <input
          name="name"
          placeholder="Name"
          className="w-full p-2 mb-4 border rounded"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded"
          onChange={handleChange}
          required
        />
        <input
          name="mobile"
          placeholder="Mobile"
          className="w-full p-2 mb-4 border rounded"
          onChange={handleChange}
          required
        />
        <input
          name="occupation"
          placeholder="Occupation"
          className="w-full p-2 mb-4 border rounded"
          onChange={handleChange}
        />
        <input
          name="employerName"
          placeholder="Employer Name"
          className="w-full p-2 mb-4 border rounded"
          onChange={handleChange}
        />
        {/* File uploads */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, "studentPhoto")}
          className="w-full mb-4"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, "signature")}
          className="w-full mb-4"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded mt-4 hover:bg-blue-500 transition duration-200"
        >
          Submit
        </button>

        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-md text-center">
              <h3 className="text-xl font-bold mb-4">
                Registration Successful!
              </h3>
              <p className="mb-4">
                Your Login ID is: <strong>{loginId}</strong>
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-blue-600 text-white p-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default AdmissionForm;
