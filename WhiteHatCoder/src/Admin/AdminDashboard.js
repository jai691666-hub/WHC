import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  SafeAreaView
} from 'react-native';
// Using Lucide for the modern look in the image
import { Users, UserCheck, BookOpen, Wallet, ChevronRight, LayoutDashboard, Settings, Bell } from 'lucide-react-native';

const screenWidth = Dimensions.get('window').width;

const AdminDashboard = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.mainContainer}>
        
        {/* 1. Header */}
        <View style={styles.topHeader}>
          <View>
            <Text style={styles.helloText}>Admin Dashboard</Text>
            <Text style={styles.dateText}>Monday, Oct 24</Text>
          </View>
          <TouchableOpacity style={styles.notificationBtn}>
            <Bell color="white" size={20} />
            <View style={styles.dot} />
          </TouchableOpacity>
        </View>

        {/* 2. Stats Grid */}
        <View style={styles.content}>
          <View style={styles.row}>
            <StatCard icon={<Users color="#3B82F6" size={24}/>} label="Total Students" value="24,502" trend="+5.2%" />
            <StatCard icon={<UserCheck color="#3B82F6" size={24}/>} label="Creators" value="1,240" trend="+2.1%" />
          </View>

          <View style={styles.row}>
            <StatCard icon={<BookOpen color="#3B82F6" size={24}/>} label="Courses" value="892" trend="+12%" />
            <StatCard icon={<Wallet color="#3B82F6" size={24}/>} label="Earnings" value="$42,250" trend="+8.4%" />
          </View>
        </View>

        {/* 3. Revenue Graph Section */}
        <View style={styles.graphContainer}>
          <View style={styles.graphHeader}>
            <View>
              <Text style={styles.graphLabel}>Revenue Performance</Text>
              <Text style={styles.graphValue}>$42,250.00</Text>
            </View>
            <Text style={styles.graphTrend}>↗ 15% {"\n"}<Text style={styles.vsText}>VS LAST 6MO</Text></Text>
          </View>
          {/* Placeholder for the Wave Graph */}
          <View style={styles.placeholderGraph}>
             <Text style={styles.monthText}>Jan     Feb     Mar     Apr     May     Jun</Text>
          </View>
        </View>

        {/* 4. Quick Actions */}
        <View style={styles.content}>
          <View style={styles.sectionHeader}>
            <Text style={styles.labelTitle}>Quick Actions</Text>
            <Text style={styles.viewAll}>View All</Text>
          </View>
          
          <ActionItem icon={<Settings color="#3B82F6" />} title="Approve Courses" sub="12 pending review" />
          <ActionItem icon={<Users color="#3B82F6" />} title="Manage Users" sub="New signups: 142" />
          <ActionItem icon={<LayoutDashboard color="#3B82F6" />} title="System Logs" sub="Healthy - 99.9% uptime" />
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* 5. Bottom Navigation Tab */}
      <View style={styles.bottomTab}>
        <TabItem icon={<LayoutDashboard color="#3B82F6" />} label="DASH" active />
        <TabItem icon={<BookOpen color="#94A3B8" />} label="COURSES" />
        <TabItem icon={<Users color="#94A3B8" />} label="USERS" />
        <TabItem icon={<Settings color="#94A3B8" />} label="SETTINGS" />
      </View>
    </SafeAreaView>
  );
};

// Sub-components for cleaner code
const StatCard = ({ icon, label, value, trend }) => (
  <View style={styles.statBox}>
    <View style={styles.statHeader}>
      <View style={styles.iconBg}>{icon}</View>
      <Text style={styles.trendText}>{trend}</Text>
    </View>
    <Text style={styles.statName}>{label}</Text>
    <Text style={styles.statValue}>{value}</Text>
  </View>
);

const ActionItem = ({ icon, title, sub }) => (
  <TouchableOpacity style={styles.actionCard}>
    <View style={styles.actionLeft}>
      <View style={styles.iconBg}>{icon}</View>
      <View style={styles.actionTexts}>
        <Text style={styles.actionTitle}>{title}</Text>
        <Text style={styles.actionSub}>{sub}</Text>
      </View>
    </View>
    <ChevronRight color="#475569" size={20} />
  </TouchableOpacity>
);

const TabItem = ({ icon, label, active }) => (
  <View style={styles.tabItem}>
    {icon}
    <Text style={[styles.tabLabel, active && { color: '#3B82F6' }]}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#0D1520' },
  mainContainer: { flex: 1, backgroundColor: '#0D1520' },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  helloText: { fontSize: 22, fontWeight: 'bold', color: 'white' },
  dateText: { fontSize: 14, color: '#94A3B8', marginTop: 4 },
  notificationBtn: { backgroundColor: '#1E293B', padding: 10, borderRadius: 12 },
  dot: { position: 'absolute', top: 10, right: 10, width: 8, height: 8, backgroundColor: '#EF4444', borderRadius: 4, borderWidth: 2, borderColor: '#1E293B' },
  content: { padding: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  statBox: {
    backgroundColor: '#151F2C',
    width: (screenWidth / 2) - 28,
    padding: 16,
    borderRadius: 16,
  },
  statHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 },
  iconBg: { backgroundColor: '#1E293B', padding: 8, borderRadius: 10 },
  trendText: { color: '#10B981', fontWeight: 'bold', fontSize: 12 },
  statValue: { fontSize: 20, fontWeight: 'bold', color: 'white' },
  statName: { fontSize: 13, color: '#94A3B8', marginBottom: 4 },
  graphContainer: { backgroundColor: '#151F2C', margin: 20, padding: 20, borderRadius: 20 },
  graphHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  graphLabel: { color: '#94A3B8', fontSize: 14 },
  graphValue: { color: 'white', fontSize: 24, fontWeight: 'bold', marginTop: 5 },
  graphTrend: { color: '#10B981', textAlign: 'right', fontWeight: 'bold' },
  vsText: { color: '#94A3B8', fontSize: 10 },
  placeholderGraph: { height: 120, justifyContent: 'flex-end', alignItems: 'center', marginTop: 10 },
  monthText: { color: '#475569', fontSize: 12 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  labelTitle: { fontSize: 18, fontWeight: 'bold', color: 'white' },
  viewAll: { color: '#3B82F6', fontSize: 14 },
  actionCard: { backgroundColor: '#151F2C', padding: 12, borderRadius: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 },
  actionLeft: { flexDirection: 'row', alignItems: 'center' },
  actionTexts: { marginLeft: 15 },
  actionTitle: { color: 'white', fontWeight: '600', fontSize: 15 },
  actionSub: { color: '#64748B', fontSize: 12, marginTop: 2 },
  bottomTab: { flexDirection: 'row', backgroundColor: '#0D1520', paddingVertical: 15, borderTopWidth: 1, borderTopColor: '#1E293B', justifyContent: 'space-around' },
  tabItem: { alignItems: 'center' },
  tabLabel: { color: '#94A3B8', fontSize: 10, marginTop: 5, fontWeight: 'bold' }
});

export default AdminDashboard;