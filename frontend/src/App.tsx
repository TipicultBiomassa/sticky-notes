import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Header from './components/Header';
import {useLocalStorage} from "./hooks/useLocalStorage";
import {NoteType} from "./types";



const App = () => {
  const [notes, setNotes] = useLocalStorage([
  ],'notes');



  useEffect(() => {
    if (!notes || !notes.length) {
      fetch(process.env.REACT_APP_API_ROOT + '/notes').then(res=>res.json()).then((json)=>{
        setNotes(json)
      });
    }
  }, []);

  const addNote = (text: string) => {
    const newNote = {
      content: text,
    };
    fetch(process.env.REACT_APP_API_ROOT + '/notes',{
      method:"POST",
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(
          {
            content: text,
          }
      )
    }).then(res=>res.json()).then((newNote)=>{
      setNotes([...notes, newNote]);
    })
  };

  const deleteNote = (id: number | undefined) => {
    fetch(process.env.REACT_APP_API_ROOT + '/notes/' + id,{
      method:"DELETE",
    }).then(res=>res.json()).then((deletedNode)=>{
      const newNotes = notes.filter((note: NoteType) => id !== note.id);
      setNotes(newNotes);
    })
  };
  const updateNote = async (id: number | undefined, content: string) =>{
    const request = await fetch(process.env.REACT_APP_API_ROOT + '/notes/' + id,{
      method:"PUT",
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(
          {
            content: content,
          }
      )
    });

    const response = await request.json();
      const newNotes = notes.map((note: NoteType) => {
        if(response.id === note.id) {
          note.content = content;
        }
        return note;
      });
      setNotes(newNotes);
  }
  return (
      <div >
        <div className='container'>
          <Header />
          <NotesList
              notes = {notes}
              handleAddNote={addNote}
              handleDeleteNote={deleteNote}
              updateNote={updateNote}
          />
        </div>
      </div>
  );
};

export default App;