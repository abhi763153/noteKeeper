import React from "react"
import "./Note.css";

const Note = (props) =>{

    return (
        <div className="mainBox">
            <h3>{props.title}</h3>
            <p className="noteText">{props.des}</p>
        </div>
    )
}

export default Note;