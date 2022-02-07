import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import EditScreen from './screens/EditScreen';
import {setColorAttribute,setToDefault} from './constants/colors';

export default function App() {
  const [noteData,setNoteData] =  useState([{id: Math.floor(Math.random() * Date.now()) ,title: 'Welcome to Notes!', details: 'To create a new note, tap on the \'+\' symbol above! Tap here to edit and hold to delete!'}]);
  const [isEditing,setIsEditing] = useState(false);
  const [editId,setEditId] = useState('');
  const [editTitle,setEditTitle] = useState('');
  const [editDetails,setEditDetails] = useState(''); 
  
  const shouldSwitchToEditScreen = (value) => {
    setIsEditing(value);
    if(value === false) setEditId('');

    setEditTitle('');
    setEditDetails('');
  }
  const editCurrentNote = (id) => {
    shouldSwitchToEditScreen(true);
    const currentNote = noteData.find((note)=>note.id === id);
    setEditTitle(currentNote.title);
    setEditDetails(currentNote.details);
    setEditId(id);
  };
  const addNote = (title,details) => {
    if(!title || !details) return;
    let newNotes;
    if(!editId) newNotes = [...noteData,{id: Math.floor(Math.random() * Date.now()), title, details}]
    else newNotes = noteData.map((note)=>{
      if(note.id === editId) return {...note, title:title,details:details};
      else return note;
    })
    setNoteData(newNotes);
    shouldSwitchToEditScreen(false);
    
    setEditTitle('');
    setEditDetails('');
  }
  const deleteNote = (id) => {
    const newNotes = noteData.filter((note) => note.id !== id);
    setNoteData(newNotes);
  }

  const changeColor = (color) => {
    console.log('change color here!');
    if(color === 1){
      setToDefault();
    }
    else if(color === 2){
      setToDefault();
      setColorAttribute('primary','rgb(255, 236, 143)');
      setColorAttribute('secondary','rgb(255, 236, 143)');
      setColorAttribute('accent','rgb(255, 254, 199)');
      setColorAttribute('fontText','rgba(0,0,0,0.85)');
      setColorAttribute('noteBackground','rgb(255, 209, 102)');
      setColorAttribute('noteOutline','rgb(212, 172, 80)');
      setColorAttribute('inputTitlePlaceholder','rgba(0,0,0,0.7)');
      setColorAttribute('inputDetailsPlaceholder','rgba(0,0,0,0.4)');
      setColorAttribute('noteTextTitle','rgba(0,0,0,0.85)');
      setColorAttribute('noteTextDetails','rgba(0,0,0,0.85)');
    }
    else if(color === 3){
      setToDefault();
      setColorAttribute('primary','rgb(255, 249, 235)');
      setColorAttribute('secondary','rgb(237, 232, 221)');
      setColorAttribute('accent','rgb(237, 232, 221)');
      setColorAttribute('fontText','rgba(0,0,0,0.85)');
      setColorAttribute('noteBackground','rgb(255, 249, 235)');
      setColorAttribute('noteOutline','rgb(66, 66, 66)');
      setColorAttribute('inputTitlePlaceholder','rgba(0,0,0,0.7)');
      setColorAttribute('inputDetailsPlaceholder','rgba(0,0,0,0.4)');
      setColorAttribute('noteTextTitle','rgba(0,0,0,0.85)');
      setColorAttribute('noteTextDetails','rgba(0,0,0,0.85)');
    }
  }

  return (
    <View style={styles.screen}>
      {isEditing? <EditScreen editTitle={editTitle} editDetails={editDetails} setEditTitle={setEditTitle} setEditDetails={setEditDetails} addNote={addNote} editScreenSwitch={shouldSwitchToEditScreen} />: <HomeScreen editCurrentNote={editCurrentNote} noteData={noteData} deleteNote={deleteNote} editScreenSwitch={shouldSwitchToEditScreen} changeColor={changeColor}/>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
})
