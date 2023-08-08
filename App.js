
import { NavigationContainer } from '@react-navigation/native'
import { Routes } from './src/pages/Routes/routes'; 
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#830AD1"/>
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
    </>
  );
}