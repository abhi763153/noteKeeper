import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from "./Components/Footer/Footer";
import Note from "./Components/Note/Note";
import notesArr from './NotesFile';

function App() {
  return (
    <div className="App">
        <Header />

        <div className="mainDiv">
          
          { 
            notesArr.map((noteItem)=>{
              return <Note title={noteItem.title} des={noteItem.description}/>
            })
          }
          
        </div>
        <Footer/>
    </div>
  );
}

export default App;

