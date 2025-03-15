import { useState } from "react";

export default function App() {
  /**
   * Challenge:
   * - Initialize state for `isGoingOut` as a boolean
   * - Make it so clicking the button flips that
   *   boolean value (true -> false, false -> true)
   * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
   */

  let [isGoingOut, setIsGoingOut] = useState(true);

  function flipGoingOut() {
    setIsGoingOut(isGoingOut => !isGoingOut);
  }

  return (
    <main>
      <h1 className="title">Do I feel like going out tonight?</h1>
      <button onClick={flipGoingOut} className="value" aria-label={`Cureent answer is ${isGoingOut}`}>
        {isGoingOut ? "Yes" : "No"}
      </button>
    </main>
  );
}
