import padsData from "./pads";
import { useState } from "react";

export default function App() {
  /**
   * Challenge part 1:
   * 1. Initialize state with the default value of the
   *    array pulled in from pads.js
   * 2. Map over that state array and display each one
   *    as a <button> (CSS is already written for you)
   *    (Don't worry about using the "on" or "color"
   *    properties yet)
   */

  let [pads, setPadsState] = useState(padsData);

  return (
    <main>
      <div className="pad-container">
        {pads.map(({id, color}) => (
          <button key={id}>{color}</button>
        ))}
      </div>
    </main>
  );
}
