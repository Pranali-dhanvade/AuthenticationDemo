import React, { useContext } from "react";
import Logout from "./Logout";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { useLocation } from 'react-router-dom';


interface DashboardProps {
  username: string;
}

const Dashboard: React.FC<DashboardProps> = (props) => {
  const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();

  console.log(location)
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }


  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-end p-4">
        <Logout />
      </div>
      <div className="max-w-3xl mx-auto py-8 px-4">
        <h2 className="text-3xl text-center font-semibold text-gray-800 mb-6">
        {`Welcome to the Dashboard, ${location?.state?.username}!`}
        </h2>
      </div>
    </div>
  );
};

export default Dashboard;
