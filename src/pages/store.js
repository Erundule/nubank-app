import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Header from '../components/header/header';

export default function Store() {
    return (
        <ScrollView>
            <Header hidden={true} />
            <View style={styles.container}>
                <Text style={styles.title}>Loja</Text>
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
    label: {
        fontSize: 12,
        color: '#0E0A0E',
        paddingStart: 13,
        fontWeight: 'bold',
    },
    hr: {
        marginTop: 20,
        borderTopColor: '#F0F1F5',
        borderTopWidth: StyleSheet.hairlineWidth,
    },
    title: {
        fontSize: 16,
        color: '#000',
        marginTop: 16,
        fontWeight: 'bold'
    }
});
