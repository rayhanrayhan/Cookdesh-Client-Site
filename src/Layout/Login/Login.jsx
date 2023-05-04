import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
      setError("Failed to sign in with Google");
    }
  };

  const handleSignInWithGitHub = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
    } catch (error) {
      console.error(error);
      setError("Failed to sign in with GitHub");
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Validation
    if (email === "" || password === "") {
      setError("Please enter both email and password");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user.uid);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);
      setError("Failed to sign in with email and password");
    }
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
              value={email}
              onChange={handleEmailChange}
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
              value={password}
              onChange={handlePasswordChange}
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
