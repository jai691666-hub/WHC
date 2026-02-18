import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Createrprofile from './Createrprofile';
import CreaterDashboard from './CreaterDashboard';
import Createcourse from './Createcourse';
import CreaterSplash from './CreaterSplash';

const CreaterNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name="Csplash" component={CreaterSplash} />
        <Stack.Screen name='Cdashboard' component={CreaterDashboard}/>   
        <Stack.Screen name='Cprofile' component={Createrprofile}/>
        <Stack.Screen name='Ccourse' component={Createcourse}/>
      </Stack.Navigator>

  )
}

export default CreaterNavigation

const styles = StyleSheet.create({})