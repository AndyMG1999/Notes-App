import React from 'react';
import { useState } from 'react';
import {StyleSheet,View, TextInput, Keyboard, TouchableWithoutFeedback, ScrollView} from 'react-native';
import {colors} from '../constants/colors';

import EditHeader from '../components/EditHeader';

const EditScreen =  ({editTitle,setEditTitle,editDetails,setEditDetails,editScreenSwitch,addNote}) => {
    const styles = StyleSheet.create({
        screen:{
            height:'100%',
            paddingTop: 40,
            backgroundColor: colors.primary
        },
        noteTitle:{
            paddingHorizontal: 8,
            fontSize: 45,
            color: colors.fontText,
        },
        noteDetails: {
           paddingHorizontal: 8,
           fontSize: 30,
           color: colors.fontText, 
        }
    })

    return (
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
        <View style={styles.screen}>
        <ScrollView>
            <EditHeader addNote={addNote} title={editTitle} details={editDetails} editScreenSwitch={editScreenSwitch} />
            <TextInput style={styles.noteTitle} value={editTitle} onChangeText={(text)=>setEditTitle(text)} maxLength={25} multiline={true} placeholder='enter title here...' placeholderTextColor={colors.inputTitlePlaceholder} />
            <TextInput style={styles.noteDetails} multiline={true} value={editDetails} onChangeText={(text)=>setEditDetails(text)} placeholder='enter details here...' placeholderTextColor={colors.inputDetailsPlaceholder} />
        </ScrollView>
        </View>
        </TouchableWithoutFeedback>
    )
}


export default EditScreen;