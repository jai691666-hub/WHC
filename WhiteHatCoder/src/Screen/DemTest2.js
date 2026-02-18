import { StyleSheet, Text, View,Button } from 'react-native'
import React,{useContext} from 'react'
import UserContext from '../../context/UserContext'

const DemTest2 = () => {
  const {name,data,setData}=useContext(UserContext)

  return (
    <View>
      <Text>DemTest2</Text>
           <Text style={{color:"red",fontSize:40}}>{name}</Text>
            <Text style={{color:"red",fontSize:40}}>{data}</Text>
            <Button title='change' onPress={()=>setData("sahil")}/>
    </View>
  )
}

export default DemTest2

const styles = StyleSheet.create({})