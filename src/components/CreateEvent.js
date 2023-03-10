import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const CreateEvent = () => {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl"
      onClick={() => {
        setShowEventModal(true);
      }}
    >
      <img src="./plus.svg" alt="create" className="w-7 h-7" />
      <span className="pl-3 pr-7">Create</span>
    </button>
  );
};

export default CreateEvent;
