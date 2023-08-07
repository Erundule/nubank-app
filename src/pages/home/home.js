import {StyleSheet, View} from 'react-native'
import Header from '../../components/header/header';
import FirstPage from '../primeira-tela';
import Payments from '../../components/payments';

export default function Home(){
    return(
        <View style={styles.container}>
            <Header/>
            <Payments/>
            {/* <Footer/> */}
        </View>
    );
}

    const styles= StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff'
        },
    });