import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect } from 'react';

const CreaterSplash = ({ navigation }) => {

 
      setTimeout(() => {
          navigation.navigate("Cdashboard");   
        },2500)



  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/splashScreen.jpg")}
        style={styles.splashImage}
        resizeMode="cover"
      />
    </View>
  );
};

export default CreaterSplash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  splashImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
