import "./css/CountDown.css";

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? "countdown danger" : "countdown"}>
      <p>{value}</p>
      <span style={{}}>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
