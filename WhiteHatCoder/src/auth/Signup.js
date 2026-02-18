import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Dimensions,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ALERT_TYPE, Dialog, Root } from 'react-native-alert-notification';

// 1. Updated Imports for Modular API
import auth, { createUserWithEmailAndPassword } from '@react-native-firebase/auth';

const { width } = Dimensions.get('window');

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focusedField, setFocusedField] = useState(null); 

  const loadData = async () => {
    const data = await AsyncStorage.getItem("savemail");
    if (data) {
      try {
        const parsed = JSON.parse(data);
        setEmail(parsed.email || "");
      } catch (e) {
        setEmail(data); 
      }
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleContinue = async () => {
    const emailRegex = /\S+@\S+\.\S+/;
    
    if (!emailRegex.test(email)) {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: 'Invalid Email',
        textBody: 'Please enter a valid email address.',
        button: 'Understood',
      });
      return;
    }

    if (password.length < 6) {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: 'Weak Password',
        textBody: 'Password must be at least 6 characters long.',
        button: 'Understood',
      });
      return;
    }
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth(), email, password);
      
      if (userCredential) {
        await AsyncStorage.setItem("savemail", JSON.stringify({ email }));
        
        Dialog.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Success',
          textBody: 'Account created successfully!',
          button: 'Continue',
          onHide: () =>{
            if(email==='admin2@gmail.com'){
            navigation.navigate("AdminTab")
          }else if(email==='creater11@gmail.com'){
             navigation.navigate("CreaterNav")
          } 
          else{
            navigation.navigate('editProfile')
          }
        }
        });
      }

    } catch (error) {
      let errorMessage = 'An error occurred during signup.';
      
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'That email address is already in use!';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'That email address is invalid!';
      }

      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: 'Signup Failed',
        textBody: errorMessage,
        button: 'Try Again',
      });
      console.log(error);
    }
  };

  return (
    <Root>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined} 
        style={styles.container}
      >
        <View style={styles.inner}>
          <View style={styles.headerSection}>
            <Image 
              source={require('../assets/logo.jpg')} 
              style={styles.logo} 
            />
          </View>

          <View style={styles.imageContainer}>
             <Image
              source={require('../assets/man.jpg')}
              style={styles.mainIllustration}
              resizeMode="contain"
            />
          </View>

          <View style={styles.bottomCard}>
            <Text style={styles.loginTitle}>Create Account</Text>
            <Text style={styles.loginSubtitle}>
              Sign up to get started with your journey
            </Text>

            <View style={[
              styles.inputBox, 
              focusedField === 'email' && styles.inputBoxFocused
            ]}>
              <TextInput
                style={styles.input}
                placeholder="Email Address"
                placeholderTextColor="#AAB"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                onChangeText={(text) => setEmail(text)}
              />
            </View>

            <View style={[
              styles.inputBox, 
              { marginTop: 15 },
              focusedField === 'password' && styles.inputBoxFocused
            ]}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#AAB"
                secureTextEntry={true}
                value={password}
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField(null)}
                onChangeText={(text) => setPassword(text)}
              />
            </View>

            <TouchableOpacity 
              style={styles.button} 
              onPress={handleContinue}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <Text style={styles.footerText}>
              Already have an account? <Text style={styles.link} onPress={() => navigation.navigate('Login')}>Login</Text>
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Root>
  );
};

export default Signup;

// Styles remain the same as your provided code
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  inner: { flex: 1, justifyContent: 'space-between' },
  headerSection: { alignItems: "center", marginTop: Platform.OS === 'ios' ? 60 : 40, paddingHorizontal: 20 },
  logo: { height: 50, width: width * 0.6, resizeMode: "contain" },
  imageContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  mainIllustration: { height: width * 0.6, width: width * 0.8 },
  bottomCard: {
    paddingHorizontal: 30,
    paddingVertical: 35,
    backgroundColor: "#fff",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    elevation: 25,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: -5 },
  },
  loginTitle: { fontSize: 28, fontWeight: "800", color: "#1A1A1A" },
  loginSubtitle: { marginTop: 8, fontSize: 15, color: "#777", lineHeight: 22, marginBottom: 10 },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    borderWidth: 1.5,
    borderColor: "#F0F0F0",
    borderRadius: 16,
    height: 60,
    backgroundColor: "#F9FAFB",
    paddingHorizontal: 20,
  },
  inputBoxFocused: { borderColor: "#e76026", backgroundColor: "#fff" },
  input: { flex: 1, fontSize: 16, color: "#000", fontWeight: "600" },
  button: {
    marginTop: 25,
    backgroundColor: "#e76026",
    height: 60,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  footerText: { textAlign: 'center', marginTop: 20, fontSize: 12, color: '#AAA' },
  link: { color: '#e76026', fontWeight: '600' }
});