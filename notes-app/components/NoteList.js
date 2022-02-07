import Note from "./Note";
import {ScrollView, StyleSheet} from 'react-native';

const NoteList = ({noteData,editCurrentNote,deleteNote}) => {
    return(
        <ScrollView>
        {noteData.map((note)=>{
            return <Note key={note.id} id={note.id} title={note.title} details={note.details} deleteNote={deleteNote} detailsDisplay={(note.details.length > 100)? note.details.slice(0,100)+'...': note.details} editCurrentNote={editCurrentNote} />
        })}
        </ScrollView>
    )
};


export default NoteList;