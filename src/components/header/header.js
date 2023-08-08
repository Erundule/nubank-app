import React from "react";
import{ View, StyleSheet, Text,TouchableOpacity, Image } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import BalanceAcc from "../balance-account";


export default function Header({hidden}){
    const a = require("../../../assets/elipse-perfil.png")
    const [showBalance, setShowBalance] = React.useState(false);
    

    return(
        <View >
            <View style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity >
                        <Image style={{width: 48, height:46}} source={a} />
                    </TouchableOpacity>
                    {hidden ? (
                        <Text></Text>
                    ) : (
                        <Text style={styles.username}> Olá, Camila </Text>
                    )}
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
                    <MaterialCommunityIcons name="email-plus-outline" size={25} color="#fff" />
                </View>    
            </View>
            
            {hidden ? (
                <Text></Text>
            ) : (
                <BalanceAcc showBalance={showBalance}/>
            )}
            

        </View>
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
    
});