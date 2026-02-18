import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  Dimensions 
} from 'react-native';

const { width } = Dimensions.get('window');

const AdminHome = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* 1. Simple Header */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Course Manager Admin</Text>
        <Text style={styles.subText}>Project: Student Learning Portal</Text>
      </View>

      {/* 2. Education Stats - Simple 2x2 Grid */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Platform Overview</Text>
        
        <View style={styles.row}>
          <View style={styles.statBox}>
            <Text style={styles.statEmoji}>📖</Text>
            <Text style={styles.statValue}>24</Text>
            <Text style={styles.statLabel}>Total Courses</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statEmoji}>👨‍🎓</Text>
            <Text style={styles.statValue}>850</Text>
            <Text style={styles.statLabel}>Students</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.statBox}>
            <Text style={styles.statEmoji}>✍️</Text>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Instructors</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statEmoji}>⭐</Text>
            <Text style={styles.statValue}>4.8</Text>
            <Text style={styles.statLabel}>Avg. Rating</Text>
          </View>
        </View>
      </View>

      {/* 3. Education Actions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Course Management</Text>
        
        <TouchableOpacity style={styles.actionBtn}>
          <Text style={styles.actionBtnText}>➕ Upload New Course</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.actionBtn, {backgroundColor: '#2c3e50'}]}>
          <Text style={styles.actionBtnText}>👥 Manage Students</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.actionBtn, {backgroundColor: '#7f8c8d'}]}>
          <Text style={styles.actionBtnText}>📑 Verify Certificates</Text>
        </TouchableOpacity>
      </View>

      {/* 4. Recent Enrollments */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Enrollments</Text>
        <View style={styles.logCard}>
          <Text style={styles.logTitle}>Aman Gupta enrolled in "React Native Basics"</Text>
          <Text style={styles.logTime}>5 mins ago</Text>
        </View>
        <View style={styles.logCard}>
          <Text style={styles.logTitle}>Priya Sharma enrolled in "Python for Beginners"</Text>
          <Text style={styles.logTime}>20 mins ago</Text>
        </View>
        <View style={styles.logCard}>
          <Text style={styles.logTitle}>New Instructor request: Dr. Kapoor</Text>
          <Text style={styles.logTime}>1 hour ago</Text>
        </View>
      </View>

      <View style={{marginBottom: 40}} />
    </ScrollView>
  );
};

export default AdminHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa', 
  },
  header: {
    backgroundColor: '#e76026', // Project Theme Color
    padding: 30,
    paddingTop: 60,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  welcomeText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  subText: {
    color: '#ffd1bc',
    fontSize: 14,
    marginTop: 5,
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  statBox: {
    backgroundColor: 'white',
    width: (width / 2) - 30,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
  },
  statEmoji: {
    fontSize: 24,
    marginBottom: 5,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e76026',
  },
  statLabel: {
    fontSize: 12,
    color: '#888',
  },
  actionBtn: {
    backgroundColor: '#e76026',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  actionBtnText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  logCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#e76026',
    elevation: 1, // subtle shadow
  },
  logTitle: {
    fontSize: 13,
    color: '#333',
  },
  logTime: {
    fontSize: 11,
    color: '#aaa',
    marginTop: 4,
  },
});