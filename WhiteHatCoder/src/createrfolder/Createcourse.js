import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const Createcourse = () => {
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
  });

  const InputLabel = ({ label }) => <Text style={styles.label}>{label}</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Create New Course</Text>
            <Text style={styles.headerSub}>Fill in the details to publish your course</Text>
          </View>

          <InputLabel label="Course Thumbnail" />
          <TouchableOpacity style={styles.thumbnailPicker}>
            <Text style={{ fontSize: 30 }}>🖼️</Text>
            <Text style={styles.uploadText}>Tap to upload thumbnail</Text>
          </TouchableOpacity>

          <View style={styles.formSection}>
            <InputLabel label="Course Title" />
            <TextInput
              style={styles.input}
              placeholder="e.g. Mastering React Native"
              value={courseData.title}
              onChangeText={(txt) => setCourseData({ ...courseData, title: txt })}
            />

            <InputLabel label="Description" />
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="What will students learn?"
              multiline
              numberOfLines={4}
              value={courseData.description}
              onChangeText={(txt) => setCourseData({ ...courseData, description: txt })}
            />

            <View style={styles.row}>
              <View style={{ flex: 1, marginRight: 10 }}>
                <InputLabel label="Price ($)" />
                <TextInput
                  style={styles.input}
                  placeholder="0.00"
                  keyboardType="numeric"
                  value={courseData.price}
                  onChangeText={(txt) => setCourseData({ ...courseData, price: txt })}
                />
              </View>
              <View style={{ flex: 1 }}>
                <InputLabel label="Category" />
                <TextInput
                  style={styles.input}
                  placeholder="Coding"
                  value={courseData.category}
                  onChangeText={(txt) => setCourseData({ ...courseData, category: txt })}
                />
              </View>
            </View>
          </View>

          {/* Content Upload Section */}
          <View style={styles.sectionDivider} />
          <Text style={styles.sectionTitle}>Course Content</Text>

          <View style={styles.contentActions}>
            <TouchableOpacity style={styles.contentBtn}>
              <Text style={styles.contentBtnText}>📁 Add Sections</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contentBtn}>
              <Text style={styles.contentBtnText}>🎥 Upload Video</Text>
            </TouchableOpacity>
          </View>

          {/* Placeholder for added lectures */}
          <View style={styles.lecturePlaceholder}>
            <Text style={styles.placeholderText}>No lectures added yet.</Text>
          </View>

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitBtn}>
            <Text style={styles.submitBtnText}>Publish Course</Text>
          </TouchableOpacity>

          <View style={{ height: 40 }} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Createcourse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    marginBottom: 25,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  headerSub: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 8,
    marginTop: 15,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    color: '#1E293B',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  thumbnailPicker: {
    height: 160,
    backgroundColor: '#F1F5F9',
    borderRadius: 16,
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: '#CBD5E1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadText: {
    marginTop: 10,
    color: '#64748B',
    fontWeight: '500',
  },
  sectionDivider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginVertical: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 15,
  },
  contentActions: {
    flexDirection: 'row',
    gap: 10,
  },
  contentBtn: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#4F46E5',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  contentBtnText: {
    color: '#4F46E5',
    fontWeight: '600',
  },
  lecturePlaceholder: {
    marginTop: 15,
    padding: 30,
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  placeholderText: {
    color: '#94A3B8',
  },
  submitBtn: {
    backgroundColor: '#4F46E5',
    padding: 18,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 40,
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  submitBtnText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});