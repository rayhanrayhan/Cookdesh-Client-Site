import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providor/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { signInUser, googleSignIn, gitHubSignIn, setLoading } =
    useContext(AuthContext);
  const [error, setError] = useState(""); // create a state variable for the error message

  const handleSignInWithGoogle = () => {
    googleSignIn()
      .then((res) => {})
      .catch((error) => {
        setError(error.message); // update the error message state variable
      });
  };

  const handleSignInWithGitHub = () => {
    gitHubSignIn()
      .then((res) => {})
      .catch((error) => {
        setError(error.message); // update the error message state variable
      });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // Validation
    if (email === "" || password === "") {
      setError("Please enter both email and password"); // update the error message state variable
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long"); // update the error message state variable
      return;
    }
    setLoading(true);

    signInUser(email, password)
      .then((res) => {
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // console.log("Invalid email or password");
        form.reset();
        setLoading(false);
        toast.error("Invalid email or password");
        <ToastContainer />;
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
          {error && <div className="mb-5 text-red-500 font-bold">{error}</div>}{" "}
          {/* display the error message */}
          <button
            type="submit"
            className=" hover:bg-blue-700 btn btn-primary font-bold py-2 px-4 rounded"
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
