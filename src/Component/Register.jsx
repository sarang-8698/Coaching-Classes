import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { generateUniqueId } from "../utils/idGenerator"; // Unique ID generator
import { sendVerificationEmail } from "../utils/api"; // Mock API for email verification

// Utility function to convert a file to base64 format
const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

function Register() {
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
      // 500KB size limit
      const base64 = await toBase64(file);
      setFormData((prev) => ({ ...prev, [key]: base64 }));
    } else {
      alert("Please upload an image under 500KB.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowPopup(true); // Show the popup with the login ID
    await sendVerificationEmail(formData.email, loginId);
    localStorage.setItem("user", JSON.stringify({ ...formData, loginId }));
    alert("Verification link sent. Check your email.");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <label className="block mb-2 font-semibold">Name</label>
        <input
          name="name"
          className="w-full p-2 mb-4 border rounded"
          onChange={handleChange}
          required
        />

        <label className="block mb-2 font-semibold">Email</label>
        <input
          name="email"
          type="email"
          className="w-full p-2 mb-4 border rounded"
          onChange={handleChange}
          required
        />

        <label className="block mb-2 font-semibold">Mobile Number</label>
        <input
          name="mobile"
          type="tel"
          className="w-full p-2 mb-4 border rounded"
          onChange={handleChange}
          required
        />

        <label className="block mb-2 font-semibold">Password</label>
        <input
          name="password"
          type="password"
          className="w-full p-2 mb-4 border rounded"
          onChange={handleChange}
          required
        />

        <label className="block mb-2 font-semibold">Date of Birth</label>
        <DatePicker
          selected={formData.dob}
          onChange={(date) => setFormData((prev) => ({ ...prev, dob: date }))}
          className="w-full p-2 mb-4 border rounded"
        />

        <label className="block mb-2 font-semibold">Gender</label>
        <select
          name="gender"
          className="w-full p-2 mb-4 border rounded"
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>

        <label className="block mb-2 font-semibold">Occupation</label>
        <select
          name="occupation"
          className="w-full p-2 mb-4 border rounded"
          onChange={handleChange}
          required
        >
          <option value="">Select Occupation</option>
          <option value="Student">Student</option>
          <option value="Employed">Employed</option>
          <option value="Self-Employed">Self-Employed</option>
        </select>

        {formData.occupation === "Employed" && (
          <>
            <label className="block mb-2 font-semibold">Employer Name</label>
            <input
              name="employerName"
              className="w-full p-2 mb-4 border rounded"
              onChange={handleChange}
            />

            <label className="block mb-2 font-semibold">Designation</label>
            <input
              name="designation"
              className="w-full p-2 mb-4 border rounded"
              onChange={handleChange}
            />

            <label className="block mb-2 font-semibold">Functional Area</label>
            <input
              name="functionalArea"
              className="w-full p-2 mb-4 border rounded"
              onChange={handleChange}
            />

            <label className="block mb-2 font-semibold">Experience</label>
            <div className="flex gap-4">
              <input
                name="experience.years"
                type="number"
                placeholder="Years"
                className="w-full p-2 mb-4 border rounded"
                onChange={handleChange}
              />
              <input
                name="experience.months"
                type="number"
                placeholder="Months"
                className="w-full p-2 mb-4 border rounded"
                onChange={handleChange}
              />
            </div>

            <label className="block mb-2 font-semibold">Salary</label>
            <input
              name="salary"
              type="number"
              className="w-full p-2 mb-4 border rounded"
              onChange={handleChange}
            />
          </>
        )}

        <label className="block mb-2 font-semibold">
          Additional Skills/Training
        </label>
        <input
          name="additionalSkills"
          className="w-full p-2 mb-4 border rounded"
          onChange={handleChange}
        />

        <label className="block mb-2 font-semibold">
          How did you know about our center?
        </label>
        <input
          name="knowCenter"
          className="w-full p-2 mb-4 border rounded"
          onChange={handleChange}
        />

        {/* Address Section */}
        <label className="block mb-2 font-semibold">Address</label>
        <input
          name="address.line1"
          placeholder="Address Line 1"
          className="w-full p-2 mb-4 border rounded"
          onChange={handleChange}
          required
        />
        <input
          name="address.line2"
          placeholder="Address Line 2"
          className="w-full p-2 mb-4 border rounded"
          onChange={handleChange}
        />
        <input
          name="address.city"
          placeholder="City"
          className="w-full p-2 mb-4 border rounded"
          onChange={handleChange}
          required
        />
        <input
          name="address.pincode"
          placeholder="Pincode"
          className="w-full p-2 mb-4 border rounded"
          onChange={handleChange}
          required
        />

        {/* Image Uploads */}
        <label className="block mb-2 font-semibold">
          Upload Profile Photo (Max 500KB)
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, "studentPhoto")}
          className="w-full p-2 mb-4 border rounded"
          required
        />

        <label className="block mb-2 font-semibold">
          Upload Signature (Max 500KB)
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, "signature")}
          className="w-full p-2 mb-4 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded mt-4"
        >
          Register
        </button>

        {/* Popup Modal for Login ID */}
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
}

export default Register;
