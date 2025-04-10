import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Daterangepicker.css";
import { useState } from "react";

const MyDateRangePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="date-range-picker-container">
      <DatePicker
        selectsRange
        startDate={startDate}
        endDate={endDate}
        onChange={(dates) => {
          const [start, end] = dates;
          setStartDate(start);
          setEndDate(end);
        }}
        placeholderText="Select Date Range"
        dateFormat="dd/MM/yyyy"
        onCalendarClose={() => console.log("Calendar Closed")}
      />
    </div>
  );
};

export default MyDateRangePicker;
