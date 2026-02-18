import { Button, StyleSheet, Text, View } from 'react-native'
import React ,{useContext}from 'react'
import courses from '../Screen/JsonData'
import UserContext from '../../context/UserContext'

const DemTest = () => {
  const {name,data,setData}=useContext(UserContext)
  return (
    <View>
      <Text>DemTest</Text>
      <Text style={{color:"red",fontSize:40}}>{name}</Text>
      <Text style={{color:"red",fontSize:40}}>{data}</Text>
      <Button title='change' onPress={()=>setData("sahil")}/>
    </View>
  )
}

export default DemTest

const styles = StyleSheet.create({})
