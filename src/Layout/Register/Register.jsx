import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

const Register = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [error, setError] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePhotoURLChange = (event) => {
    setPhotoURL(event.target.value);
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
    if (name === "" || email === "" || password === "") {
      setError("Please enter all required fields");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, {
        displayName: name,
        photoURL: photoURL,
      });
      setUser(userCredential.user.uid);

      // clear fields
      setName("");
      setEmail("");
      setPassword("");
      setPhotoURL("");
    } catch (error) {
      console.error(error);
      setError("Failed to create an account");
    }
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
              value={name}
              onChange={handleNameChange}
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
          <div className="mb-5">
            <label htmlFor="photoURL" className="block font-bold mb-1">
              Profile picture URL
            </label>
            <input
              type="text"
              id="photoURL"
              className="border border-gray-400 p-2 w-full"
              value={photoURL}
              onChange={handlePhotoURLChange}
            />
          </div>
          <div className="mb-5">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
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
        <p className="text-center mt-5">or</p>
        <div className="flex justify-center mt-5">
          <button
            onClick={handleSignInWithGoogle}
            className="bg-red-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-red-600"
          >
            Sign in with Google
          </button>
          <button
            onClick={handleSignInWithGitHub}
            className="bg-gray-800 text-white px-4 py-2 rounded-md ml-2 hover:bg-gray-900"
          >
            Sign in with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};
export default Register;
