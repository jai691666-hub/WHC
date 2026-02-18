import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Confirmation = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <View style={styles.headerBox}>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.subtitle}>Let's get you started</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.question}>Are you already a student?</Text>

        <TouchableOpacity 
          style={styles.btnYes}
          onPress={() => navigation.navigate("editProfile")}
        >
          <Text style={styles.btnText}>Yes, I am a Student</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.btnNo}
          onPress={() => navigation.navigate("EnrollGet")}
        >
          <Text style={styles.btnText2}>No, I want to Enroll</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Confirmation

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },

  headerBox: {
    alignItems: "center",
    marginBottom: 40
  },

  title: {
    fontSize: 34,
    fontWeight: "800",
    color: "#e76026"
  },

  subtitle: {
    fontSize: 16,
    color: "#555",
    marginTop: 5
  },

  card: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 20,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    alignItems: "center"
  },

  question: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    marginBottom: 25,
    textAlign: "center"
  },

  btnYes: {
    width: "100%",
    backgroundColor: "#e76026",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 15
  },

  btnNo: {
    width: "100%",
    backgroundColor: "#fff",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#e76026"
  },

  btnText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600"
  },

  btnText2: {
    fontSize: 18,
    color: "#e76026",
    fontWeight: "600"
  }
})
