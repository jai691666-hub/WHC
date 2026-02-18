import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';

const EditProfileScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const savedName = await AsyncStorage.getItem('name');
        const savedEmail = await AsyncStorage.getItem('email');
        if (savedName) setName(savedName);
        if (savedEmail) setEmail(savedEmail);
      } catch (error) {
        console.log('Error loading data', error);
      }
    };
    loadData();
  }, []);

  const validateEmail = email => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const saveData = async () => {
    if (!name.trim()) {
      Alert.alert('Required', 'Please enter your name.');
      return;
    }
    if (!email.trim() || !validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    try {
      await AsyncStorage.setItem('name', name.trim());
      await AsyncStorage.setItem('email', email.trim());

      Alert.alert('Success', 'Profile updated!', [
        {text: 'OK', onPress: () => navigation.navigate('EnrollBottom')},
      ]);
    } catch (error) {
      Alert.alert('Error', 'Could not save your changes.');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <LinearGradient colors={['#c44611', '#eb5312']} style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
      </LinearGradient>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.card}>
            {/* Name Input */}
            <Text style={styles.inputLabel}>FULL NAME</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: JOHN DOE"
              placeholderTextColor={'#A0A0A0'}
              value={name}
              onChangeText={t => setName(t.toUpperCase())}
            />

            {/* Email Input */}
            <Text style={styles.inputLabel}>EMAIL ADDRESS</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: john@example.com"
              placeholderTextColor={'#A0A0A0'}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TouchableOpacity
              style={styles.saveBtn}
              onPress={saveData}
              activeOpacity={0.8}>
              <Text style={styles.saveBtnText}>Save Changes</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F8F9FB'},
  header: {
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 25,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  backButton: {marginBottom: 10, width: 30},
  backIcon: {fontSize: 28, color: '#fff'},
  headerTitle: {fontSize: 28, fontWeight: 'bold', color: '#fff'},
  content: {paddingHorizontal: 20, marginTop: 20},
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  inputLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: '#eb5312',
    marginBottom: 8,
    letterSpacing: 1,
  },
  input: {
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#EEE',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  saveBtn: {
    backgroundColor: '#e76026',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 5,
  },
  saveBtnText: {color: '#fff', fontSize: 16, fontWeight: 'bold'},
});
