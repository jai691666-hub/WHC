import { StyleSheet, Text, View,FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
// import { TouchableOpacity } from 'react-native-gesture-handler'

const ConditionalRandering = () => {
  const useritem=[
  {
    "id": 1,
    "category": "Electronics",
    "title": "Wireless Bluetooth Headphones",
    "price": 1499,
    "image": "https://example.com/img/headphones.jpg",
    "rating": 4.5
  },
  {
    "id": 2,
    "category": "Electronics",
    "title": "Smart Fitness Band",
    "price": 999,
    "image": "https://example.com/img/fitnessband.jpg",
    "rating": 4.2
  },
  {
    "id": 3,
    "category": "Electronics",
    "title": "USB-C Fast Charger",
    "price": 499,
    "image": "https://example.com/img/charger.jpg",
    "rating": 4.1
  },
  {
    "id": 4,
    "category": "Mobiles",
    "title": "Samsung Galaxy M34",
    "price": 16499,
    "image": "https://example.com/img/m34.jpg",
    "rating": 4.4
  },
  {
    "id": 5,
    "category": "Mobiles",
    "title": "iPhone 14",
    "price": 66999,
    "image": "https://example.com/img/iphone14.jpg",
    "rating": 4.8
  },
  {
    "id": 6,
    "category": "Fashion",
    "title": "Men's Cotton T-Shirt",
    "price": 399,
    "image": "https://example.com/img/tshirt.jpg",
    "rating": 4.3
  },
  {
    "id": 7,
    "category": "Fashion",
    "title": "Women's Kurti Set",
    "price": 999,
    "image": "https://example.com/img/kurti.jpg",
    "rating": 4.6
  },
  {
    "id": 8,
    "category": "Fashion",
    "title": "Men's Running Shoes",
    "price": 1299,
    "image": "https://example.com/img/shoes.jpg",
    "rating": 4.0
  },
  {
    "id": 9,
    "category": "Fashion",
    "title": "Women's Sneakers",
    "price": 1490,
    "image": "https://example.com/img/women_shoes.jpg",
    "rating": 4.1
  },
  {
    "id": 10,
    "category": "Home & Kitchen",
    "title": "Stainless Steel Water Bottle",
    "price": 299,
    "image": "https://example.com/img/bottle.jpg",
    "rating": 4.4
  },
  {
    "id": 11,
    "category": "Home & Kitchen",
    "title": "Electric Kettle 1.5L",
    "price": 1199,
    "image": "https://example.com/img/kettle.jpg",
    "rating": 4.5
  },
  {
    "id": 12,
    "category": "Home & Kitchen",
    "title": "Microfiber Bedsheet",
    "price": 799,
    "image": "https://example.com/img/bedsheet.jpg",
    "rating": 4.2
  },
  {
    "id": 13,
    "category": "Beauty",
    "title": "Aloe Vera Face Wash",
    "price": 199,
    "image": "https://example.com/img/facewash.jpg",
    "rating": 4.1
  },
  {
    "id": 14,
    "category": "Beauty",
    "title": "Matte Liquid Lipstick",
    "price": 299,
    "image": "https://example.com/img/lipstick.jpg",
    "rating": 4.3
  },
  {
    "id": 15,
    "category": "Beauty",
    "title": "Hair Growth Oil",
    "price": 349,
    "image": "https://example.com/img/hairoil.jpg",
    "rating": 4.0
  },
  {
    "id": 16,
    "category": "Sports",
    "title": "Football Size 5",
    "price": 699,
    "image": "https://example.com/img/football.jpg",
    "rating": 4.4
  },
  {
    "id": 17,
    "category": "Sports",
    "title": "Cricket Bat",
    "price": 1299,
    "image": "https://example.com/img/bat.jpg",
    "rating": 4.2
  },
  {
    "id": 18,
    "category": "Sports",
    "title": "Yoga Mat (6mm)",
    "price": 499,
    "image": "https://example.com/img/yogamat.jpg",
    "rating": 4.5
  },
  {
    "id": 19,
    "category": "Toys",
    "title": "Remote Control Car",
    "price": 899,
    "image": "https://example.com/img/rc_car.jpg",
    "rating": 4.3
  },
  {
    "id": 20,
    "category": "Toys",
    "title": "Building Block Set",
    "price": 599,
    "image": "https://example.com/img/blocks.jpg",
    "rating": 4.6
  },
  {
    "id": 21,
    "category": "Books",
    "title": "Atomic Habits",
    "price": 399,
    "image": "https://example.com/img/atomic.jpg",
    "rating": 4.8
  },
  {
    "id": 22,
    "category": "Books",
    "title": "Rich Dad Poor Dad",
    "price": 299,
    "image": "https://example.com/img/richdad.jpg",
    "rating": 4.7
  },
  {
    "id": 23,
    "category": "Books",
    "title": "Think and Grow Rich",
    "price": 249,
    "image": "https://example.com/img/thinkgrow.jpg",
    "rating": 4.5
  },
  {
    "id": 24,
    "category": "Gadgets",
    "title": "Portable Mini Speaker",
    "price": 699,
    "image": "https://example.com/img/speaker.jpg",
    "rating": 4.4
  }
]

  const[user, setUser]=useState([])
  const[selectedCategory, setSelectedCategory]= useState('All')
  // fetch('https://jsonplaceholder.typicode.com/users')
  // .then(Response=>Response.json)
  // .then(data=>setUser(data))
  // .catch(error=>console.log(error))
  const categories=[
    'All', 'Electronics', 'Mobiles','Fashion','Home & Kitchen',"Beauty","Sports","Toys","Books", "Gadgets"
  ]

  const FilterData= selectedCategory==='All'
  ? useritem 
  : useritem.filter(u=>u.category===selectedCategory)

  
  const renderItem=({item})=>(
    <View style={{ borderWidth:2, margin:10,  borderColor:'white', height:40, alignItems:'center',paddingLeft:20 }}  >
      <Text>
        {item.title}
      </Text>
      <Text>
        {item.price}
      </Text>
    </View>
  )
  return (
    <View>
      <View>
        <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} >
  {
  

  categories.map((cat)=>(
    <View style={{ borderWidth:2, margin:10, width:100, borderColor:'white', flexDirection:'row',height:40, alignItems:'center',paddingLeft:20  }}  >
      <TouchableOpacity onPress={()=>setSelectedCategory(cat)}  >
        <Text>{cat}</Text>
      </TouchableOpacity>
    </View>
  
  ))

}
    </ScrollView>



</View>
 <FlatList
 data={FilterData}
 renderItem={renderItem}
 keyExtractor={item=>item.id}
 showsVerticalScrollIndicator={false}
 />



</View>
)

}
export default ConditionalRandering

const styles = StyleSheet.create({})