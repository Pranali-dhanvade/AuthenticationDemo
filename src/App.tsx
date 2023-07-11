import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import Dashboard from "./components/Dashboard";
import Logout from "./components/Logout";
import { AuthProvider } from "./components/AuthContext";


const Home = () => {
  
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl mb-8">Welcome to the Home Page</h1>
      <div className="absolute top-10 right-10">
        <Link
          to="/login"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 ml-2"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/dashboard" element={<Dashboard username=""/>} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
