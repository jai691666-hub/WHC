import { 
  StyleSheet, Text, View, TouchableOpacity, ScrollView, 
  SafeAreaView, BackHandler, Modal, Dimensions, BlurView
} from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const [username, setusername] = useState('Student');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalConfig, setModalConfig] = useState({ title: '', message: '', type: '' });

  const loadData = async () => {
    const student = await AsyncStorage.getItem('name');
    if (student) setusername(student);
  }

  useEffect(() => {
    loadData();

    const backAction = () => {
      showModal("Exit App", "Are you sure you want to leave the learning portal?", "exit");
      return true;
    };

    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
    return () => backHandler.remove();
  }, []);

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

  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Global Modal */}
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

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollPad}>
        
        {/* Header Section */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Welcome back,</Text>
            <Text style={styles.userName}>{username}</Text>
          </View>
          <View style={styles.avatarPlaceholder}><Text style={{fontWeight: 'bold'}}>🔔</Text></View>
        </View>

        {/* The Bento Grid */}
        <View style={styles.grid}>
          
          {/* Main Progress Card */}
          <TouchableOpacity style={[styles.card, styles.fullWidth, styles.progressCard]}>
            <View>
              <Text style={styles.cardTitleLight}>Course Journey</Text>
              <Text style={styles.bigNumberLight}>72%</Text>
            </View>
            <View style={styles.progressBarBg}>
                <View style={[styles.progressBarFill, {width: '72%'}]} />
            </View>
            <Text style={styles.cardDescLight}>Almost there! 4 lessons left.</Text>
          </TouchableOpacity>

          {/* Activity Card */}
          <TouchableOpacity style={[styles.card, styles.halfWidth]}>
            <View style={styles.iconCircle}><Text>⏱️</Text></View>
            <View>
                <Text style={styles.statText}>14h 20m</Text>
                <Text style={styles.cardDesc}>Learning Time</Text>
            </View>
          </TouchableOpacity>

          {/* Tasks Card */}
          <TouchableOpacity style={[styles.card, styles.halfWidth, {backgroundColor: '#000'}]}>
            <View style={[styles.iconCircle, {backgroundColor: '#333'}]}><Text>📝</Text></View>
            <View>
                <Text style={[styles.statText, {color: '#fff'}]}>02</Text>
                <Text style={[styles.cardDesc, {color: '#aaa'}]}>Tasks Pending</Text>
            </View>
          </TouchableOpacity>

          {/* Materials Card */}
          <TouchableOpacity style={[styles.card, styles.halfWidth]}>
            <View style={styles.iconCircle}><Text>📚</Text></View>
            <View>
                <Text style={styles.statText}>Resources</Text>
                <Text style={styles.cardDesc}>12 PDFs available</Text>
            </View>
          </TouchableOpacity>

          {/* Certificate Card */}
          <TouchableOpacity 
            style={[styles.card, styles.halfWidth]}
            onPress={() => showModal("Locked", "Finish all video modules and pass the final quiz to unlock your certificate.", "locked")}
          >
            <View style={styles.iconCircle}><Text>🎓</Text></View>
            <View>
                <Text style={styles.statText}>Certificate</Text>
                <Text style={[styles.cardDesc, {color: '#e76026'}]}>🔒 Locked</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Motivational Section */}
        <View style={styles.quoteSection}>
           <Text style={styles.quoteText}>"The beautiful thing about learning is that no one can take it away from you."</Text>
           <Text style={styles.quoteAuthor}>— B.B. King</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FB' },
  scrollPad: { paddingBottom: 40 },
  header: { 
    padding: 24, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginTop: 10
  },
  greeting: { fontSize: 16, color: '#666', fontWeight: '500' },
  userName: { fontSize: 28, fontWeight: '800', color: '#1A1A1A' },
  avatarPlaceholder: { 
    width: 50, height: 50, borderRadius: 25, 
    backgroundColor: '#fff', elevation: 3, 
    justifyContent: 'center', alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10 
  },
  grid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 16, justifyContent: 'space-between' },
  card: { backgroundColor: '#FFF', borderRadius: 28, padding: 20, marginBottom: 15, elevation: 2, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 15 },
  fullWidth: { width: '100%', height: 180, justifyContent: 'space-between' },
  halfWidth: { width: '48%', height: 160, justifyContent: 'space-between' },
  progressCard: { backgroundColor: '#e76026' },
  cardTitleLight: { fontSize: 16, fontWeight: '600', color: 'rgba(255,255,255,0.8)' },
  bigNumberLight: { fontSize: 42, fontWeight: '800', color: '#fff', marginTop: -5 },
  cardDescLight: { fontSize: 13, color: 'rgba(255,255,255,0.9)', fontWeight: '500' },
  progressBarBg: { height: 8, backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: 4, marginVertical: 10 },
  progressBarFill: { height: '100%', backgroundColor: '#fff', borderRadius: 4 },
  iconCircle: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#F0F0F0', justifyContent: 'center', alignItems: 'center' },
  statText: { fontSize: 18, fontWeight: '800', color: '#1A1A1A', marginTop: 10 },
  cardDesc: { fontSize: 12, color: '#888', fontWeight: '600', marginTop: 2 },
  quoteSection: { margin: 24, padding: 24, backgroundColor: '#F0F3F6', borderRadius: 24, alignItems: 'center' },
  quoteText: { fontSize: 15, fontStyle: 'italic', color: '#444', textAlign: 'center', lineHeight: 22 },
  quoteAuthor: { fontSize: 12, fontWeight: '700', color: '#888', marginTop: 10, textTransform: 'uppercase' },
  
  // Modal Styles
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
  modalContent: { width: width * 0.85, backgroundColor: '#fff', borderRadius: 30, padding: 25, alignItems: 'center' },
  modalTitle: { fontSize: 20, fontWeight: '800', color: '#1A1A1A' },
  modalMessage: { fontSize: 15, color: '#666', textAlign: 'center', marginTop: 10, lineHeight: 22 },
  modalButtons: { flexDirection: 'row', marginTop: 25, width: '100%', justifyContent: 'space-between' },
  cancelBtn: { flex: 1, paddingVertical: 15, alignItems: 'center' },
  confirmBtn: { flex: 1, paddingVertical: 15, backgroundColor: '#e76026', borderRadius: 15, alignItems: 'center' },
  cancelBtnText: { color: '#888', fontWeight: '700' },
  confirmBtnText: { color: '#fff', fontWeight: '700' }
})