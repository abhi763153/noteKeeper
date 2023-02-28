import React from "react"
import "./Note.css";

const Note = (props) =>{

    function handleDelete(){
        props.delFun(props.id);
    }

    return (
            <div className="mainBox">
                <h3>{props.title}</h3>
                <p className="noteText">{props.des}</p>
                <button className="btn-del" onClick={handleDelete}>-</button>
            </div>
    )
}

export default Note;