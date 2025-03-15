import React from "react";
import { useState } from "react";

export default function App() {
  /**
   * Challenge:
   * Create state to track our count value (initial value is 0)
   * Don't forget to replace the hard-coded "0" with your new state
   */
  let [count, setCount] = useState(0);

  function add() {
     setCount(count + 1)
  }

  function minus() {
    setCount(count - 1)
  }

  return (
    <main className="container">
      <h1>How many times will Bob say "state" in this section?</h1>
      <div className="counter">
        <button className="minus" onClick={minus} aria-label="Decrease count">
          –
        </button>
        <h2 className="count">{count}</h2>
        <button className="plus" onClick={add} aria-label="Increase count">
          +
        </button>
      </div>
    </main>
  );
}
