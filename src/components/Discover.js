import { FlatList, Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Discover() {
    const list = [
        {
            id: 1,
            text: "Parcele compras no app",
            subtitle: "Descontos em compras à vista no crédito, controle total sobr...",
            image: require("../../assets/card-1.png"),
        },
        {
            id: 2,
            text: "Portabilidade de salário",
            subtitle: "Sua liberdade financeira começa com você escolhend...",
            image: require("../../assets/card-2.png"),
        },
        {
            id: 3,
            text: "Parcele compras no app",
            subtitle: "Descontos em compras à vista no crédito, controle total sobr...",
            image: require("../../assets/card-1.png"),
        },
    ]


    return (
        <View style={styles.hr}>
            <View style={styles.container}>
                <Text style={styles.title}>Descubra mais</Text>
                <FlatList horizontal
                    data={list}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (

                        <View key={item.id} >
                            <Image style={{width: 237, height: 93}} source={item.image} />
                            <View  style={styles.box}>
                                <Text style={styles.font}> {item.text} </Text>
                                <Text style={styles.subtitle}>{item.subtitle}</Text>
                                <TouchableOpacity style={styles.button}>Conhecer</TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    box: {
        width: 237,
        height: 136,
        gap: 10,
        backgroundColor: '#F0F1F5',
        borderRadius: 7,
        padding: 18,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginRight: 20,
    },
    font: {
        fontSize: 12,
        color: '#0E0A0E',
        fontWeight: 'bold',
        textAlign: 'left',
    },
    subtitle: {
        color: '#848389',
        fontSize: 12,
        textAlign: 'left',
    },
    button: {
        borderRadius: 11,
        fontSize: 10,
        fontWeight: 'bold',
        width: 60,
        height: 26,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#830AD1",
        color: '#fff',
    },
    title: {
        fontSize: 16,
        color: '#0E0A0E',
        fontWeight: 'bold',
        marginBottom: 16,
        marginTop: 16,
    },
    hr: {
        marginTop:20, 
        borderTopColor: '#F0F1F5', 
        borderTopWidth: StyleSheet.hairlineWidth,
    }
});

