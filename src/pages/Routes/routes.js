import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../home'
import Money from '../money'
import Store from '../store' 
import { CustomTabBar } from '../../components/tabbar/tabbar' 

const Tab = createBottomTabNavigator();

export function Routes(){
  return(
    <Tab.Navigator
      
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#121212",

        tabBarStyle:{
          backgroundColor: "#FFF",
          borderTopWidth: 0
        }
      }}
      tabBar={(props) => <CustomTabBar {...props} />}    
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: 'compare-arrows',
        }}
      />
      <Tab.Screen 
        name="Money" 
        component={Money} 
        options={{
          tabBarIcon: 'attach-money'
        }}
      />
      <Tab.Screen 
        name="Store" 
        component={Store} 
        options={{
          tabBarIcon: 'storefront',
        }}
      />
    </Tab.Navigator>
  )
}
// export default function Routes(){
//     return(
//         <View style={styles.container}>
//             <ScrollView >
//                 <Header />
//                 <FirstPage/>
//             </ScrollView>
//         </View>
//     );
// }

    // const styles= StyleSheet.create({
    //     container: {
    //         flex: 1,
    //         backgroundColor: '#fff',
    //         marginBottom: 20,
    //     },
    // });