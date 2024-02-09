const StatusDisplay = ({ status }) => {
  const getColor = (status) => {
    let color = "bg-slate-700";
    switch (status.toLowerCase()) {
      case "done":
        {
        }
        color = "bg-green-200";
        return color;
      case "started":
        color = "bg-yellow-200";
        return color;
      case "not started":
        color = "bg-red-200";
        return color;
    }
    return color;
  };

  return (
    <span className={`inline=block py-1 px-2 text-xs rounded-full font-semibold text-gray-700 ${getColor(status)}`}>
      {status}
    </span>
  );
};

export default StatusDisplay;
