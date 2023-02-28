import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from "./Components/Footer/Footer";
import Note from "./Components/Note/Note";
// import notesArr from './NotesFile'; 
import NoteEditor from './Components/NoteEditor/NoteEditor';

function App() {

  const [notesArr, setNotesArr] = useState([]);
  const [sid, setSid] = useState(0);

  function addItem(note){
    
    if(note.title==="" || note.message===""){
      alert("Please add title and message both");
    }
    else{
      setNotesArr((prevState)=>{
        return [...prevState, note];
      })
    }

    console.log(notesArr);
      
  }

  function deleteItem(id){
    
    setNotesArr((preNotes)=>{
      return preNotes.filter((newNotes, index)=>{
        return id !== index;
      })
    })
  }

  return (
    <div className="App">
        <Header />
        <NoteEditor addFun={addItem} />

        <div className="mainDiv">

          { 
            notesArr.map((noteItem, index)=>{
              return <Note id={index} title={noteItem.title} des={noteItem.message} delFun={deleteItem}/>
            })
          }
          
        </div>
        <Footer/>
    </div>
  );
}

export default App;

