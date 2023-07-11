// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const RegistrationForm: React.FC = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [username, setUserName] = useState("");
//   const [emailerror,setEamilError] =useState("");
  
//   const navigate = useNavigate();
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
//     if (!validateEmail(email)) {

//       setEamilError("Please enter a valid email");
//     } else {
//       setEamilError("");
//       registerUser();
//     }
   
//   };

//   const registerUser = async () =>{
//     try {
//       const response = await axios.post("http://localhost:4000/api/register", {
//         username,
//         password,
//         email,
//       });
//       // console.log(response);
//       // console.log(response.data);
//       // console.log(response.data.status);
//     if (response.data.id) {
//       navigate("/login");
//     } else if (response.data.status === 401) {
//       setErrorMessage("Error registering user");
//     } 
//    } catch (error) {
//       console.error(error);
//     }
//   }
//   const validateEmail = (email: string) => {
//     // Regular expression for email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };


  
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <form className="w-full max-w-sm bg-white rounded-lg shadow-md p-6">
//         <h2 className="text-3xl mb-6 text-center font-semibold text-gray-800">Register</h2>
//         <div className="mb-4">
//           <label
//             className="block text-sm font-semibold text-gray-700 mb-1"
//             htmlFor="email"
//           >
//             Email
//           </label>
//           <input
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
//             id="email"
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           {emailerror && (
//             <p className="text-red-500 mt-2 text-sm">{emailerror}</p>
//           )}
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-sm font-semibold text-gray-700 mb-1"
//             htmlFor="password"
//           >
//             Password
//           </label>
//           <input
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
//             id="password"
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div className="mb-6">
//           <label
//             className="block text-sm font-semibold text-gray-700 mb-1"
//             htmlFor="username"
//           >
//             Username
//           </label>
//           <input
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
//             id="username"
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUserName(e.target.value)}
//           />
//         </div>
//         {errorMessage && (
//           <p className="text-red-500 mt-2 text-sm text-center">{errorMessage}</p>
//         )} 
//         <button
//           className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none"
//           type="submit"
//           onClick={handleSubmit}
//         >
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default RegistrationForm;


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegistrationForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email");
    } else if (!validateUsername(username)) {
      setEmailError("");
      setUsernameError("Please enter a valid username");
    } else if (!validatePassword(password)) {
      setEmailError("");
      setUsernameError("");
      setPasswordError("Please enter a valid password");
    } else {
      setEmailError("");
      setUsernameError("");
      setPasswordError("");
      registerUser();
    }
  };

  const registerUser = async () => {
    try {
      const response = await axios.post("http://localhost:4000/api/register", {
        username,
        password,
        email,
      });
      if (response.data.id) {
        navigate("/login");
      } else if (response.data.status === 401) {
        setErrorMessage("Error registering user");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const validateEmail = (email: string) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateUsername = (username: string) => {
    // Regular expression for username validation
    const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
    return usernameRegex.test(username);
  };

  const validatePassword = (password: string) => {
    // Regular expression for password validation
    // Modify this regex as per your password requirements
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="w-full max-w-sm bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl mb-6 text-center font-semibold text-gray-800">
          Register
        </h2>
        <div className="mb-4">
          <label
            className="block text-sm font-semibold text-gray-700 mb-1"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            required
            pattern={'/^[^\s@]+@[^\s@]+\.[^\s@]+$/'}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && (
            <p className="text-red-500 mt-2 text-sm">{emailError}</p>
          )}
        </div>
        <div className="mb-4">
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
          {passwordError && (
            <p className="text-red-500 mt-2 text-sm">{passwordError}</p>
          )}
        </div>
        <div className="mb-6">
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
          {usernameError && (
            <p className="text-red-500 mt-2 text-sm">{usernameError}</p>
          )}
        </div>
        {errorMessage && (
          <p className="text-red-500 mt-2 text-sm text-center">
            {errorMessage}
          </p>
        )}
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none"
          type="submit"
          onClick={handleSubmit}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
