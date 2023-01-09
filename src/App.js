import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import { getMonth } from "./utils";
import Header from "./components/Header";
import Calendar from "./components/Calendar";
import Sidebar from "./components/Sidebar";
import GlobalContext from "./context/GlobalContext";

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      <div className="h-screen flex flex-col">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <Calendar month={currentMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
