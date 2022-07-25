import { useEffect, useState } from "react";

export default function Meme(){
    const [formData, setFormData] = useState({
        "top-text": "",
        "bottom-text": "",
        "random-img": "https://i.imgflip.com/1ur9b0.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        async function getMemesData(){
            const response = await fetch(`https://api.imgflip.com/get_memes`)
            const data = await response.json()
            console.log(data.data.memes[0])
            setAllMemes(data.data.memes)
        }
        getMemesData()
    }, [])

    const handleChange = (event) =>{
        const {name, type, value} = event.target
        setFormData(prevFormData =>({
            ...prevFormData,
            [name]: value
        }))
    }
    
    const getMemeImage = () => {
        const memesData = allMemes
        const meme = memesData[Math.floor(Math.random() * memesData.length)]
        const url = meme.url
        setFormData(prevFormData =>({
            ...prevFormData,
            "random-img": url
        }))
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <input
                name="top-text"
                className="form--input"
                placeholder="Enter Top-text"
                onChange={handleChange}
                value ={formData["top-text"]}>
                </input>

                <input
                name="bottom-text"
                className="form--input"
                placeholder="Enter Bottom-text"
                onChange={handleChange}
                value ={formData["bottom-text"]}>
                </input>
    
                <button className="form--button" onClick={getMemeImage}>Get a new meme image</button> 
            </form>

            <div className="meme">
                <h2 className="meme--top-text meme--text">{formData["top-text"]}</h2>
                <img src={formData["random-img"]} className="meme--image" alt="meme"></img>
                <h2 className="meme--bottom-text meme--text">{formData["bottom-text"]}</h2>
            </div>
            
        </main>
    );
}