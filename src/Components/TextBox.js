import { useState } from 'react';
import '../App.css'


const TextBox=(props)=>{
    const handleonChange=()=>{
        console.log("Button was pressed")
    }
    const Uppcase=()=>{
        let newtext = text.toUpperCase();
        setText(newtext)
        
    }
    const lowcase=()=>{
        let newtext = text.toLowerCase();
        setText(newtext)
        
    }
    const initialcase=()=>{
        const sentence = text
        const words = sentence.split(" ");
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
        setText(words.join(" "))
        
    }
    const [text,setText] = useState('Enter your text here');
    return(
        <div className='container'>
            <h2>{props.heading}</h2>
            <form action="/#">
                <div className="form-group">
                    {/* <label for="exampleFormControlTextarea1">{props.head_name}</label> */}
                    <textarea className="form-control" value={text} id="exampleFormControlTextarea1" rows="13" onChange={handleonChange}></textarea>
                </div>
                <button type="button" className="btn btn-primary btn-sm" onClick={Uppcase} onChange={handleonChange}>Convert to Uppercase</button>
                <button type="button" className="btn btn-secondary btn-sm" onClick={lowcase} onChange={handleonChange}>Convert to Lowercase</button>
                <button type="button" className="btn btn-primary btn-sm" onClick={initialcase} onChange={handleonChange}>Convert first letter to Uppercase</button>

            </form>
        </div>
    );

}
export default TextBox;