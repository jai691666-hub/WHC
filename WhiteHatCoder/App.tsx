import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { enableScreens } from 'react-native-screens'
import NavigationScreen from './src/components/NavigationScreen'
import TabNavigation from './src/components/TabNavigation'
import PersonalDetail from './src/Screen/PersonalDetail'
import Dummy from './src/Screen/Dummy'
import AboutScreen from './src/Screen/AboutScreen'
import ConditionalRandering from './src/Screen/ConditionalRandering'
import Confirmation from './src/Screen/Confirmation'
import EnrollCourses from './src/Screen/EnrollCourses'
import EnrollPopular from './src/Screen/EnrollPopular'
import EnrollHome from './src/Screen/EnrollHome'
import DemTest from './src/Screen/DemTest'
import CreaterDashboard from './src/createrfolder/CreaterDashboard'
import Createcourse from './src/createrfolder/Createcourse'
import Createrprofile from './src/createrfolder/Createrprofile'
import CreaterNavigation from './src/createrfolder/CreaterNavigation'
import DemTest2 from './src/Screen/DemTest2'
import UserContext from './context/UserContext'
import firebase from '@react-native-firebase/app';
enableScreens()
const App = () => {
  return (
      <NavigationScreen/>
      // <DemTest/>
      // <EnrollHome/>
      // <EnrollPopular/>
      // <EnrollCourses/>
      // <Confirmation/>
      // <ConditionalRandering/>
      // <AboutScreen/>
      // <Dummy/>
      // <TabNavigation/>
      // <PersonalDetail/>
      // <CreaterDashboard/>
      // <Createcourse/>
      // <Createrprofile/>
      // <CreaterNavigation/>


// <UserContext.Provider value={{data,name,setData}}>
  
     
//          <DemTest/>
//          <DemTest2/>

// </UserContext.Provider> 
  )
}

export default App

const styles = StyleSheet.create({})