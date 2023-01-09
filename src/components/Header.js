import moment from "moment";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const Header = () => {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };

  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };

  const handleToday = () => {
    setMonthIndex(moment().month());
  };

  return (
    <header className="px-4 py-2 flex items-center">
      <img src="./calendar.png" alt="calendar" className="mr-2 w-12 h-12" />
      <h1 className="mr-10 text-xl text-gray-500 font-bold">Calendar</h1>
      <button className="border rounded py-2 px-4 mr-5" onClick={handleToday}>
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_left
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_right
        </span>
      </button>
      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {moment(new Date(moment().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
};

export default Header;
