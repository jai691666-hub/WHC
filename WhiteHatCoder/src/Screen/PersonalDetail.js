import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ALERT_TYPE, Dialog, Root } from 'react-native-alert-notification';

const CustomInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType,
  multiline,
}) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#AAB"
      style={[styles.input, multiline && styles.textArea]}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      multiline={multiline}
      underlineColorAndroid="transparent"
      textAlignVertical={multiline ? 'top' : 'center'}
    />
  </View>
);

const PersonalDetail = ({ navigation }) => {
  const [mobile, setMobile] = useState('');
  const [name1, setName1] = useState('');
  const [course1, setCourse1] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [c_address, setC_address] = useState('');
  const [H_address, setH_address] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const keys = [
          'save',
          'name',
          'course',
          'gender',
          'savemail',
          'caddress',
          'haddress',
        ];
        const results = await AsyncStorage.multiGet(keys);
        const data = Object.fromEntries(results);

        if (data.save) {
          const parsed = JSON.parse(data.save);
          setMobile(parsed.mobile || '');
        }

        if (data.name) setName1(data.name);
        if (data.course) setCourse1(data.course);
        if (data.gender) setGender(data.gender);
        if (data.savemail) setEmail(data.savemail);
        if (data.caddress) setC_address(data.caddress);
        if (data.haddress) setH_address(data.haddress);
      } catch (e) {
        console.log('Load Error', e);
      }
    };

    loadData();
  }, []);

  const saveData = async () => {
    if (!name1 || !email || !c_address) {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: 'Required Fields',
        textBody: 'Please fill required details',
        button: 'Close',
      });
      return;
    }

    try {
      await AsyncStorage.multiSet([
        ['name', name1],
        ['course', course1],
        ['gender', gender.toLowerCase()],
        ['savemail', email],
        ['caddress', c_address],
        ['haddress', H_address],
      ]);

      navigation.navigate('EnrollBottom', { screen: 'Profile' });
    } catch (e) {
      console.log('Save Error', e);
    }
  };

  const logout = async () => {
    await AsyncStorage.clear();
    navigation.replace('splash');
  };

  return (
    <Root>
      <StatusBar barStyle="light-content" backgroundColor="#e76026" />
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerCircle} />
          <Text style={styles.headerSubtitle}>Complete your profile</Text>
          <Text style={styles.headerTitle}>Personal Details</Text>
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.card}>
              <CustomInput
                label="Full Name"
                placeholder="JOHN DOE"
                value={name1}
                onChangeText={v => setName1(v.toUpperCase())}
              />

              <CustomInput
                label="Mobile Number"
                placeholder="10 Digit Number"
                value={mobile}
                keyboardType="numeric"
                onChangeText={setMobile}
              />

              <CustomInput
                label="Email Address"
                placeholder="example@mail.com"
                value={email}
                keyboardType="email-address"
                onChangeText={setEmail}
              />

              <CustomInput
                label="Gender"
                placeholder="male / female"
                value={gender}
                onChangeText={setGender}
              />

              <CustomInput
                label="Current Address"
                placeholder="Street, City..."
                value={c_address}
                onChangeText={setC_address}
                multiline
              />

              <CustomInput
                label="Permanent Address"
                placeholder="Same as above..."
                value={H_address}
                onChangeText={setH_address}
                multiline
              />

              <TouchableOpacity
                style={styles.saveBtn}
                onPress={saveData}
                activeOpacity={0.85}
              >
                <Text style={styles.saveBtnText}>Save & Continue</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
              <Text style={styles.logoutBtnText}>Log Out Account</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </Root>
  );
};

export default PersonalDetail;
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FD' },

  header: {
    height: 160,
    backgroundColor: '#e76026',
    paddingTop: 50,
    paddingHorizontal: 30,
    borderBottomLeftRadius: 40,
    overflow: 'hidden',
  },

  headerCircle: {
    position: 'absolute',
    right: -50,
    top: -50,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },

  headerSubtitle: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 12,
    letterSpacing: 1,
  },

  headerTitle: {
    fontSize: 26,
    color: '#fff',
    fontWeight: '800',
    marginTop: 5,
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 20,
    elevation: 8,
    marginTop: -20,
  },

  inputContainer: { marginBottom: 15 },

  label: {
    fontSize: 13,
    fontWeight: '700',
    color: '#34495e',
    marginBottom: 6,
  },

  input: {
    backgroundColor: '#F3F6F9',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === 'ios' ? 12 : 8,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#E8ECEF',
    color: '#2c3e50',
  },

  textArea: {
    height: 80,
    paddingTop: 10,
  },

  saveBtn: {
    backgroundColor: '#e76026',
    borderRadius: 15,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 10,
  },

  saveBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  logoutBtn: {
    marginTop: 20,
    alignItems: 'center',
  },

  logoutBtnText: {
    color: '#95a5a6',
    fontSize: 13,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});
