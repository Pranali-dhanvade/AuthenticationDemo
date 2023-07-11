import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const LoginForm: React.FC = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const { login } = useContext(AuthContext);


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/login",
        { username, password },
        { withCredentials: true }
      );
      console.log(response.data.status);
      if (response.data.status === 404) {
        setErrorMessage("User not found!");
      }
      else {
        login(); 
        navigate("/dashboard", { state: { username } });
      }
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="w-full max-w-sm bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl mb-6 text-center font-semibold text-gray-800">Login</h2>
        <div className="mb-4">
          <label
            className="block text-sm font-semibold text-gray-700 mb-1"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-sm font-semibold text-gray-700 mb-1"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errorMessage && (
          <p className="text-red-500 mt-2 text-sm text-center">{errorMessage}</p>
        )}        
        
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none"
          type="submit"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
