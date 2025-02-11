import "./button.css";

const Buttondemo = ({ label,onClick }) => {
  return (
    <div>
      <button className="btn-login" onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default Buttondemo;
