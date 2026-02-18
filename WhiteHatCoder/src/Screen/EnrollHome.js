import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  ImageBackground,
  Modal,
  TextInput,
  BackHandler
} from 'react-native';
import React, {useState, useEffect,useCallback} from 'react';
import EnrollPopular from './EnrollPopular';
import Crousel from '../components/Crousel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native'

const {width} = Dimensions.get('window');
const PRIMARY = '#FF7B29';
const SECONDARY = '#FFF4EB';

const EnrollHome = ({navigation}) => {
  const [index, setIndex] = useState(0);
  const [username, setusername] = useState('');
  const [newReview, setNewReview] = useState('');
  const [form, setform] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalConfig, setModalConfig] = useState({ title: '', message: '', type: '' });

    useEffect(() => {
    loadData();
  }, []);

  // 2. Use useFocusEffect for the BackHandler (runs only when screen is visible)
  useFocusEffect(
    useCallback(() => {
      const backAction = () => {
        // Only show modal if we are on the Home screen
        showModal("Exit App", "Are you sure you want to leave the learning portal?", "exit");
        return true; // This stops the back button from doing anything else
      };

      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );

      // This is the cleanup function: it removes the listener when you leave Home
      return () => backHandler.remove();
    }, []) // Empty dependency array means this re-attaches only when focus changes
  );
  
    const showModal = (title, message, type) => {
      setModalConfig({ title, message, type });
      setModalVisible(true);
    };
  
    const handleModalConfirm = () => {
      if (modalConfig.type === 'exit') {
        BackHandler.exitApp();
      }
      setModalVisible(false);
    };
  

  const [reviews, setReviews] = useState([
    {
      id: 1,
      review:
        'The graphic design teacher was incredibly skilled. Lessons were clear, engaging, and well-paced.',
      name: 'Harshdeep Singh',
      Course: 'Graphic Designing',
    },
    {
      id: 2,
      review:
        'Excellent experience at WhiteHat coders. The environment is supportive and focused on success.',
      name: 'Ranjit Singh',
      Course: 'Python AI',
    },
  ]);

  const loadData = async () => {
    const student = await AsyncStorage.getItem('name');
    setusername(student || 'Student');
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSubmitReview = () => {
    if (newReview.trim().length < 5) {
      alert('Please write a bit more for your review!');
      return;
    }

    const newEntry = {
      id: reviews.length + 1,
      review: newReview,
      name: username,
      Course: 'Student',
    };

    setReviews([...reviews, newEntry]);
    setNewReview('');
    setform(false);
    setIndex(reviews.length);
  };

  const stats = [
    {id: 1, label: 'Graduates', value: '10K+', icon: '🎓'},
    {id: 2, label: 'Courses', value: '50+', icon: '📚'},
    {id: 3, label: 'Rating', value: '4.9/5', icon: '⭐'},
  ];

  return (

    
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}
            >
              <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                  <Text style={styles.modalTitle}>{modalConfig.title}</Text>
                  <Text style={styles.modalMessage}>{modalConfig.message}</Text>
                  <View style={styles.modalButtons}>
                    <TouchableOpacity 
                      style={styles.cancelBtn} 
                      onPress={() => setModalVisible(false)}
                    >
                      <Text style={styles.cancelBtnText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      style={[styles.confirmBtn, modalConfig.type === 'exit' ? {backgroundColor: '#ff4444'} : {}]} 
                      onPress={handleModalConfirm}
                    >
                      <Text style={styles.confirmBtnText}>
                          {modalConfig.type === 'exit' ? 'Exit' : 'Got it'}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
      {/* 👋 Header Section */}
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.welcome}>Hello, {username} 👋</Text>
          <Text style={styles.subtitle}>Ready to upgrade your skills?</Text>
        </View>
        <View style={styles.profileCircle}>
          <Text style={styles.profileInitial}>{username.charAt(0)}</Text>
        </View>
      </View>

      {/* 📊 Trust Statistics Bar */}
      <View style={styles.statsBar}>
        {stats.map(item => (
          <View key={item.id} style={styles.statItem}>
            <Text style={styles.statIcon}>{item.icon}</Text>
            <View>
              <Text style={styles.statValue}>{item.value}</Text>
              <Text style={styles.statLabel}>{item.label}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* 🎞 Featured Carousel */}
      <View style={styles.carouselContainer}>
        <Crousel />
      </View>

      {/* 🛤️ Featured Learning Path */}
      <TouchableOpacity style={styles.pathCard}>
        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
          }}
          style={styles.pathBg}
          imageStyle={{borderRadius: 20}}>
          <View style={styles.pathOverlay}>
            <Text style={styles.pathTag}>FEATURED PATH</Text>
            <Text style={styles.pathTitle}>
              Full Stack Developer Guide 2026
            </Text>
            <Text style={styles.pathSub}>
              8 Courses • 12 Projects • Job Guarantee
            </Text>
            <TouchableOpacity style={styles.pathBtn}>
              <Text style={styles.pathBtnText}>Start Path</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </TouchableOpacity>

      {/* 🔴 Live Workshop Section */}
      <View style={styles.workshopHeader}>
        <Text style={styles.sectionTitle}>Live Workshops 🎙️</Text>
        <View style={styles.liveBadge}>
          <Text style={styles.liveText}>LIVE</Text>
        </View>
      </View>
      <View style={styles.workshopCard}>
        <View style={styles.workshopInfo}>
          <Text style={styles.workshopDate}>Tomorrow, 10:00 AM</Text>
          <Text style={styles.workshopName}>Mastering Figma Auto-Layout</Text>
          <Text style={styles.workshopInstructor}>By Akshay Sir</Text>
        </View>
        <TouchableOpacity style={styles.joinBtn}>
          <Text style={styles.joinText}>Join</Text>
        </TouchableOpacity>
      </View>

      {/* 🔥 Popular Courses Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Explore Courses 🔥</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Course')}>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal: 20}}>
        <EnrollPopular navigation={navigation} />
      </View>

      {/* 💬 Student Reviews Section */}
      <View style={styles.reviewWrapper}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.sectionTitle}>Student Success 🚀</Text>
          <TouchableOpacity onPress={() => setform(true)}>
            <Text style={styles.addReviewText}>Add+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.modernReviewCard}>
          <Text style={styles.reviewText}>"{reviews[index]?.review}"</Text>
          <View style={styles.studentRow}>
            <Text style={styles.studentName}>- {reviews[index]?.name}</Text>
            <TouchableOpacity
              onPress={() => setIndex((index + 1) % reviews.length)}>
              <Text style={{color: PRIMARY, fontWeight: 'bold'}}>
                Next Review →
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* 📝 Review Form Modal */}
      <Modal
        visible={form}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setform(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Share Your Experience ✍️</Text>

            <View style={styles.readOnlyInput}>
              <Text style={{color: '#666'}}>Posting as: </Text>
              <Text style={{fontWeight: 'bold', color: '#000'}}>
                {username}
              </Text>
            </View>

            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="How was your learning experience?"
              value={newReview}
              onChangeText={setNewReview}
              multiline={true}
              numberOfLines={4}
              placeholderTextColor={'#999'}
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.formBtn, {backgroundColor: '#EEE'}]}
                onPress={() => setform(false)}>
                <Text style={{color: '#333'}}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.formBtn, {backgroundColor: PRIMARY}]}
                onPress={handleSubmitReview}>
                <Text style={{color: '#FFF', fontWeight: 'bold'}}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <View style={{height: 100}} />
    </ScrollView>
  );
};

export default EnrollHome;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FDFDFD'},
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    marginTop: 20,
  },
  welcome: {fontSize: 22, fontWeight: '800', color: '#1A1A1A'},
  subtitle: {color: '#777', fontSize: 13, marginTop: 2},
  profileCircle: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitial: {color: '#FFF', fontWeight: 'bold', fontSize: 18},

  /* Stats Bar */
  statsBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    marginTop: 20,
    paddingVertical: 15,
    borderRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: {width: 0, height: 10},
  },
  statItem: {flexDirection: 'row', alignItems: 'center'},
  statIcon: {fontSize: 20, marginRight: 8},
  statValue: {fontWeight: 'bold', fontSize: 16, color: '#1A1A1A'},
  statLabel: {fontSize: 10, color: '#777', textTransform: 'uppercase'},

  carouselContainer: {marginTop: 15},

  /* Path Card */
  pathCard: {marginHorizontal: 20, marginTop: 25, height: 180},
  pathBg: {flex: 1, justifyContent: 'flex-end'},
  pathOverlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 20,
    borderRadius: 20,
    flex: 1,
    justifyContent: 'center',
  },
  pathTag: {color: PRIMARY, fontWeight: 'bold', fontSize: 10, letterSpacing: 1},
  pathTitle: {color: '#FFF', fontSize: 20, fontWeight: 'bold', marginTop: 5},
  pathSub: {color: '#DDD', fontSize: 12, marginTop: 5},
  pathBtn: {
    backgroundColor: PRIMARY,
    width: 100,
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 15,
    alignItems: 'center',
  },
  pathBtnText: {color: '#FFF', fontWeight: 'bold', fontSize: 12},

  /* Workshop */
  workshopHeader: {flexDirection: 'row', alignItems: 'center', marginTop: 10},
  liveBadge: {
    backgroundColor: '#FF0000',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginLeft: 20,
    marginTop: 15,
  },
  liveText: {color: '#FFF', fontSize: 10, fontWeight: 'bold'},
  workshopCard: {
    marginHorizontal: 20,
    backgroundColor: SECONDARY,
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 5,
    borderLeftColor: PRIMARY,
  },
  workshopInfo: {flex: 1},
  workshopDate: {color: PRIMARY, fontWeight: 'bold', fontSize: 11},
  workshopName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginTop: 4,
  },
  workshopInstructor: {color: '#777', fontSize: 12, marginTop: 2},
  joinBtn: {
    backgroundColor: '#1A1A1A',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
  },
  joinText: {color: '#FFF', fontWeight: 'bold'},

  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1A1A1A',
    marginLeft: 20,
    marginTop: 25,
    marginBottom: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
  },
  viewAll: {color: PRIMARY, fontSize: 14, fontWeight: '700'},

  /* Reviews */
  reviewWrapper: {paddingHorizontal: 20, marginTop: 10},
  addReviewText: {
    color: PRIMARY,
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 15,
  },
  modernReviewCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#EEE',
  },
  reviewText: {
    color: '#444',
    fontSize: 14,
    lineHeight: 22,
    fontStyle: 'italic',
  },
  studentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    alignItems: 'center',
  },
  studentName: {fontWeight: 'bold', color: '#1A1A1A'},

  /* Modal */
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 20,
    elevation: 10,
  },
  modalHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1A1A1A',
    textAlign: 'center',
  },
  readOnlyInput: {
    flexDirection: 'row',
    backgroundColor: '#F0F0F0',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    color: 'black',
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  formBtn: {
    flex: 0.48,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
  modalContent: { width: width * 0.85, backgroundColor: '#fff', borderRadius: 30, padding: 25, alignItems: 'center' },
  modalTitle: { fontSize: 20, fontWeight: '800', color: '#1A1A1A' },
  modalMessage: { fontSize: 15, color: '#666', textAlign: 'center', marginTop: 10, lineHeight: 22 },
  modalButtons: { flexDirection: 'row', marginTop: 25, width: '100%', justifyContent: 'space-between' },
  cancelBtn: { flex: 1, paddingVertical: 15, alignItems: 'center' },
  confirmBtn: { flex: 1, paddingVertical: 15, backgroundColor: '#e76026', borderRadius: 15, alignItems: 'center' },
  cancelBtnText: { color: '#888', fontWeight: '700' },
  confirmBtnText: { color: '#fff', fontWeight: '700' }
});
