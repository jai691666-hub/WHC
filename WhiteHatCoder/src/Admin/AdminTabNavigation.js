import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AdminHome from './AdminHome'
import AdminDashboard from './AdminDashboard'
import AdminProfile from './AdminProfile'

const AdminTabNavigation = () => {
  const Tab = createBottomTabNavigator()
  return (
    // <NavigationContainer>
<Tab.Navigator
screenOptions={({ route }) => ({
headerShown: false,
tabBarStyle: styles.tabBar,
tabBarShowLabel: true,
tabBarActiveTintColor: '#FF6B6B',
tabBarInactiveTintColor: '#999999',
tabBarIcon: ({ focused, color, size }) => {
let iconName;
if (route.name === 'Home') iconName =require('../assets/home.png') ;
else if (route.name === 'Dashboard') iconName =require('../assets/about.png') ;
else if (route.name === 'Profile') iconName =  require('../assets/profile.png');
return <Image  source={iconName} style={{height:25, width:25,tintColor: focused ? '#FF6B6B' : '#999999',}}  />;
},
})}
>
<Tab.Screen name='Home' component={AdminHome} />
<Tab.Screen name='Dashboard' component={AdminDashboard} />
<Tab.Screen name='Profile' component={AdminProfile} />
</Tab.Navigator>
// </NavigationContainer>
  )
}

export default AdminTabNavigation

const styles = StyleSheet.create({
  tabBar: {
bottom: 25,
marginLeft:20,
marginRight:20,
height: 70,
borderRadius: 25,
backgroundColor: '#ffffffff',
shadowColor: '#000',
shadowOpacity: 0.15,
shadowRadius: 5,
shadowOffset: { width: 0, height: 5 },
elevation: 10,
paddingBottom: 10,
paddingTop:10, 
marginTop:20
},
})