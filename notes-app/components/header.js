import { Button,TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import {colors} from '../constants/colors';
import {LinearGradient} from 'expo-linear-gradient';
const Header = ({editScreenSwitch,setShowModal}) => {
    const styles = StyleSheet.create({
        header: {
            width: '100%',
            height: 110,
            paddingTop: 20,
            marginBottom: 10,
    
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
    
            borderColor: colors.fontText,
            borderBottomWidth: 2,
        },
        headerTitle: {
            fontWeight: 'bold',
            fontSize: 30,
            color: colors.fontText,
            width: '60%',
            textAlign: 'center',
        },
        headerButton: {
            width: '15%',
        },
        headerButtonText: {
            color: colors.fontText,
            textAlign: 'center',
            fontSize: 50, 
        }
    })
    
    return (
    <LinearGradient colors={[colors.accent,colors.primary]}>
        <View style={styles.header}>
            <View style={styles.headerButton}><TouchableOpacity onPress={()=>editScreenSwitch(true)}><Text style={styles.headerButtonText}>+</Text></TouchableOpacity></View>
            <Text style={styles.headerTitle}>Notes</Text>
            <View style={styles.headerButton}><TouchableOpacity onPress={()=>setShowModal(true)}><Text style={styles.headerButtonText}>=</Text></TouchableOpacity></View>
        </View>
    </LinearGradient>
    );
}

export default Header;