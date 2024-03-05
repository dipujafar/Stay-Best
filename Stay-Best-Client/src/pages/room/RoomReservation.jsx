import { useState } from "react";
import { DateRangePicker } from "react-date-range";
const RoomReservation = () => {
  const [enable, setEnable] = useState(false);

  const [date, setdate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSelect = (ranges) => {
    console.log(ranges);

    setdate({
      startDate: ranges?.selection?.startDate,
      endDate: ranges?.selection?.endDate,
      key: "selection",
    });

    setEnable(true);
  };
  {
    return (
      <div>
        <DateRangePicker ranges={[date]} onChange={handleSelect} />
        <div>
          <button
            className={`btn bg-orange-900 text-white w-full ${
              enable ? "" : "btn-disabled"
            }`}
          >
            Book Now
          </button>
        </div>
      </div>
    );
  }
};

export default RoomReservation;
