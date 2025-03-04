import "./Card.css";

const Card = (props) => {
  const style = {
    backgroundColor: props.color || "purple",
    borderColor: props.color || "purple",
  };

  return (
    <div className="card" style={style}>
      <div className="card__title">{props.titulo}</div>
      <div className="card__body">{props.children}</div>
    </div>
  );
};

export default Card;
