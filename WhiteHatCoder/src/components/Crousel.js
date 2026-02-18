import { StyleSheet, Text, View,FlatList, Image } from 'react-native'
import React from 'react'

const Crousel = () => {
  const data=[{
    id:1,
    img:require('../assets/training.jpg')
  },
  {
    id:2,
    img:require('../assets/friendly.jpg')
  },
  {
    id:3,
    img:require('../assets/placement1.png')
  },
  
]

const renderItem1=({item})=>(
  <Image source={item.img} style={{height:200, width:330, borderRadius:10, margin:5
  }}  />
)
  return (
    <FlatList
    data={data}
    renderItem={renderItem1}
    keyExtractor={item=>item.id}
    horizontal

    />
  )
}

export default Crousel

const styles = StyleSheet.create({})