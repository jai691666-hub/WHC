import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

const ThanksEnroll = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Visual Accent - Top Left */}
      <View style={styles.accentBar} />

      <View style={styles.body}>
        <Text style={styles.superTitle}>01</Text>
        <Text style={styles.mainTitle}>Registration{'\n'}Complete.</Text>
        
        <View style={styles.divider} />
        
        <Text style={styles.supportText}>
          Your account is active. Explore your dashboard to find your personalized learning path.
        </Text>
      </View>

      <View style={styles.actionCard}>
        <Text style={styles.cardHint}>Ready to dive in?</Text>
        <TouchableOpacity 
          style={styles.blackButton} 
          onPress={() => navigation.replace('bottom')}
        >
          <Text style={styles.buttonText}>Go to Dashboard</Text>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ThanksEnroll;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  accentBar: {
    width: 60,
    height: 4,
    backgroundColor: '#e76026',
    marginTop: 40,
    marginLeft: 30,
  },
  body: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 60,
  },
  superTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#e76026',
    letterSpacing: 2,
    marginBottom: 10,
  },
  mainTitle: {
    fontSize: 42,
    fontWeight: '900',
    color: '#1A1A1A',
    lineHeight: 48,
  },
  divider: {
    width: 40,
    height: 1,
    backgroundColor: '#DDD',
    marginVertical: 30,
  },
  supportText: {
    fontSize: 18,
    color: '#444',
    lineHeight: 28,
    maxWidth: '80%',
  },
  actionCard: {
    backgroundColor: '#FFF',
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // Soft Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
  cardHint: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  blackButton: {
    backgroundColor: '#1A1A1A',
    height: 65,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700',
  },
  arrow: {
    color: '#FFF',
    fontSize: 24,
  },
});