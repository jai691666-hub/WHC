import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const EnrollgetStarted = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      
      <ImageBackground
        source={require("../assets/explore.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Dark Overlay for better text readability */}
        <View style={styles.overlay}>
          
          <View style={styles.contentContainer}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>ELITE E-LEARNING</Text>
            </View>

            <Text style={styles.mainTitle}>
              Master New Skills{"\n"}
              <Text style={styles.highlightText}>Anytime, Anywhere</Text>
            </Text>

            <Text style={styles.subtitle}>
              Access over 5,000+ top-rated courses from{"\n"}
              industry experts and world-class universities.
            </Text>

            <View style={styles.buttonWrapper}>
              <TouchableOpacity 
                style={styles.primaryBtn} 
                onPress={() => navigation.navigate('EnrollBottom')}
                activeOpacity={0.8}
              >
                <Text style={styles.btnText}>Get Started</Text>
                <View style={styles.arrowCircle}>
                   <Text style={styles.arrowIcon}>→</Text>
                </View>
              </TouchableOpacity>
            </View>

            <Text style={styles.footerText}>Join 1 million+ students today</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default EnrollgetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  backgroundImage: {
    flex: 1,
    width: width,
    height: height,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)', // Darkens image slightly
    justifyContent: 'flex-end',
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 40,
    paddingHorizontal: 25,
    paddingBottom: 50,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 20,
  },
  badge: {
    backgroundColor: 'rgba(231, 96, 38, 0.1)',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 15,
  },
  badgeText: {
    color: "#e76026",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1.2,
  },
  mainTitle: {
    color: "#1A1A1A",
    fontSize: 32,
    fontWeight: "800",
    textAlign: "center",
    lineHeight: 40,
  },
  highlightText: {
    color: "#e76026",
  },
  subtitle: {
    color: "#666",
    fontSize: 15,
    textAlign: "center",
    marginTop: 15,
    lineHeight: 22,
    paddingHorizontal: 10,
  },
  buttonWrapper: {
    width: '100%',
    marginTop: 35,
  },
  primaryBtn: {
    backgroundColor: "#e76026",
    flexDirection: 'row',
    height: 65,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    shadowColor: "#e76026",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    marginRight: 10,
  },
  arrowCircle: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowIcon: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    marginTop: 20,
    color: '#999',
    fontSize: 12,
    fontWeight: '500',
  }
});