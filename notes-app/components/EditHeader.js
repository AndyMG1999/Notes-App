import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import {colors} from '../constants/colors';

const EditHeader = ({addNote,title,details,editScreenSwitch}) => {
    const styles = StyleSheet.create({
        header: {
            paddingTop: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
    
            paddingHorizontal: '12%',
        },
        headerText: {
            fontSize: 20,
            color: colors.fontText,
        }
    })
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={()=>{addNote(title,details)}}><Text style={styles.headerText}>Save</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>editScreenSwitch(false)}><Text style={styles.headerText}>Cancel</Text></TouchableOpacity>
        </View>
    )
}


export default EditHeader;