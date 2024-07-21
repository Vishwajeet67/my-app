import React, { useState } from "react";

export default function TextBox() {
  const [text, setText] = useState("Enter your text");
  const convertToLower = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    
  };
  const convertToUpper = ()=>{
    console.log("Upper");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const convertToClear = ()=>{
    console.log("Upper");
    let newText = "";
    setText(newText);
  };
  const updateText=(event)=>{
    console.log("Onchange triggered");
    setText(event.target.value);
  };
  return (
    <div className = "container mb-3">
       <div className="classNameName='container my-3 form-group mx-3 ">
   <h3>Please Enter Your Text Here : </h3>
    <div ><textarea className="form-control" id="myBox" rows="8" value = {text} onChange={updateText}></textarea></div>
    <button type="button" className="btn btn-primary mx-1 my-1" onClick={convertToUpper} >Convert To upperCase</button>
    <button type="button" className="btn btn-primary mx-1 my-1" onClick={convertToLower} >Convert To lowerCase</button>
    <button type="button" className="btn btn-primary mx-1 my-1" onClick={convertToClear} >Clear</button>
    <h4>Your Text Summary :</h4>
    <p>There are {text.split(' ').length} words and {text.length} characters</p>
    <p>{0.008 * text.length} min read</p>
    <h4>Preview</h4>
    <p>{text}</p>
  </div>
    </div>
  )
}



