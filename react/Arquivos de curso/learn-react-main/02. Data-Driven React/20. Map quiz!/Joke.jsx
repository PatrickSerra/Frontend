import { useState } from "react";

export default function Joke(props) {
  let [isShown, setIsShown] = useState(false);

  return (
    <>
      {props.setup && <p className="setup">Setup: {props.setup}</p>}
      {isShown && <p className="punchline">Punchline: {props.punchline}</p>}

      <button onClick={() => setIsShown(!isShown)}>
        {isShown ? "Hide" : "Show"}
      </button>
      <hr />
    </>
  );
}
