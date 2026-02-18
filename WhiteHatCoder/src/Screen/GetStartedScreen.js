import { 
  Button, 
  Image, 
  ImageBackground, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View 
} from "react-native";
import React from "react";

const GetStartedScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/getstartedscreen.jpg")}
      style={styles.image}
      resizeMode="cover"
    >


      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.replace("login")}
      >
        <Text style={styles.btnText}>GET STARTED</Text>
        <Image 
          source={require("../assets/right-arrow.png")}
          style={styles.btnIcon}
        />
      </TouchableOpacity>

    </ImageBackground>
  );
};

export default GetStartedScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 70,
  },

  textContainer: {
    marginTop: 80,
  },

  title: {
    fontSize: 48,
    fontWeight: "800",
    color: "#fff",
  },

  subtitle: {
    fontSize: 20,
    color: "#f0f0f0",
    marginTop: 10,
    width: "75%",
  },

  button: {
    height: 50,
    backgroundColor: "#e76026",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 6,
    marginTop:500
  },

  btnText: {
    fontSize: 17,
    fontWeight: "700",
    color: "#fff",
    letterSpacing: 1,
  },

  btnIcon: {
    height: 20,
    width: 20,
    marginLeft: 10,
    tintColor: "#fff",
  },
});
