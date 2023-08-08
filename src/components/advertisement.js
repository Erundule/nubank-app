import { FlatList, Text, View, StyleSheet } from "react-native";

export default function Adverts() {
    const list = [
        {
            id: 1,
            text: "Você tem até R$ 12.500,00 disponíveis para empréstimo.",
        },
        {
            id: 2,
            text: "Salve seus amigos da burocracia. Faça um convite...",
        },
        {
            id: 3,
            text: "Pague suas contas sem sair de casa. É só cadastrar...",
        },
    ]
    return (
        <View style={styles.container}>
            <FlatList horizontal
                data={list}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View key={item.id} style={styles.box}>
                        <Text style={styles.font}>{item.text}</Text>
                    </View>
                )}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    box: {
        width: 250,
        height: 74,
        backgroundColor: '#F0F1F5',
        borderRadius: 7,
        padding: 18,
        alignItems: 'center',
        marginRight: 20,
        marginTop: 20,
    },
    font: {
        fontSize: 12,
        color: '#0E0A0E',
    }
});

