import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';

const COLORS = {
  primary: '#4F46E5',
  textHeader: '#1E293B',
  textSub: '#64748B',
  white: '#FFFFFF',
  background: '#F8FAFC',
  border: '#E2E8F0',
};

const ProfileStat = ({ label, value }) => (
  <View style={styles.statBox}>
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const Createrprofile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Profile Header Background */}
        <View style={styles.coverPhoto} />

        {/* Profile Info Section */}
        <View style={styles.profileInfoContainer}>
          <View style={styles.avatarContainer}>
            {/* Replace with actual image URI */}
            <View style={styles.avatarPlaceholder}>
              <Text style={{ fontSize: 40 }}>👨‍💻</Text>
            </View>
            <TouchableOpacity style={styles.editAvatarBtn}>
              <Text style={{ fontSize: 14 }}>✏️</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.name}>WhiteHat Coder</Text>
          <Text style={styles.bio}>Full Stack Developer & Online Instructor teaching 50k+ students worldwide.</Text>

          {/* Stats Row */}
          <View style={styles.statsRow}>
            <ProfileStat label="Students" value="12.4k" />
            <View style={styles.divider} />
            <ProfileStat label="Courses" value="15" />
            <View style={styles.divider} />
            <ProfileStat label="Reviews" value="4.9⭐" />
          </View>

          {/* Action Buttons */}
          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.editProfileBtn}>
              <Text style={styles.editProfileText}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareBtn}>
              <Text style={{ fontSize: 18 }}>🔗</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* About Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <Text style={styles.aboutText}>
            Passionate about building scalable mobile applications and teaching 
            the next generation of developers. Specializing in React Native, 
            Node.js, and Cloud Architecture.
          </Text>
        </View>

        {/* Settings/Account Options */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account Settings</Text>
          
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuEmoji}>📊</Text>
            <Text style={styles.menuText}>Payout Settings</Text>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuEmoji}>🔔</Text>
            <Text style={styles.menuText}>Notifications</Text>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuEmoji}>🛡️</Text>
            <Text style={styles.menuText}>Privacy & Security</Text>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.menuItem, { borderBottomWidth: 0 }]}>
            <Text style={styles.menuEmoji}>🚪</Text>
            <Text style={[styles.menuText, { color: '#EF4444' }]}>Logout</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Createrprofile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  coverPhoto: {
    height: 120,
    backgroundColor: COLORS.primary,
  },
  profileInfoContainer: {
    backgroundColor: COLORS.white,
    marginTop: -50,
    marginHorizontal: 20,
    borderRadius: 24,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  avatarContainer: {
    position: 'relative',
    marginTop: -60,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E2E8F0',
    borderWidth: 4,
    borderColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editAvatarBtn: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: COLORS.white,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.textHeader,
    marginTop: 15,
  },
  bio: {
    fontSize: 14,
    color: COLORS.textSub,
    textAlign: 'center',
    marginTop: 8,
    paddingHorizontal: 10,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 25,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  statBox: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textHeader,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.textSub,
    marginTop: 2,
  },
  divider: {
    width: 1,
    height: 30,
    backgroundColor: COLORS.border,
  },
  actionRow: {
    flexDirection: 'row',
    marginTop: 25,
    gap: 10,
  },
  editProfileBtn: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  editProfileText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  shareBtn: {
    width: 50,
    backgroundColor: COLORS.background,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  section: {
    marginTop: 25,
    paddingHorizontal: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textHeader,
    marginBottom: 12,
  },
  aboutText: {
    fontSize: 15,
    color: COLORS.textSub,
    lineHeight: 22,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 16,
    marginBottom: 10,
  },
  menuEmoji: {
    fontSize: 20,
    marginRight: 15,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.textHeader,
  },
  arrow: {
    fontSize: 20,
    color: COLORS.textSub,
  },
});