import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  TextInput,
  Image 
} from 'react-native';

const ManageStudent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      {/* 1. Simple Search Header */}
      <View style={styles.searchSection}>
        <TextInput 
          style={styles.searchInput}
          placeholder="Search student by name..."
          placeholderTextColor='black'
        />
      </View>

      <ScrollView style={styles.listContainer}>
        <Text style={styles.sectionTitle}>All Enrolled Students</Text>

        {/* Student Item 1 */}
        <View style={styles.studentCard}>
          <Image 
            source={{ uri: 'https://i.pravatar.cc/150?u=1' }} 
            style={styles.studentAvatar} 
          />
          <View style={styles.studentInfo}>
            <Text style={styles.studentName}>Aman Gupta</Text>
            <Text style={styles.studentCourse}>Course: React Native Basics</Text>
          </View>
          <TouchableOpacity style={styles.detailBtn}>
            <Text style={styles.btnText}>❌</Text>
          </TouchableOpacity>
        </View>

        {/* Student Item 2 */}
        <View style={styles.studentCard}>
          <Image 
            source={{ uri: 'https://i.pravatar.cc/150?u=2' }} 
            style={styles.studentAvatar} 
          />
          <View style={styles.studentInfo}>
            <Text style={styles.studentName}>Priya Sharma</Text>
            <Text style={styles.studentCourse}>Course: Python for Beginners</Text>
          </View>
          <TouchableOpacity style={styles.detailBtn}>
            <Text style={styles.btnText}>❌</Text>
          </TouchableOpacity>
        </View>

        {/* Student Item 3 */}
        <View style={styles.studentCard}>
          <Image 
            source={{ uri: 'https://i.pravatar.cc/150?u=3' }} 
            style={styles.studentAvatar} 
          />
          <View style={styles.studentInfo}>
            <Text style={styles.studentName}>Rahul Verma</Text>
            <Text style={styles.studentCourse}>Course: UI/UX Design</Text>
          </View>
          <TouchableOpacity style={styles.detailBtn}>
            <Text style={styles.btnText}>❌</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

      {/* Floating Add Button (Optional) */}
      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ManageStudent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  searchSection: {
    backgroundColor: '#e76026',
    padding: 20,
    paddingTop: 50,
  },
  searchInput: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    fontSize: 14,
    color:'black'
  },
  listContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  studentCard: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
    elevation: 2,
  },
  studentAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#eee',
  },
  studentInfo: {
    flex: 1,
    marginLeft: 15,
  },
  studentName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  studentCourse: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },
  detailBtn: {
    backgroundColor: '#000',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  btnText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#e76026',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  fabText: {
    color: 'white',
    fontSize: 30,
  }
});