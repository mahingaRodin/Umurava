"use client";
import Image from "next/image";
import { FaSignOutAlt } from "react-icons/fa"; // Import the sign out icon
import { useRouter } from "next/navigation";

const ProfileSection = () => {
  const router = useRouter();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      // Clear user session (optional)
      localStorage.removeItem("token"); // Example: remove auth token
      router.push("/login"); // Navigate to login page
    }
  };

  return (
    <div className="flex items-center p-4 hover:bg-white hover:text-blue-500 rounded-lg mt-auto">
      <div className="relative">
        <Image
          src="/images/image.jpg"
          alt="Profile"
          width={50}
          height={50}
          className="rounded-full border-2 border-white"
        />
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
      </div>
      <div className="ml-3 flex-grow">
        <h3 className="font-medium text-sm">Hilaire Sh</h3>
        <p className="text-sm">hilaire@uidesign</p>
      </div>
      <button onClick={handleLogout}>
        <FaSignOutAlt className="ml-2" />
      </button>
    </div>
  );
};

export default ProfileSection;
