import {Image, ScrollView, StyleSheet,Text, View} from 'react-native'
import { Ionicons, Foundation } from '@expo/vector-icons';
import Payments from '../components/payments';
import Adverts from '../components/advertisement';
import Header from '../components/header/header';
import Discover from '../components/Discover';

export default function Home(){
    const card = require("../../assets/card.png")
    return(
        <ScrollView>
            <Header hidden={false}/>
            <View style={styles.container}>
                <Payments/>
                <View style={styles.box}>
                    <Image style={{width: 16, height: 16,}} source={card} />
                    <Text style={styles.label}> Meus Cartões </Text>
                </View>
                <Adverts/>
                {/* separator */}

                <View  style={{marginTop:20, borderTopColor: '#F0F1F5', borderTopWidth: StyleSheet.hairlineWidth}}>
                    <View style={styles.row}>
                        <Text style={styles.subtitle}> Cartão de Crédito </Text>
                        <Ionicons name="chevron-forward-outline" size={20} color="#908D91" />
                    </View>
                    <View style={styles.div}>
                        <Text style={styles.fonte}>Fatura atual</Text>
                        <Text style={{color: '#000', fontSize: 16, fontWeight: 'bold'}}>R$ 1.000,00</Text>
                        <Text style={{color: '#848389', fontSize: 10,}}>Limite disponível de R$ 5.000.000,00</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <Ionicons name="gift-outline" size={16} color="black" />
                    <Text style={styles.label}> Ultravioleta </Text>
                    <View style={{marginLeft:120}}>
                        <Text style={styles.label}>R$850,27</Text>
                    </View>
                </View>
                <View style={styles.hr}>
                    <Text style={{fontSize: 16, color:'#000', marginTop: 16, fontWeight: 'bold'}}>Acompanhe também</Text>
                    <View style={styles.box}>
                        <Ionicons name="options" size={16} color="black" />
                        <Text style={styles.label}> Controle de gastos </Text>
                        <View style={{marginLeft:80}}>
                            <Text style={styles.label}>R$980,27</Text>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <Foundation name="dollar" size={18} color="black" />
                        <Text style={styles.label}>Assistente de pagamentos</Text>
                    </View>
                </View>
                <View  style={styles.hr}>
                    <View style={styles.row}>
                        <Text style={styles.subtitle}> Empréstimo </Text>
                        <Ionicons name="chevron-forward-outline" size={20} color="#908D91" />
                    </View>
                    <View style={styles.div}>
                        <Text style={styles.fonte}>Valor disponível de até </Text>
                        <Text style={styles.fonte}>R$ 25.000.000,00</Text>
                    </View>

                </View>
                <Discover/>
            </View>
        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
        paddingBottom: 120,
    },
    div: {
        flexDirection: 'column',
        padding: 5,
        gap: 5,
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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingEnd: 16,
        paddingTop: 16,
    },
    subtitle: {
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold'
    },
    fonte: {
        color: '#848389', 
        fontSize: 12,
    },
    hr: {
        marginTop:20, 
        borderTopColor: '#F0F1F5', 
        borderTopWidth: StyleSheet.hairlineWidth,
    }
});