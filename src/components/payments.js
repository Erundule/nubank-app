import {StyleSheet, Text, TouchableOpacity, View, Image, FlatList} from 'react-native';
export default function Payments(){

    const list = [
        {
            id: 1,
            title: 'Área Pix',
            image: require("../../assets/pix.png"),
        },
        {
            id: 2,
            title: 'Pagar',
            image: require("../../assets/barcode.png"),
        },
        {
            id: 3,
            title: 'Pegar emprestado',
            image: require("../../assets/deposit.png"),
        },
        {
            id: 4,
            title: 'Transferir',
            image:  require("../../assets/money-transfer.png"),
        },
        {
            id: 5,
            title: 'Depositar',
            image: require("../../assets/request-money.png"),
        },
    ]
    return(
        <View style={styles.container}>
            <FlatList horizontal
                data={list}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <View >
                        <TouchableOpacity activeOpacity={0.9} key={item.id} style={styles.buttonUser}>
                            <Image style={{width: 22, height: 22,}} source={item.image} />
                        </TouchableOpacity>
                        <Text style={styles.font}>{item.title}</Text>
                    </View>
                )}
            />
        </View>
        
    );
}


const styles = StyleSheet.create({
    buttonUser: {
        width: 58,
        height: 56,
        margin: 16,
        backgroundColor: '#F0F1F5',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',

    },
    container: {
        backgroundColor: '#fff',
    },
    font: {
        fontSize: 12,
        margin: 12,
        color: '#000',
        fontWeight: 'regular',
        marginTop: 8,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: 70,
    }
});