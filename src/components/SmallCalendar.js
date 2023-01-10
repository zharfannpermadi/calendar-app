import React from "react";
import moment from "moment";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import { getMonth } from "../utils";

const SmallCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const [currentMonthIdx, setCurrentMonthIdx] = useState(moment().month());
  const { monthIndex, setSmallCalendarMonth, selectedDay, setSelectedDay } =
    useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);

  useEffect(() => {
    setCurrentMonthIdx(monthIndex);
  }, [monthIndex]);

  const handleNextMonth = () => {
    setCurrentMonthIdx(currentMonthIdx + 1);
  };

  const handlePrevMonth = () => {
    setCurrentMonthIdx(currentMonthIdx - 1);
  };

  const getCurrentDay = (day) => {
    const format = "DD-MM-YY";
    const nowDay = moment().format(format);
    const currentDay = day.format(format);
    const daySelected = selectedDay && selectedDay.format(format);
    if (nowDay === currentDay) {
      return "bg-blue-500 text-white rounded-full";
    } else if (currentDay === daySelected) {
      return "bg-blue-100 text-blue-600 rounded-full font-bold";
    } else {
      return "";
    }
  };

  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <p className="text-gray-500 font-bold">
          {moment(new Date(moment().year(), currentMonthIdx)).format(
            "MMMM YYYY"
          )}
        </p>
        <div>
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
        </div>
      </header>
      <div className="grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day, idx) => (
          <span key={idx} className="text-sm py-1 text-center">
            {day.format("dd").charAt(0)}
          </span>
        ))}
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <button
                key={idx}
                className={`py-1 w-full ${getCurrentDay(day)}`}
                onClick={() => {
                  setSmallCalendarMonth(currentMonthIdx);
                  setSelectedDay(day);
                }}
              >
                <span className="text-sm">{day.format("D")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SmallCalendar;
