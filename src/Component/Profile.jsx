import React from "react";

function Profile() {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    return (
      <p className="text-center text-lg">
        No user data found. Please register or login.
      </p>
    );
  }

  console.log("Stored User Data:", storedUser); // Log for debugging

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-3xl p-6">
        <div className="text-center mb-6">
          {storedUser.studentPhoto ? (
            <img
              src={storedUser.studentPhoto} // Use base64 URL directly
              alt="User Profile"
              className="w-32 h-32 object-cover rounded-full mx-auto shadow-md"
            />
          ) : (
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
              <span className="text-gray-500">No Image</span>
            </div>
          )}
          <h2 className="text-2xl font-semibold mt-4">{storedUser.name}</h2>
          <p className="text-gray-600">
            Login ID:{" "}
            <span className="font-semibold">{storedUser.loginId}</span>
          </p>
        </div>

        {/* Personal Information */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold border-b pb-2">
            Personal Information
          </h3>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <p>
              <strong>Email:</strong> {storedUser.email}
            </p>
            <p>
              <strong>Mobile:</strong> {storedUser.mobile}
            </p>
            <p>
              <strong>Date of Birth:</strong> {storedUser.dob}
            </p>
            <p>
              <strong>Gender:</strong>{" "}
              {storedUser.gender === "M" ? "Male" : "Female"}
            </p>
            <p>
              <strong>Occupation:</strong> {storedUser.occupation}
            </p>
          </div>
        </div>

        {/* Address Information */}
        {/* <div className="mb-4">
          <h3 className="text-lg font-semibold border-b pb-2">Address</h3>
          <div className="mt-4">
            <p>
              <strong>Address Line 1:</strong> {storedUser.address.line1}
            </p>
            <p>
              <strong>Address Line 2:</strong> {storedUser.address.line2}
            </p>
            <p>
              <strong>City:</strong> {storedUser.address.city}
            </p>
            <p>
              <strong>Pincode:</strong> {storedUser.address.pincode}
            </p>
          </div>
        </div> */}

        {/* Employment Information (if applicable) */}
        {storedUser.occupation === "Employed" && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold border-b pb-2">
              Employment Details
            </h3>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <p>
                <strong>Employer Name:</strong> {storedUser.employerName}
              </p>
              <p>
                <strong>Designation:</strong> {storedUser.designation}
              </p>
              <p>
                <strong>Functional Area:</strong> {storedUser.functionalArea}
              </p>
              <p>
                <strong>Experience:</strong> {storedUser.experience.years}{" "}
                years, {storedUser.experience.months} months
              </p>
              <p>
                <strong>Salary:</strong> {storedUser.salary}
              </p>
            </div>
          </div>
        )}

        {/* Additional Skills and Center Info */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold border-b pb-2">
            Additional Information
          </h3>
          <div className="mt-4">
            <p>
              <strong>Additional Skills:</strong>{" "}
              {storedUser.additionalSkills || "N/A"}
            </p>
            <p>
              <strong>How did you know about our center?</strong>{" "}
              {storedUser.knowCenter || "N/A"}
            </p>
          </div>
        </div>

        {/* Signature */}
        <div className="text-center mt-6">
          <h3 className="text-lg font-semibold">Signature</h3>
          {storedUser.signature ? (
            <img
              src={storedUser.signature} // Use base64 URL directly for signature
              alt="User Signature"
              className="w-48 h-16 object-contain mx-auto mt-2"
            />
          ) : (
            <p>No signature provided</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
