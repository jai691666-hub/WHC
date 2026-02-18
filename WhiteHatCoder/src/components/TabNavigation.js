import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ProfileScreen from '../components/ProfileScreen';
import AboutScreen from '../Screen/AboutScreen';

const TabNavigation = () => {
const Tab = createBottomTabNavigator();

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
else if (route.name === 'DailyTask') iconName =require('../assets/about.png') ;
else if (route.name === 'Profile') iconName =  require('../assets/profile.png');
return <Image  source={iconName} style={{height:25, width:25,tintColor: focused ? '#FF6B6B' : '#999999',}}  />;
},
})}
>
<Tab.Screen name='Home' component={HomeScreen} />
<Tab.Screen name='DailyTask' component={AboutScreen} />
<Tab.Screen name='Profile' component={ProfileScreen} />
</Tab.Navigator>
// </NavigationContainer>
);
};

export default TabNavigation;

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
marginTop:20,
position:'relative'
},
});
