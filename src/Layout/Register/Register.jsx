import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providor/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const { createNewUser, upDateProfile, user } = useContext(AuthContext);
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;

    // Validation
    if (name === "" || email === "" || password === "") {
      setError("Please enter all required fields");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    createNewUser(email, password)
      .then((res) => {
        upDateProfile(user, name, photo)
          .then((res) => {
            console.log("profile Update");
          })
          .catch((error) => {
            setError(error.message);
          });
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-5">Register</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="block font-bold mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border border-gray-400 p-2 w-full"
              name="name"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block font-bold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-400 p-2 w-full"
              name="email"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block font-bold mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-400 p-2 w-full"
              name="password"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="photoURL" className="block font-bold mb-1">
              Profile picture URL
            </label>
            <input
              type="text"
              id="photoURL"
              className="border border-gray-400 p-2 w-full"
              name="photo"
            />
          </div>
          <div className="mb-5">
            <button
              type="submit"
              className="btn btn-primary px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Register
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login here.
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Register;
