import React, { useRef, useState,useEffect } from 'react';
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
} from 'react-native';
import { ALERT_TYPE, Dialog, Root } from 'react-native-alert-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OtpScreen = ({ navigation }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [activeBox, setActiveBox] = useState(0);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const [mobile, setMobile] = useState("");

  const handleChange = (text, index) => {
    if (text.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text !== "" && index < 3) {
      inputRefs[index + 1].current.focus();
      setActiveBox(index + 1);
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === "" && index > 0) {
      inputRefs[index - 1].current.focus();
      setActiveBox(index - 1);
    }
  };
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

  const check = () => {
    if (otp.includes("") || otp.join("").length !== 4) {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: 'Incomplete OTP',
        textBody: 'Please enter all 4 digits sent to your phone.',
        button: 'Retry',
      });
    } else {
      Dialog.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Verified!',
        textBody: 'Login successful.',
      });
      setTimeout(() => {

        if(mobile==='8396097523'){
        navigation.navigate("AdminTab");
      }else{
        navigation.navigate("editProfile");
      }
      }, 1500);
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
          <Image 
            source={require("../assets/logo.jpg")}
            style={styles.logo}
            resizeMode="contain"
          />

          <View style={styles.card}>
            <Text style={styles.title}>Verification</Text>
            <Text style={styles.subtitle}>
              Enter the 4-digit code sent to your mobile number.
            </Text>

            <View style={styles.otpContainer}>
              {otp.map((value, index) => (
                <TextInput
                  key={index}
                  ref={inputRefs[index]}
                  value={value}
                  onChangeText={(text) => handleChange(text, index)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  onFocus={() => setActiveBox(index)}
                  keyboardType="number-pad"
                  maxLength={1}
                  style={[
                    styles.otpBox,
                    activeBox === index && styles.otpBoxActive,
                    value !== "" && styles.otpBoxFilled
                  ]}
                />
              ))}
            </View>

            <TouchableOpacity style={styles.button} onPress={check} activeOpacity={0.8}>
              <Text style={styles.buttonText}>Verify & Proceed</Text>
            </TouchableOpacity>

            <View style={styles.resendContainer}>
              <Text style={styles.resendText}>Didn’t receive the code? </Text>
              <TouchableOpacity>
                <Text style={styles.resendLink}>Resend Now</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={styles.footerSpacer} />
        </View>
      </KeyboardAvoidingView>
    </Root>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFBFB",
  },
  inner: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    height: 60,
    width: 200,
    marginBottom: 40,
  },
  card: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 30,
    padding: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#1A1A1A",
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: "#777",
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 35,
    lineHeight: 22,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 35,
    paddingHorizontal: 10,
  },
  otpBox: {
    height: 65,
    width: 60,
    backgroundColor: "#F9FAFB",
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: "#EEE",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
    color: "#e76026",
  },
  otpBoxActive: {
    borderColor: "#e76026",
    backgroundColor: "#FFF",
    shadowColor: "#e76026",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
  },
  otpBoxFilled: {
    borderColor: "#e76026",
  },
  button: {
    height: 60,
    backgroundColor: "#e76026",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#e76026",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "white",
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },
  resendText: {
    fontSize: 14,
    color: "#999",
  },
  resendLink: {
    fontSize: 14,
    color: "#e76026",
    fontWeight: "700",
  },
  footerSpacer: {
    height: 50, // Helps balance the visual center when keyboard is up
  }
});