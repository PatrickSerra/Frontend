import ReactDOM from "react-dom/client";

function App() {
  function handleClick() {
    console.log("I was clicked!");
  }

  function handleMouseMove() {
    console.log("Moving");
  }

  /**
   * Challenge: add our new function to the button
   */

  return (
    <main className="container">
      <img onMouseMove={handleMouseMove}
        src="https://picsum.photos/640/360"
        alt="Placeholder image from Picsum"
      />
      <button onClick={handleClick}>Click me</button>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
