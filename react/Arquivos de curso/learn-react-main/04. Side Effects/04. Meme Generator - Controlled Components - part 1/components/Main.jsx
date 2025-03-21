import { useState } from "react"

export default function Main() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })
    
    let meme2 = {
        ...meme,
        algo: "kkkk"
    }

    console.log(meme2);
    

    function handleChange(event) {
        const {value} = event.currentTarget
        console.log(value);

        setMeme(prevMeme => ({
            ...prevMeme,
            topText: value
           
        }))

        
        /**
         * Challenge: update the topText value in the meme state
         * object every time the topText input box is changed
         * 
         * Note: don't worry about bottomText at this point.
         */
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}