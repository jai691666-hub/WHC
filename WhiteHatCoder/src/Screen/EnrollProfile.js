import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
  Modal,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {height} = Dimensions.get('window');

const ProfileScreen = ({navigation}) => {
  const [name, setName] = useState('Your Name');
  const [email, setEmail] = useState('Please Choose Your Course');
  const [Gender, setGender]= useState('')

  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState('');

  useEffect(() => {
    const load = async () => {
      const savedName = await AsyncStorage.getItem('name');
      const savedEmail = await AsyncStorage.getItem('email');
      const setimage= await AsyncStorage.getItem('gender')
      if (savedName) setName(savedName);
      if (savedEmail) setEmail(savedEmail);
      if(setimage) setGender(setimage)
    };
    load();
  }, []);

  const openModal = type => {
    setModalType(type);
    setModalVisible(true);
  };
  const defaultImg =
  'https://cdn-icons-png.flaticon.com/512/847/847969.png';
  const maleImage='https://static.vecteezy.com/system/resources/thumbnails/035/914/352/small_2x/ai-generated-3d-cartoon-man-in-white-suit-businessman-character-on-transparent-background-png.png'
  const femaleimg='https://img.freepik.com/premium-photo/actress-character-3d-element_1322703-951.jpg?semt=ais_hybrid&w=740&q=80'
  let img;
  if(Gender==='Male'|| 'male'){
    img=maleImage
  }
  else if(Gender==='Female'||'female'){
    img=femaleimg
  }
  else{
    img=defaultImg
  }

  const MenuItem = ({icon, title, onPress, color = '#e76026'}) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={[styles.menuIconContainer, {backgroundColor: color + '15'}]}>
        <Text style={{fontSize: 20}}>{icon}</Text>
      </View>
      <Text style={styles.menuText}>{title}</Text>
      <Text style={styles.menuArrow}>›</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1, backgroundColor: '#F8F9FB'}}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient colors={['#c44611', '#eb5312']} style={styles.header}>
          <View
            style={styles.profileWrapper}>
            <Image
              source={{ uri: img }}
              style={styles.profileImage}
            />
          </View>

          <Text style={styles.name}>{name}</Text>
          <Text style={styles.course}>{email}</Text>

        </LinearGradient>

        <View style={styles.body}>
          <Text style={styles.sectionTitle}>Account Settings</Text>
          <View style={styles.menuCard}>
            <MenuItem
              icon="👤"
              title="Personal Details"
              onPress={() => navigation.navigate('personal')}
            />
            <MenuItem
              icon="📜"
              title="My Certificates"
              onPress={() => openModal('certificate')}
              color="#4CAF50"
            />
            <MenuItem
              icon="🔔"
              title="Notifications"
              onPress={() => openModal('notification')}
              color="#2196F3"
            />
            <MenuItem
              icon="🛡️"
              title="Privacy Policy"
              onPress={() => {}}
              color="#9C27B0"
            />

</View>
        </View>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setModalVisible(false)}>
          <View style={styles.modalContent}>
            <View style={styles.modalHandle} />
            {modalType === 'certificate' ? (
              <View style={styles.modalInner}>
                <View style={[styles.iconCircle, {backgroundColor: '#FFF4ED'}]}>
                  <Text style={{fontSize: 40}}>🎓</Text>
                </View>
                <Text style={styles.modalTitle}>Certificate Locked</Text>
                <Text style={styles.modalSubtitle}>
                  You haven't finished your journey yet! Please complete all the
                  course lectures first to unlock your certificate.
                </Text>
                <TouchableOpacity
                  style={styles.modalBtn}
                  onPress={() => setModalVisible(false)}>
                  <Text style={styles.modalBtnText}>Back to Learning</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.modalInner}>
                <View style={[styles.iconCircle, {backgroundColor: '#F0F4FF'}]}>
                  <Text style={{fontSize: 40}}>📭</Text>
                </View>
                <Text style={styles.modalTitle}>No Notifications</Text>
                <Text style={styles.modalSubtitle}>
                  Your inbox is empty. We'll notify you when there's an update
                  regarding your courses.
                </Text>
                <TouchableOpacity
                  style={[styles.modalBtn, {backgroundColor: '#2196F3'}]}
                  onPress={() => setModalVisible(false)}>
                  <Text style={styles.modalBtnText}>Close</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 60,
    paddingBottom: 30,
    alignItems: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    position: 'relative', // Needed for the floating edit button
  },
  editFloatingBtn: {
    position: 'absolute',
    top: 55,
    right: 25,
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  editIcon: {fontSize: 20, color: 'white'},
  profileWrapper: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
    padding: 2,
  },
  profileImage: {width: '100%', height: '100%', borderRadius: 50},
  name: {marginTop: 15, fontSize: 24, fontWeight: 'bold', color: 'white'},
  course: {fontSize: 14, color: 'white', opacity: 0.8, marginBottom: 20},
  statsRow: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 20,
    width: '85%',
    paddingVertical: 15,
  },
  statBox: {flex: 1, alignItems: 'center'},
  statBorder: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  statNumber: {color: '#fff', fontSize: 18, fontWeight: 'bold'},
  statLabel: {color: '#fff', fontSize: 11, opacity: 0.8},
  body: {padding: 20},
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 15,
  },
  menuCard: {
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 10,
    elevation: 3,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  menuText: {flex: 1, fontSize: 15, color: '#333', fontWeight: '500'},
  menuArrow: {fontSize: 22, color: '#CCC'},
  logoutBtn: {
    marginTop: 10, padding: 15, alignItems: 'center'},
  logoutText: {color: 'gray', fontWeight: 'bold'},
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingBottom: 50,
    paddingTop: 15,
    minHeight: height * 0.4,
  },
  modalHandle: {
    width: 40,
    height: 5,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 30,
  },
  modalInner: {alignItems: 'center'},
  iconCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1A1A1A',
    marginBottom: 12,
  },
  modalSubtitle: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 30,
  },
  modalBtn: {
    backgroundColor: '#e76026',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
  },
  modalBtnText: {color: '#fff', fontSize: 16, fontWeight: 'bold'},
});

export default ProfileScreen;
