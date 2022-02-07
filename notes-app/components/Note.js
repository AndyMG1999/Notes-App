import { useState } from 'react';
import {StyleSheet,View,Text,TouchableOpacity,TouchableNativeFeedback} from 'react-native';
import {colors} from '../constants/colors';

const Note = ({id,title,detailsDisplay,editCurrentNote,deleteNote}) => {
    const [isShowingDeleteButton,setIsShowingDeleteButton] = useState(false);
    
    const styles = StyleSheet.create({
        noteContainer: {
            flex: 1,
            width: '95%',
            marginTop: 15,
    
            borderColor: colors.noteOutline,
            backgroundColor: colors.noteBackground,
            borderWidth: 2.5,
            borderRadius: 10,
            
            flexDirection: 'row',
            alignItems: 'flex-end',
        },
        noteTextContainerWithDelete: {
            width: '75%',
        },
        noteTextContainerWithoutDelete: {
            flex: 1,
        },
        deleteContainer: {
            flex: 1,
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.deleteBackground,
        },
        deleteFont: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 18,
        },
        noteTitle: {
            paddingTop: 7,
            paddingHorizontal: 10,
            color: colors.noteTextTitle,
            fontSize: 30,
        },
        noteDescription: {
            paddingHorizontal: 10,
            paddingBottom: 5,
            color: colors.noteTextDetails,
            fontSize: 20,
        }
    });
    
    return (
    <TouchableOpacity onPress={()=> {editCurrentNote(id)}} onLongPress={()=>setIsShowingDeleteButton(!isShowingDeleteButton)}>
    <View style={styles.noteContainer}>
        <View style={isShowingDeleteButton? styles.noteTextContainerWithDelete: styles.noteTextContainerWithoutDelete}>
            <Text style={styles.noteTitle}>{title}</Text>
            <Text style={styles.noteDescription}>{detailsDisplay}</Text>
        </View>
        {isShowingDeleteButton && <TouchableNativeFeedback onPress={()=>deleteNote(id)}><View style={styles.deleteContainer}><Text style={styles.deleteFont}>DELETE?</Text></View></TouchableNativeFeedback>}
    </View>
    </TouchableOpacity>
    )
}


export default Note;