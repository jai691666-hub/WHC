import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Dummy = () => {
const[ task, settask]= useState('')
const[tasklist, settasklist]=useState([])

const managetask=()=>{
settasklist([...tasklist, { id: Date.now().toString(), title: task }]);
settask('');
}   
const renderItem=({item})=>(
  <View>
    <Text>{item.title}</Text>
  </View>
)

  return (
    <View>
      <Text>TO-DO LIST</Text>
      <TextInput
      placeholder='enter task'
      style={{borderWidth:1, margin:10, borderRadius:20, padding:10}}
      value={task}
      onChangeText={settask}
      />
      <Button title='add task' onPress={managetask} />


      {
      tasklist.length===0?(
      <Text>
        task is empty
      </Text>
  )
      :
      (
      <FlatList
      data={tasklist}
      keyExtractor={(item)=>item.id}
      renderItem={renderItem}
      />
      )
    }
    </View>
  )
}

export default Dummy

const styles = StyleSheet.create({})