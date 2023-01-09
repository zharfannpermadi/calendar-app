import React from "react";
import Day from "./Day";

const Calendar = ({ month }) => {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((week, idxWeek) => (
        <React.Fragment key={idxWeek}>
          {week.map((day, idxDay) => (
            <Day day={day} key={idxDay} idxWeek={idxWeek} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Calendar;
