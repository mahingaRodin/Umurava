const Topbar: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <input
        type="text"
        placeholder="Search here..."
        className="border rounded-lg p-2 w-1/3"
      />
      <div className="flex items-center space-x-4">
        <span className="material-icons">notifications</span>
        <img
          src="/profile-placeholder.png"
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
};

export default Topbar;
