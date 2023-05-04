import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providor/AuthProvider";

const Login = () => {
  const { signInUser, googleSignIn, gitHubSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleSignInWithGoogle = () => {
    googleSignIn()
      .then((res) => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleSignInWithGitHub = () => {
    gitHubSignIn()
      .then((res) => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // Validation
    if (email === "" || password === "") {
      setError("Please enter both email and password");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    signInUser(email, password)
      .then((res) => {
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-5">Log In</h1>
        <form onSubmit={handleFormSubmit}>
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
          {error && <div className="mb-5 text-red-500 font-bold">{error}</div>}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Log In
          </button>
        </form>
        <div className="mt-5">
          <button
            onClick={handleSignInWithGoogle}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Sign in with Google
          </button>
          <button
            onClick={handleSignInWithGitHub}
            className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
          >
            Sign in with GitHub
          </button>
        </div>
        <div className="mt-5">
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500">
              Register here.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
