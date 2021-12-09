import React, {useState} from 'react';


export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) =>{
        // console.log("on change!!");
        setText(event.target.value);
    }


    const [text, setText] = useState('Enter text here');
    // setText("new text");
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>
             Convert to UPPERCASE
            </button>
        </div>
    )
}
