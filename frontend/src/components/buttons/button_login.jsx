import "./button.css";

const Buttondemo = ({ label }) => {
  return (
    <div>
      <button className="btn-login">
        {label}
      </button>
    </div>
  );
};

export default Buttondemo;
