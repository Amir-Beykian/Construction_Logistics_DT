import React, { useEffect, useState } from "react";
import API from "../services/api";

const ProjectDashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await API.get("profile/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h1>Welcome to the Project Dashboard</h1>
      {userData ? (
        <p>Logged in as: {userData.username} ({userData.role})</p>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default ProjectDashboard;
