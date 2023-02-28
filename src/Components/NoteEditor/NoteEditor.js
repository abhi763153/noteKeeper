import React, { useState } from 'react';
import "./NoteEditor.css";

function NoteEditor(props) {

    

    const [note, setNote] = useState({
        title: "",
        message: ""
    })

    function handleChange(event){
        const {name, value} = event.target;

        setNote((preNote)=>{
            return {...preNote, [name]: value}
        })
    }

    function handleClick(){
        props.addFun(note);
        
    }

  return (
    <div className='noteEditor'>
        
        <input type="text" name="title" id="title" placeholder='Add your title' onChange={handleChange}/>
        <textarea name="message" id="message" cols="71" rows="7" placeholder='Write your message' onChange={handleChange}></textarea>
        <button className='btn' onClick={handleClick}>add</button>
    </div>
  )
}

export default NoteEditor