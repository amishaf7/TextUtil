import React ,{ useState } from 'react'

export default function TextForm(props) {
    const handleupclick= ()=>{
        console.log("uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success");
    }
    const handleLOclick= ()=>{
        console.log("uppercase was clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }
    const handleclearclick= ()=>{
        console.log("cleartext was clicked");
        props.showAlert("Clear text was clicked","success");
        let newText="";
        setText(newText);
    }
    const handonchange= (event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter the text");
    //text= "new text";  // wrong way
    //setText("my name"); //correct way
  return (
    <>
    <div className="container">
    <h3>{props.heading}</h3>
<div class="mb-3">
  <label htmlFor="myBox" class="form-label">Example textarea</label>
  <textarea className="form-control" value={text} onChange={handonchange} style={{backgroundColor:props.mode==="dark"?'light':'dark'}}id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary " onClick={handleupclick}>convert to uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handleLOclick}>convert to lowercase</button>
  <button className="btn btn-primary mx-2" onClick={handleclearclick}>clear text</button>
  </div>
 <div className="container">
    <h3>Your text summary</h3>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes Read</p>
    <h4>Preview</h4>
    <p>{text}</p>
 </div>
    </>
  )
}
