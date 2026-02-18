import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({ navigation }) => {

  useEffect(() => {
    const checkLogin = async () => {
      const data = await AsyncStorage.getItem("save");
      const emailsave=await AsyncStorage.getItem("savemail");

      setTimeout(() => {
        if (data||emailsave) {
          navigation.replace("EnrollGet");   
        } else {
          navigation.replace("getstarted");  
        }
      }, 2500);
    };

    checkLogin();
  }, []);

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

export default SplashScreen;

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
