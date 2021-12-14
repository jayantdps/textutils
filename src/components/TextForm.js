import React, {useState} from 'react';


export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        
    }
    const handleLoClick = () =>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () =>{
        // console.log("uppercase was clicked" + text);
        let newText = '';
        setText(newText);
        props.showAlert("text cleared", "warning");
    }
    const handleDupClick = () =>{
        // console.log("uppercase was clicked" + text);
        let newText = text.repeat(2);
        setText(newText);
    }
    const handleCopy = () => {
        // console.log("I am a copy")
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleOnChange = (event) =>{
        // console.log("on change!!");
        setText(event.target.value);
    }
    


    const [text, setText] = useState('');
    // setText("new text");
    return (
        <>
        <div className="container" style={{ color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8" 
            style={{ backgroundColor:props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'#042743'}}></textarea>
            </div>
            
            <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <button disabled= {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
             Convert to UPPERCASE
            </button>
            <button disabled= {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
             Convert to Lowercase
            </button>
            <button  disabled= {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleDupClick}>
             Duplicate text
            </button>
            <button disabled= {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
             Copy text
            </button>
            <button disabled= {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>
             Remove extra space
            </button>
            <button disabled= {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>
             Clear text
            </button>
            </div>
            </div>
        </div>
        <div className="container my-3" style={{ color:props.mode==='dark'?'white':'#042743'}}>
            <h2> Your text summary</h2>
            <p> {text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
            <p> {0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"nothing to preview"}</p>
        </div>
        </>
    )
}
