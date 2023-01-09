import moment from "moment";

const Day = ({ day, idxWeek }) => {
  const getCurrentDay = () => {
    return day.format("DD-MM-YY") === moment().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  };

  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {idxWeek === 0 && (
          <p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>
        )}
        <div className="flex align-middle">
          {day.format("DD") === "01" && (
            <p text-sm p-1 my-1>
              {day.format("MMM")}
            </p>
          )}
          <p className={`text-sm p-1 my-1 text-center ${getCurrentDay()}`}>
            {day.format("DD")}
          </p>
        </div>
      </header>
    </div>
  );
};

export default Day;
