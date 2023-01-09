import CreateEvent from "./CreateEvent";
import SmallCalendar from "./SmallCalendar";

const Sidebar = () => {
  return (
    <div className="border p-5 w-64">
      <CreateEvent />
      <SmallCalendar />
    </div>
  );
};

export default Sidebar;
