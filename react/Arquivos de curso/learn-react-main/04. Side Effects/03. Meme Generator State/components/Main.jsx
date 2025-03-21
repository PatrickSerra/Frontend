import {useState} from "react";

export default function Main() {
  /**
   * Challenge: move the hardcoded meme info into React
   * state. Use an object with `topText`, `bottomText`,
   * and `imageUrl` properties, and set the initial values to
   * the ones hardcoded below.
   */

  let [memeInfo, setMemeInfo] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input type="text" placeholder={memeInfo.topText} name="topText" />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            placeholder={memeInfo.bottomText}
            name="bottomText"
          />
        </label>
        <button>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={memeInfo.imageUrl} />
        <span className="top">One does not simply</span>
        <span className="bottom">Walk into Mordor</span>
      </div>
    </main>
  );
}
