import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  StatusBar,
  LayoutAnimation,
  Platform,
  Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');
const PRIMARY = "#FF7B29";
const DARK = "#1F2937";
const LIGHT_BG = "#F3F4F6";

const ExploreC = ({ route, navigation }) => {
  const { courses } = route.params;

  const [activeLessonId, setActiveLessonId] = useState(courses?.slybs[0]?.id || null);
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedId(expandedId === id ? null : id);
    setActiveLessonId(id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      {/* 🎬 Premium Video/Header Section */}
      <View style={styles.heroSection}>
        <Image 
          source={typeof courses.img === 'string' ? { uri: courses.img } : courses.img} 
          style={styles.heroImage} 
        />
        <View style={styles.overlay} />
        
        <TouchableOpacity style={styles.floatingBack} onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>

        <View style={styles.heroContent}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>{courses?.category.toUpperCase()}</Text>
          </View>
          <Text style={styles.mainTitle}>{courses?.courseName}</Text>
          <Text style={styles.subTitle}>Master the fundamentals and advanced concepts</Text>
        </View>
      </View>

      {/* 📊 Course Progress Summary */}
      <View style={styles.summaryCard}>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryVal}>{courses?.slybs?.length}</Text>
          <Text style={styles.summaryLab}>Lessons</Text>
        </View>
        <View style={styles.dividerVertical} />
        <View style={styles.summaryItem}>
          <Text style={styles.summaryVal}>{courses?.courseDuration.split(' ')[0]}</Text>
          <Text style={styles.summaryLab}>{courses?.courseDuration.split(' ')[1]}</Text>
        </View>
        <View style={styles.dividerVertical} />
        <View style={styles.summaryItem}>
          <Text style={styles.summaryVal}>★ 4.9</Text>
          <Text style={styles.summaryLab}>Rating</Text>
        </View>
      </View>

      {/* 📑 Timeline Syllabus List */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollPadding}>
        <Text style={styles.curriculumTitle}>Curriculum</Text>
        
        {courses?.slybs?.map((item, index) => {
          const isActive = activeLessonId === item.id;
          const isExpanded = expandedId === item.id;
          const isLast = index === courses.slybs.length - 1;

          return (
            <View key={item.id} style={styles.timelineRow}>
              {/* Left Timeline Line */}
              <View style={styles.timelineLeft}>
                <View style={[styles.dot, isActive && styles.activeDot]} />
                {!isLast && <View style={styles.line} />}
              </View>

              {/* Right Content Card */}
              <TouchableOpacity 
                activeOpacity={0.7}
                onPress={() => toggleExpand(item.id)}
                style={[styles.lessonCard, isActive && styles.activeCard]}
              >
                <View style={styles.cardHeader}>
                  <View style={{ flex: 1 }}>
                    <Text style={[styles.lessonNum, isActive && {color: PRIMARY}]}>LESSON {index + 1}</Text>
                    <Text style={[styles.lessonTitle, isActive && styles.activeText]}>{item.title}</Text>
                  </View>
                  <View style={[styles.typeBadge, { backgroundColor: item.type === 'video' ? '#E0F2FE' : '#FEF3C7' }]}>
                    <Text style={[styles.typeText, { color: item.type === 'video' ? '#0369A1' : '#B45309' }]}>
                       {item.type.toUpperCase()}
                    </Text>
                  </View>
                </View>

                {isExpanded && (
                  <View style={styles.expandedArea}>
                    <Text style={styles.infoText}>{item.info}</Text>
                    <View style={styles.durationRow}>
                      <Text style={styles.durationText}>🕒 {item.duration}</Text>
                      <TouchableOpacity style={styles.actionBtn}>
                        <Text style={styles.actionBtnText}>{item.type === 'video' ? 'Watch Now' : 'View PDF'}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  
  // Header Style
  heroSection: { height: 280, width: '100%', justifyContent: 'flex-end' },
  heroImage: { ...StyleSheet.absoluteFillObject, width: '100%', height: '100%' },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.45)' },
  floatingBack: { position: 'absolute', top: 50, left: 20, width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.2)', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'rgba(255,255,255,0.3)' },
  backArrow: { color: 'white', fontSize: 20 },
  heroContent: { padding: 25, paddingBottom: 40 },
  tag: { alignSelf: 'flex-start', backgroundColor: PRIMARY, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6, marginBottom: 10 },
  tagText: { color: 'white', fontSize: 10, fontWeight: '900', letterSpacing: 1 },
  mainTitle: { color: 'white', fontSize: 28, fontWeight: 'bold' },
  subTitle: { color: 'rgba(255,255,255,0.8)', fontSize: 14, marginTop: 5 },

  // Summary Card
  summaryCard: { flexDirection: 'row', backgroundColor: 'white', marginHorizontal: 20, marginTop: -30, borderRadius: 20, padding: 20, elevation: 10, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10, alignItems: 'center' },
  summaryItem: { flex: 1, alignItems: 'center' },
  summaryVal: { fontSize: 18, fontWeight: 'bold', color: DARK },
  summaryLab: { fontSize: 12, color: '#9CA3AF', marginTop: 2 },
  dividerVertical: { width: 1, height: 30, backgroundColor: '#E5E7EB' },

  // Timeline UI
  scrollPadding: { padding: 25 },
  curriculumTitle: { fontSize: 20, fontWeight: 'bold', color: DARK, marginBottom: 25 },
  timelineRow: { flexDirection: 'row', minHeight: 100 },
  timelineLeft: { alignItems: 'center', marginRight: 15 },
  dot: { width: 14, height: 14, borderRadius: 7, backgroundColor: '#E5E7EB', borderWidth: 3, borderColor: 'white', elevation: 2, zIndex: 1 },
  activeDot: { backgroundColor: PRIMARY, scale: 1.2 },
  line: { width: 2, flex: 1, backgroundColor: '#F3F4F6', marginTop: -2 },

  // Lesson Card
  lessonCard: { flex: 1, backgroundColor: '#F9FAFB', borderRadius: 16, padding: 16, marginBottom: 20, borderWidth: 1, borderColor: '#F3F4F6' },
  activeCard: { backgroundColor: 'white', borderColor: PRIMARY, elevation: 4, shadowColor: PRIMARY, shadowOpacity: 0.05 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  lessonNum: { fontSize: 10, fontWeight: '900', color: '#9CA3AF', marginBottom: 4 },
  lessonTitle: { fontSize: 16, fontWeight: '700', color: DARK },
  activeText: { color: DARK },
  typeBadge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
  typeText: { fontSize: 9, fontWeight: 'bold' },

  // Expanded Content
  expandedArea: { marginTop: 15, borderTopWidth: 1, borderTopColor: '#E5E7EB', paddingTop: 15 },
  infoText: { fontSize: 14, color: '#6B7280', lineHeight: 22 },
  durationRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 },
  durationText: { fontSize: 12, color: '#9CA3AF', fontWeight: '600' },
  actionBtn: { backgroundColor: DARK, paddingHorizontal: 15, paddingVertical: 8, borderRadius: 8 },
  actionBtnText: { color: 'white', fontSize: 12, fontWeight: 'bold' },
});

export default ExploreC;