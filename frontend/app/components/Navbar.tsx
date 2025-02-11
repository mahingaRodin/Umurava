import AdminLink from "./AdminLink";

const Navbar = () => {
  return (
    <nav className="px-[100px] py-6 flex justify-between items-center border-b">
      {/* Your existing nav items */}
      
      <div className="flex items-center gap-4">
        {/* Other nav items */}
        <AdminLink />
      </div>
    </nav>
  );
};

export default Navbar; 