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
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ALERT_TYPE, Dialog, Root } from 'react-native-alert-notification';

const { width } = Dimensions.get('window');

const Login = ({ navigation }) => {
  const [mobile, setMobile] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const loadData = async () => {
    const data = await AsyncStorage.getItem("save");
    if (data) {
      const parsed = JSON.parse(data);
      setMobile(parsed.mobile);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleContinue = async () => {
    if (!mobile || mobile.length !== 10) {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: 'Invalid Number',
        textBody: 'Please enter a valid 10-digit mobile number to proceed.',
        button: 'Understood',
      });
      return;
    }

    try {
      await AsyncStorage.setItem("save", JSON.stringify({ mobile }));
      navigation.navigate("otp");
    } catch (error) {
      console.log("Error saving number", error);
    }
  };

  return (
    <Root>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.container}
      >
        <View style={styles.inner}>
          {/* Top Section: Logo */}
          <View style={styles.headerSection}>
            <Image 
              source={require('../assets/logo.jpg')} 
              style={styles.logo} 
            />
          </View>

          {/* Middle Section: Illustration */}
          <View style={styles.imageContainer}>
             <Image
              source={require('../assets/man.jpg')}
              style={styles.mainIllustration}
              resizeMode="contain"
            />
          </View>

          {/* Bottom Section: Form Card */}
          <View style={styles.bottomCard}>
            <Text style={styles.loginTitle}>Welcome</Text>
            <Text style={styles.loginSubtitle}>
              Log in to your account using your phone number
            </Text>

            <View style={[
              styles.inputBox, 
              isFocused && styles.inputBoxFocused
            ]}>
              <View style={styles.countryCodeContainer}>
                <Text style={styles.countryCodeText}>+91</Text>
              </View>

              <TextInput
                style={styles.input}
                placeholder="00000 00000"
                placeholderTextColor="#AAB"
                keyboardType="number-pad"
                maxLength={10}
                value={mobile}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChangeText={(text) => setMobile(text)}
              />
            </View>

            <TouchableOpacity 
              style={styles.button} 
              onPress={handleContinue}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>Get OTP</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Signup')} >
              <Text style={styles.footerText}>Create Account with Email<Text style={styles.link}>Click Here</Text>
              </Text>
            </TouchableOpacity>

          </View>
        </View>
      </KeyboardAvoidingView>
    </Root>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inner: {
    flex: 1,
    justifyContent: 'space-between',
  },
  headerSection: {
    alignItems: "center",
    marginTop: Platform.OS === 'ios' ? 60 : 40,
    paddingHorizontal: 20,
  },
  logo: {
    height: 50,
    width: width * 0.6,
    resizeMode: "contain",
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainIllustration: {
    height: width * 0.7,
    width: width * 0.9,
  },
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
  loginTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#1A1A1A",
  },
  loginSubtitle: {
    marginTop: 8,
    fontSize: 15,
    color: "#777",
    lineHeight: 22,
    marginBottom: 10,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    borderWidth: 1.5,
    borderColor: "#F0F0F0",
    borderRadius: 16,
    height: 65,
    backgroundColor: "#F9FAFB",
    paddingHorizontal: 5,
  },
  inputBoxFocused: {
    borderColor: "#e76026",
    backgroundColor: "#fff",
  },
  countryCodeContainer: {
    paddingHorizontal: 15,
    borderRightWidth: 1,
    borderRightColor: "#EEE",
    marginRight: 10,
  },
  countryCodeText: {
    fontSize: 17,
    fontWeight: "700",
    color: "#333",
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: "#000",
    fontWeight: "600",
    letterSpacing: 1,
  },
  button: {
    marginTop: 25,
    backgroundColor: "#e76026",
    height: 60,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#e76026",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  footerText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 12,
    color: '#AAA',
  },
  link: {
    color: '#e76026',
    fontWeight: '600',
  }
});