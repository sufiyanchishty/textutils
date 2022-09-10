import React, {useState} from 'react'
// import PropTypes from 'prop-types'
export default function TextForm(props) {
    const upperCase = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" :converted to uppercase", "success ");
    }
    const clickonChange = (event)=>{
        console.log("on changed");
        setText(event.target.value);
    }
    const lowerCase = (event)=>{
        setText(event.target.value);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(" :converted to lowercase", "success ");
    }
    const [text, setText] = useState('')
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':"black"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3 my-3" >
                <label htmlFor="myBox" className="form-label"><h3>{props.subheading}</h3></label>
                <textarea className="form-control"  value = {text}  onChange={clickonChange}  id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'grey':"white",color:props.mode==='dark'?'white':"black"}}></textarea>
            </div>
            <button className="btn btn-primary" onClick={upperCase}>Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={lowerCase}>Lowercase</button>
        </div>
        <div className="container my-4" style={{color:props.mode==='dark'?'white':"black"}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p> You can read this text in {0.008 * text.split(" ").length} Minutes</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Enter something in the above textbox to preview"}</p>
        </div>
    </>
    )
}
