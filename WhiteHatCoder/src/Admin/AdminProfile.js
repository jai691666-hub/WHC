import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AdminProfile = ({navigation}) => {
  const handleLogout = async () => {
    await AsyncStorage.clear();
    // navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#e76026" />
      <ScrollView>
        {/* Header - Written out simply */}
        <View style={styles.headerBackground}>
          <View style={styles.profileRow}>
            <Image
              source={{uri: 'https://i.pravatar.cc/150?u=alexadmin'}}
              style={styles.avatar}
            />
            <View style={styles.headerTextContainer}>
              <Text style={styles.welcomeText}>System Administrator</Text>
              <Text style={styles.nameText}>Alex Johnson</Text>
              <View style={styles.idBadge}>
                <Text style={styles.idText}>ADM-2026-04</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={{fontSize: 20}}>👥</Text>
            <Text style={styles.statValue}>1,240</Text>
            <Text style={styles.statLabel}>Students</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={{fontSize: 20}}>✍️</Text>
            <Text style={styles.statValue}>48</Text>
            <Text style={styles.statLabel}>Creators</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={{fontSize: 20}}>💰</Text>
            <Text style={styles.statValue}>$12k</Text>
            <Text style={styles.statLabel}>Revenue</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Quick Management</Text>

        <View style={styles.gridRow}>
          <TouchableOpacity onPress={()=>navigation.navigate('AdminManage')}
            style={[styles.gridItem, {backgroundColor: '#E3F2FD'}]}>
            <Text style={styles.gridIcon}>🎓</Text>
            <Text style={styles.gridText}>Manage Students</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.gridItem, {backgroundColor: '#F3E5F5'}]}>
            <Text style={styles.gridIcon}>📺</Text>
            <Text style={styles.gridText}>App Content</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.gridRow}>
          <TouchableOpacity
            style={[styles.gridItem, {backgroundColor: '#E8F5E9'}]}>
            <Text style={styles.gridIcon}>💳</Text>
            <Text style={styles.gridText}>Payouts</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.gridItem, {backgroundColor: '#FFF3E0'}]}>
            <Text style={styles.gridIcon}>📑</Text>
            <Text style={styles.gridText}>System Logs</Text>
          </TouchableOpacity>
        </View>

        {/* Menu Box - No separate component, just simple rows */}
        <View style={styles.menuBox}>
          <TouchableOpacity style={styles.menuLink}>
            <Text style={styles.menuEmoji}>⚙️</Text>
            <View style={{flex: 1, marginLeft: 10}}>
              <Text style={styles.menuTitle}>Admin Settings</Text>
              <Text style={styles.menuSub}>Privacy, Security, Auth</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </TouchableOpacity>

          <View style={styles.line} />

          <TouchableOpacity style={styles.menuLink}>
            <Text style={styles.menuEmoji}>🛡️</Text>
            <View style={{flex: 1, marginLeft: 10}}>
              <Text style={styles.menuTitle}>Commission Rules</Text>
              <Text style={styles.menuSub}>Set percentage for creators</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </TouchableOpacity>

          <View style={styles.line} />

          <TouchableOpacity style={styles.menuLink}>
            <Text style={styles.menuEmoji}>📧</Text>
            <View style={{flex: 1, marginLeft: 10}}>
              <Text style={styles.menuTitle}>Support Tickets</Text>
              <Text style={styles.menuSub}>12 pending inquiries</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.logoutText}>Secure Logout</Text>
        </TouchableOpacity>

        <Text style={styles.versionText}>App Version 2.0.4 (Build 112)</Text>
        <View style={{height: 50}} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AdminProfile;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F0F2F5'},
  headerBackground: {
    backgroundColor: '#e76026',
    height: 180,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    padding: 20,
    justifyContent: 'center',
  },
  profileRow: {flexDirection: 'row', alignItems: 'center'},
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#FFF',
  },
  headerTextContainer: {marginLeft: 15},
  welcomeText: {color: '#ffd1bc', fontSize: 12, fontWeight: 'bold'},
  nameText: {color: '#FFF', fontSize: 22, fontWeight: 'bold'},
  idBadge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 4,
    borderRadius: 5,
    marginTop: 5,
    width: 90,
    alignItems: 'center',
  },
  idText: {color: '#FFF', fontSize: 10},

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: -30,
  },
  statCard: {
    backgroundColor: '#FFF',
    width: '28%',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    elevation: 5,
  },
  statValue: {fontSize: 16, fontWeight: 'bold', marginTop: 5, color: 'black'},
  statLabel: {fontSize: 10, color: '#888'},

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 30,
    marginBottom: 10,
    color: 'black',
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  gridItem: {width: '45%', padding: 20, borderRadius: 15, alignItems: 'center'},
  gridIcon: {fontSize: 25, marginBottom: 5},
  gridText: {fontSize: 13, fontWeight: 'bold', color:'black'},

  menuBox: {backgroundColor: '#FFF', margin: 20, borderRadius: 20, padding: 10},
  menuLink: {flexDirection: 'row', alignItems: 'center', padding: 15},
  menuEmoji: {fontSize: 20},
  menuTitle: {fontSize: 15, fontWeight: 'bold', color:'black'},
  menuSub: {fontSize: 11, color: '#999'},
  line: {height: 1, backgroundColor: '#f0f0f0', marginHorizontal: 15},
  chevron: {fontSize: 20, color: '#ccc'},

  logoutBtn: {
    backgroundColor: '#1A1A1A',
    margin: 20,
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  logoutText: {color: '#FFF', fontWeight: 'bold'},
  versionText: {textAlign: 'center', color: '#aaa', fontSize: 11},
});
