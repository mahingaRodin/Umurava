interface DashboardCardProps {
  title: string;
  description: string;
  status: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  description,
  status,
}) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <div className="flex justify-between items-center">
        <h3 className="font-bold">{title}</h3>
        <span
          className={`badge ${
            status === "Open" ? "bg-green-500" : "bg-gray-500"
          } text-white p-1 rounded`}
        >
          {status}
        </span>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
      <button className="mt-4 bg-blue-500 text-white p-2 rounded">
        View Challenge
      </button>
    </div>
  );
};

export default DashboardCard;
