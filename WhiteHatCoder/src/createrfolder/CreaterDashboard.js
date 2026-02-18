import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  Dimensions, 
  SafeAreaView,
  StatusBar
} from 'react-native';

const { width } = Dimensions.get('window');

// Custom Color Palette
const COLORS = {
  primary: '#4F46E5', 
  success: '#10B981', 
  background: '#F8FAFC',
  card: '#FFFFFF',
  textHeader: '#1E293B',
  textSub: '#64748B',
  white: '#FFFFFF',
  border: '#E2E8F0'
};

const StatCard = ({ title, value, emoji, isFullWidth }) => (
  <View style={[
    styles.card, 
    isFullWidth ? styles.fullWidthCard : styles.halfWidthCard
  ]}>
    <View style={styles.iconCircle}>
      <Text style={{ fontSize: 24 }}>{emoji}</Text>
    </View>
    <View style={{ flex: 1 }}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statTitle}>{title}</Text>
    </View>
  </View>
);

const CreaterDashboard = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>INSTRUCTOR PANEL</Text>
            <Text style={styles.username}>WhiteHat Coder</Text>
          </View>
          <TouchableOpacity style={styles.settingsBtn}  onPress={()=>navigation.navigate('Cprofile')}>
            <Text style={{ fontSize: 22 }}>🦊</Text>
          </TouchableOpacity>
        </View>

        {/* 1. Earnings (High visibility) */}
        <StatCard 
          title="Total Earnings" 
          value="$12,850.00" 
          emoji="💰" 
          isFullWidth={true} 
        />

        {/* 2. Students & Courses Grid */}
        <View style={styles.statsGrid}>
          <StatCard title="Total Students" value="1,420" emoji="👨‍🎓" />
          <StatCard title="Total Courses" value="12" emoji="📚" />
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Course Management</Text>
          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.primaryActionBtn} onPress={()=>navigation.navigate('Ccourse')}  >
              <Text style={styles.primaryActionText}>+ Create Course</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryActionBtn}>
              <Text style={styles.secondaryActionText}>Analytics</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Performance List */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top Performing Courses</Text>
          
          {/* Course Row 1 */}
          <View style={styles.courseItem}>
            <View style={[styles.courseIcon, { backgroundColor: '#EEF2FF' }]}>
              <Text style={{ fontSize: 20 }}>⚛️</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.courseName}>React Native Masterclass</Text>
              <Text style={styles.courseSub}>450 Students • $4.2k</Text>
            </View>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Trending</Text>
            </View>
          </View>

          {/* Course Row 2 */}
          <View style={styles.courseItem}>
            <View style={[styles.courseIcon, { backgroundColor: '#ECFDF5' }]}>
              <Text style={{ fontSize: 20 }}>🐍</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.courseName}>Python Backend Pro</Text>
              <Text style={styles.courseSub}>320 Students • $2.1k</Text>
            </View>
          </View>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreaterDashboard;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 25,
  },
  greeting: {
    fontSize: 12,
    fontWeight: '800',
    color: COLORS.textSub,
    letterSpacing: 1.5,
  },
  username: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.textHeader,
  },
  settingsBtn: {
    padding: 10,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: COLORS.white,
    padding: 18,
    borderRadius: 24,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  fullWidthCard: {
    width: '100%',
  },
  halfWidthCard: {
    width: width * 0.43,
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.textHeader,
  },
  statTitle: {
    fontSize: 13,
    color: COLORS.textSub,
    marginTop: 2,
  },
  section: {
    marginTop: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textHeader,
    marginBottom: 15,
  },
  actionRow: {
    flexDirection: 'row',
    gap: 12,
  },
  primaryActionBtn: {
    flex: 2,
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
  primaryActionText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondaryActionBtn: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  secondaryActionText: {
    color: COLORS.textHeader,
    fontWeight: '600',
  },
  courseItem: {
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  courseIcon: {
    width: 45,
    height: 45,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  courseName: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.textHeader,
  },
  courseSub: {
    fontSize: 12,
    color: COLORS.textSub,
    marginTop: 2,
  },
  badge: {
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: {
    color: COLORS.success,
    fontSize: 10,
    fontWeight: 'bold',
  },
});