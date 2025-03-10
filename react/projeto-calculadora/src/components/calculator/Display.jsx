import "./Display.css";

function Diplay({ value }) {
  return (
    <div className="calculator__display">
      <div className="calculator__display__content" >
         {value}
      </div>
    </div>
  );
}

export default Diplay;
