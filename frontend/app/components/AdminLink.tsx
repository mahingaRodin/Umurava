"use client";

const AdminLink = () => {
  const handleAdminNavigation = () => {
    // This will redirect to the admin login page running on port 3001
    window.location.href = "http://localhost:3001/auth/login";
  };

  return (
    <button 
      onClick={handleAdminNavigation}
      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
    >
      Admin Portal
    </button>
  );
};

export default AdminLink; 