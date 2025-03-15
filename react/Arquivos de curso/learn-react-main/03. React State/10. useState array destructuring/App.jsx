import React from "react"
import { useState } from "react";

export default function App() {
    const [result, func] = useState("Heck yes");
    console.log(result)
    
    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button className="value">{result}</button>
        </main>
    )
}
