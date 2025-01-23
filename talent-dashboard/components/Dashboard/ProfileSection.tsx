import Link from "next/link";
import Image from "next/image";
import { FaSignOutAlt } from "react-icons/fa"; // Import the sign out icon

const ProfileSection = () => {
  return (
    <Link
      href="/profile"
      className="flex items-center p-4 hover:bg-white hover:text-blue-500 rounded-lg mt-auto"
    >
      <div className="relative">
        <Image
          src="/images/image.jpg" // Replace with your image path
          alt="Profile"
          width={48}
          height={48}
          className="rounded-full"
        />
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
      </div>
      <div className="ml-3 flex-grow">
        <h3 className="font-medium text-sm">Hilaire Sh</h3>
        <p className="text-sm">hilaire@uidesign</p>
      </div>
      <FaSignOutAlt className="ml-2" />
    </Link>
  );
};

export default ProfileSection;
