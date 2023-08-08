import {ScrollView, StyleSheet,Text, View} from 'react-native'
import { Ionicons, Entypo, FontAwesome, Feather  } from '@expo/vector-icons';
import Header from '../components/header/header';

export default function Money(){
    return(
        <ScrollView>
            <Header hidden={true}/>
            <View style={styles.container}>
                <Text style={styles.title}>Acompanhe seu dinheiro</Text>
                <View style={styles.box}>
                    <Ionicons name="basket-outline" size={16} color="black" />
                    <Text style={styles.label}> Caixinhas </Text>
                    <View style={{marginLeft:125}}>
                        <Text style={styles.label}>R$980,27</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <Entypo name="bar-graph" size={16} color="black" />
                    <Text style={styles.label}> investimentos </Text>
                    <View style={{marginLeft:100}}>
                        <Text style={styles.label}>R$980,27</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <FontAwesome name="diamond" size={16} color="black" />
                    <Text style={styles.label}> Cripto </Text>
                    <View style={{marginLeft:145}}>
                        <Text style={styles.label}>R$980,27</Text>
                    </View>
                </View>
                <View style={styles.hr}>
                <Text style={styles.title}>Seguros</Text>
                    <View style={styles.box}>
                        <Entypo name="heart-outlined" size={16} color="black" />
                        <Text style={styles.label}> Seguro de vida </Text>   
                    </View>
                    <View style={styles.box}>
                        <Feather name="smartphone" size={16} color="black" />
                        <Text style={styles.label}> Seguro do celular </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
        paddingBottom: 100,
    },
    box: {
        width: 325,
        height: 41,
        backgroundColor: '#F0F1F5',
        borderRadius: 7,
        flexDirection: 'row',
        paddingStart: 16,
        alignItems: 'center',
        marginTop: 16,
        
    },
    label:{
        fontSize: 12, 
        color: '#0E0A0E',
        paddingStart: 13,
        fontWeight: 'bold',
    },
    hr: {
        marginTop:20, 
        borderTopColor: '#F0F1F5', 
        borderTopWidth: StyleSheet.hairlineWidth,
    },
    title: {
        fontSize: 16, 
        color:'#000', 
        marginTop: 16, 
        fontWeight: 'bold'
    }
});
