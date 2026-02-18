import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
  Dimensions,
  StatusBar,
  Platform,
  Alert,
} from 'react-native';

const {width} = Dimensions.get('window');

const COLORS = {
  primary: '#FF7B29',
  secondary: '#FFF1E8',
  dark: '#1F2937',
  white: '#FFFFFF',
  gray: '#9CA3AF',
  text: '#4B5563',
  background: '#F9FAFB',
};

const CoursesDetail = ({route, navigation}) => {
  const {courses} = route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [openenroll, setopenenrol] = useState(false);

  const handleEnroll = () => {
    setopenenrol(false);
    Alert.alert('Success', 'You have enrolled successfully! 🎉');

    setTimeout(() => {
      navigation.replace('thanks', {courses: courses});
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backIcon}>‹</Text>
      </TouchableOpacity>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 120}}>
        <View style={styles.imageContainer}>
          {/* Use uri if image is a link, or source if it's a require() */}
          <Image
            source={
              typeof courses.img === 'string' ? {uri: courses.img} : courses.img
            }
            style={styles.bannerImg}
          />
          <View style={styles.imageOverlay} />
        </View>

        {/* 📝 Main Content Body */}
        <View style={styles.mainContent}>
          <View style={styles.badgeRow}>
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>
                {courses?.category || 'General'}
              </Text>
            </View>
            <View style={styles.ratingBadge}>
              <Text style={styles.ratingText}>⭐ 4.8 (2k+ Reviews)</Text>
            </View>
          </View>

          <Text style={styles.courseTitle}>{courses?.courseName}</Text>

          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statIcon}>⏳</Text>
              <Text style={styles.statText}>{courses?.courseDuration}</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statIcon}>👥</Text>
              <Text style={styles.statText}>Enrolled (1.2k)</Text>
            </View>
          </View>

          {/* 📖 About Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About this course</Text>
            <Text style={styles.description} numberOfLines={3}>
              {courses?.introduction}
            </Text>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text style={styles.readMoreText}>Read Full Syllabus</Text>
            </TouchableOpacity>
          </View>

          {/* Tools & Tech Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Tools & Technologies</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.techList}>
              {[
                courses?.technology1,
                courses?.technology2,
                courses?.technology3,
                courses?.technology4,
                courses?.technology5,
              ].map((tech, index) =>
                tech ? (
                  <View key={index} style={styles.techWrapper}>
                    <Image
                      source={typeof tech === 'string' ? {uri: tech} : tech}
                      style={styles.techIcon}
                    />
                  </View>
                ) : null,
              )}
            </ScrollView>
          </View>

          {/* 🎁 Features Card */}
          <View style={styles.featuresCard}>
            <Text style={styles.featuresHeading}>What's Included</Text>
            <FeatureItem
              icon="🎓"
              bg="#FFF1E8"
              title="Industry Certificate"
              desc="Professional certification upon completion."
            />
            <FeatureItem
              icon="🎥"
              bg="#EAF2FF"
              title="Live Sessions"
              desc="Weekly Q&A sessions with experts."
            />
            <FeatureItem
              icon="🎯"
              bg="#E8FFF4"
              title="Career Support"
              desc="Resume building & placement help."
            />
          </View>
        </View>
      </ScrollView>

      {/* 💳 Sticky Bottom Action Bar */}
      <View style={styles.bottomBar}>
        <View>
          <Text style={styles.totalPriceLabel}>Full Course Fee</Text>
          <Text style={styles.totalPriceText}>₹{courses?.fees}</Text>
        </View>
        <TouchableOpacity
          style={styles.primaryBtn}
          onPress={() => setopenenrol(true)}>
          <Text style={styles.primaryBtnText}>Enroll Now</Text>
          <View style={styles.btnArrow}>
            <Text style={{color: '#FFF'}}>➜</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* 🚀 Enrollment Modal */}
      <Modal animationType="fade" transparent visible={openenroll}>
        <View style={styles.modalBlur}>
          <View style={styles.enrollPopup}>
            <Text style={styles.congratsEmoji}>🎓</Text>
            <Text style={styles.enrollTitle}>Ready to Level Up?</Text>
            <Text style={styles.enrollSubtitle}>
              You are one step away from joining {courses?.courseName}.
            </Text>
            <TouchableOpacity style={styles.confirmBtn} onPress={handleEnroll}>
              <Text style={styles.confirmBtnText}>Confirm Enrollment</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setopenenrol(false)}>
              <Text style={styles.cancelText}>Maybe Later</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* 📜 Syllabus Modal */}
      <Modal animationType="slide" transparent visible={modalVisible}>
        <View style={styles.modalOverlay}>
          <View style={styles.syllabusModal}>
            <View style={styles.syllabusHeader}>
              <Text style={styles.syllabusTitle}>Course Syllabus</Text>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.closeBtn}>
                <Text style={styles.closeBtnText}>✕</Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{padding: 20}}>
              <SyllabusItem
                number="01"
                title="Introduction & Fundamentals"
                content={courses?.introduction}
              />
              <SyllabusItem
                number="02"
                title="Core Technologies"
                content={courses?.Technologies}
              />
              <SyllabusItem
                number="03"
                title="Practical Projects & Labs"
                content={courses?.What}
              />
              <View style={{height: 100}} />
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// --- Helper Components ---

const FeatureItem = ({icon, title, desc, bg}) => (
  <View style={styles.featureRow}>
    <View style={[styles.featIconBox, {backgroundColor: bg}]}>
      <Text style={{fontSize: 20}}>{icon}</Text>
    </View>
    <View style={{flex: 1}}>
      <Text style={styles.featTitle}>{title}</Text>
      <Text style={styles.featDesc}>{desc}</Text>
    </View>
  </View>
);

const SyllabusItem = ({number, title, content}) => (
  <View style={styles.syllabusBlock}>
    <View style={styles.syllabusRow}>
      <View style={styles.numberBadge}>
        <Text style={styles.syllabusNumber}>{number}</Text>
      </View>
      <Text style={styles.syllabusBlockTitle}>{title}</Text>
    </View>
    <View style={styles.syllabusContentRow}>
      <View style={styles.timelineLine} />
      <Text style={styles.syllabusBlockText}>
        {content || 'Content details coming soon...'}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.white},
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
    backgroundColor: 'white',
    width: 45,
    height: 45,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowOpacity: 0.1,
  },
  backIcon: {fontSize: 35, color: COLORS.dark, marginBottom: 5},
  imageContainer: {width: '100%', height: 300},
  bannerImg: {width: '100%', height: '100%'},
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  mainContent: {
    marginTop: -30,
    backgroundColor: 'white',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 25,
  },
  badgeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  categoryBadge: {
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
  },
  categoryText: {color: COLORS.primary, fontWeight: 'bold', fontSize: 12},
  ratingText: {color: COLORS.gray, fontSize: 12, fontWeight: '600'},
  courseTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: COLORS.dark,
    marginBottom: 15,
  },
  statsRow: {flexDirection: 'row', marginBottom: 25},
  statItem: {flexDirection: 'row', alignItems: 'center', marginRight: 20},
  statText: {marginLeft: 6, color: COLORS.gray, fontWeight: '600'},
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.dark,
    marginBottom: 10,
    marginTop: 10,
  },
  description: {color: COLORS.text, lineHeight: 22, fontSize: 14},
  readMoreText: {color: COLORS.primary, fontWeight: 'bold', marginTop: 5},
  techList: {marginTop: 10},
  techWrapper: {
    width: 60,
    height: 60,
    borderRadius: 15,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    borderWidth: 1,
    borderColor: '#EEE',
  },
  techIcon: {width: 35, height: 35, resizeMode: 'contain'},
  featuresCard: {
    backgroundColor: COLORS.background,
    borderRadius: 25,
    padding: 20,
    marginTop: 30,
  },
  featuresHeading: {fontSize: 18, fontWeight: '700', marginBottom: 20},
  featureRow: {flexDirection: 'row', alignItems: 'center', marginBottom: 18},
  featIconBox: {
    width: 50,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  featTitle: {fontWeight: 'bold', fontSize: 15, color: COLORS.dark},
  featDesc: {fontSize: 12, color: COLORS.gray},
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    paddingBottom: Platform.OS === 'ios' ? 35 : 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    elevation: 20,
  },
  totalPriceLabel: {fontSize: 12, color: COLORS.gray, fontWeight: '600'},
  totalPriceText: {fontSize: 24, fontWeight: '800', color: COLORS.dark},
  primaryBtn: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  primaryBtnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 10,
  },
  btnArrow: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    width: 22,
    height: 22,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBlur: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'flex-end',
  },
  enrollPopup: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 30,
    alignItems: 'center',
  },
  enrollTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  enrollSubtitle: {textAlign: 'center', color: '#666', marginVertical: 15},
  confirmBtn: {
    backgroundColor: COLORS.primary,
    width: '100%',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  confirmBtnText: {color: 'white', fontWeight: 'bold'},
  cancelText: {marginTop: 15, color: COLORS.gray, fontWeight: '600'},
  congratsEmoji: {fontSize: 50, marginBottom: 10},
  syllabusModal: {
    height: '85%',
    backgroundColor: 'white',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  syllabusHeader: {
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  syllabusTitle: {fontSize: 22, fontWeight: '800', color: '#000'},
  closeBtn: {
    backgroundColor: '#F5F5F5',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeBtnText: {fontSize: 16, color: '#000', fontWeight: 'bold'},
  syllabusBlock: {marginBottom: 10, paddingHorizontal: 10},
  syllabusRow: {flexDirection: 'row', alignItems: 'center', marginBottom: 5},
  numberBadge: {
    backgroundColor: COLORS.primary,
    width: 30,
    height: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  syllabusNumber: {fontSize: 14, fontWeight: 'bold', color: 'white'},
  syllabusBlockTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.primary,
    flex: 1,
  },
  syllabusContentRow: {flexDirection: 'row', marginLeft: 14},
  timelineLine: {
    width: 2,
    backgroundColor: COLORS.primary,
    opacity: 0.2,
    marginRight: 28,
  },
  syllabusBlockText: {
    flex: 1,
    fontSize: 14,
    color: '#000000',
    lineHeight: 22,
    paddingBottom: 25,
  },
});

export default CoursesDetail;
