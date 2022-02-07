import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {colors} from '../constants/colors';
import NoteList from '../components/NoteList';
import Header from '../components/header';
import { useState } from 'react';

const HomeScreen = ({noteData,editScreenSwitch,editCurrentNote,deleteNote,changeColor}) => {
    const [showModal,setShowModal] = useState(false);
    const handleModal = (color) => {
        changeColor(color);
        setShowModal(false);
    }
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        screen: {
            backgroundColor: colors.primary,
            flex:1,
            paddingTop: 10,
            paddingLeft: 10,
        },
        modal: {
            width: '30%',
            marginLeft: '70%',
            height: '100%',
    
            alignItems: 'center',
            
            backgroundColor: colors.modalBackground,
            borderColor: colors.noteOutline,
            borderLeftWidth: 2,
        },
    });
    
    return (
        <View style={styles.container}>
            <Header editScreenSwitch={editScreenSwitch} setShowModal={setShowModal}/>
            <View style={styles.screen}>
                <NoteList editCurrentNote={editCurrentNote} noteData={noteData} deleteNote={deleteNote}/>                
            </View>
            {showModal && <Modal transparent={true}>
                <View style={styles.modal}>
                    <TouchableOpacity onPress={()=>handleModal(1)}><View style={colorBtn('rgb(0, 33, 50)')}></View></TouchableOpacity>
                    <TouchableOpacity onPress={()=>handleModal(2)}><View style={colorBtn('rgb(255, 236, 143)')}></View></TouchableOpacity>
                    <TouchableOpacity onPress={()=>handleModal(3)}><View style={colorBtn('rgb(255, 249, 235)')}></View></TouchableOpacity>
                </View>
            </Modal>}
        </View>
    )
}

const colorBtn = (color = 'rbga(0,0,0,0)') => {
    return { 
    marginTop: 50,
    width:  60,
    height: 60,
    
    backgroundColor: color,
    borderColor: colors.noteOutline,
    borderWidth: 2,
    borderRadius: 5,
    };
}


export default HomeScreen;