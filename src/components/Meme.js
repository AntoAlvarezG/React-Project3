import { useState, useEffect } from "react";

export default function Meme () {

    // states

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    });

    const [allMemes, setAllMemes] = useState([]);

    // effects

    useEffect( () => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => {
            setAllMemes(data.data.memes)
        })
    }, [])

    // event handlers

    function getMemes () {
        const randomIndex = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomIndex].url;
        setMeme(prevMeme => ({ ...prevMeme, randomImage: url }))
    }

    function handleChange (event) {
        const { name, value } = event.target;
        setMeme(prevMeme => ({ ...prevMeme, [name]: value }))
    }

    return (
        <main>
            <div className="form">
                <input onChange={handleChange} name="topText" value={meme.topText} className="form--input" type="text" placeholder="Top text" />
                <input onChange={handleChange} name="bottomText" value={meme.bottomText} className="form--input" type="text" placeholder="Bottom text"/>
                <button className="form--button" onClick={getMemes}>
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img className="meme--img" src={meme.randomImage} alt="" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}