import CreateEvent from "./CreateEvent";
import SmallCalendar from "./SmallCalendar";
import Labels from "./Labels";

const Sidebar = () => {
  return (
    <div className="border p-5 w-64">
      <CreateEvent />
      <SmallCalendar />
      <Labels />
    </div>
  );
};

export default Sidebar;
