import React from "react";
import {useState} from "react"

export default function App() {
  /**
   * Challenge: Replace our hard-coded "Yes" on the page with
   * some state initiated with React.useState()
   */

    const result = useState("hello")
    console.log(result);
    
  return (
    <main>
      <h1 className="title">Is state important to know?</h1>
      <button className="value">
         result[0]
      </button>
    </main>
  );
}
