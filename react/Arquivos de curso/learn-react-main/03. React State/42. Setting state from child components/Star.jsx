import starFilled from "./images/star-filled.png";
import starEmpty from "./images/star-empty.png";

function Star({ isFilled, handleClick }) {
  let starIcon = isFilled ? starFilled : starEmpty;

  return (
    <button
      onClick={handleClick}
      aria-pressed={isFilled}
      aria-label={isFilled ? "Remove from favorites" : "Add to favorites"}
      className="favorite-button"
    >
      <img
        src={starIcon}
        alt={isFilled ? "filled star icon" : "empty star icon"}
        className="favorite"
      />
    </button>
  );
}

export default Star;
