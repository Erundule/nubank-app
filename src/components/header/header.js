import React from "react";
import{ View, StyleSheet, Text,TouchableOpacity, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';


export default function Header(){
    const a = require("../../../assets/elipse-perfil.png")
    const [showBalance, setShowBalance] = React.useState(false);
    //caso o showBalance seja true, ele mostra o valor, caso seja false, ele mostra um container cinza
    const balance = () => {
        if (showBalance) {
            return 'R$ 1.000.000,00';
        }
        return '********'
    }

    return(
        <>
            <View style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity >
                        <Image style={{width: 48, height:46}} source={a} />
                    </TouchableOpacity>
                    <Text style={styles.username}> Olá, Camila </Text>
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
                        {showBalance ? (
                            <Ionicons name="eye-outline" size={25} color="#fff" />
                        ) : (
                            <Ionicons name="eye-off-outline" size={25} color="#fff" />
                        )}
                    </TouchableOpacity>
                    <Ionicons name="help-circle-outline" size={25} color="#fff" />
                    <Ionicons name="mail-outline" size={25} color="#fff" />
                </View>    
            </View>
            <View style={styles.row}>
                <Text style={styles.subtitle}> Conta </Text>
                <Ionicons name="chevron-forward-outline" size={20} color="#908D91" />
            </View>
            <Text style={styles.balance}> {balance(showBalance)} </Text>
                
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#830AD1',
        paddingTop: 40,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 16,
    },
    content: {
        flex: 1,
    },
    username: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 8,
    },
   
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 110,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    balance: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
        marginLeft: 16,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 16,
        paddingEnd: 16,
        paddingTop: 16,
    },
});