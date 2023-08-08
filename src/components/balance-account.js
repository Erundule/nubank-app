import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
export default function BalanceAcc({showBalance}) {
    //caso o showBalance seja true, ele mostra o valor, caso seja false, ele mostra um container cinza
    const balance = () => {
        if (showBalance) {
            return 'R$ 1.000.000,00';
        }
        return '********'
    }
    return (
        <View style={styles.div}>
            <View style={styles.row}>
                <Text style={styles.subtitle}> Conta </Text>
                <Ionicons name="chevron-forward-outline" size={20} color="#908D91" />
            </View>
            <Text style={styles.balance}> {balance(showBalance)} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    
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
    div: {
        backgroundColor: '#fff',
    },
    row: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 16,
        paddingEnd: 16,
        paddingTop: 16,
    },
});