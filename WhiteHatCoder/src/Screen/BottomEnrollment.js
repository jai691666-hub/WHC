import React from 'react';
import { StyleSheet, Text, View, Image, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EnrollHome from './EnrollHome';
import EnrollCourses from './EnrollCourses';
import EnrollProfile from './EnrollProfile';

const Tab = createBottomTabNavigator();

const BottomEnrollment = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#FF7B29', 
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarLabelStyle: styles.labelStyle,
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === 'Home') iconName = require('../assets/home.png');
          else if (route.name === 'Course') iconName = require('../assets/about.png');
          else if (route.name === 'Profile') iconName = require('../assets/profile.png');

          return (
            <View style={[styles.iconContainer, focused && styles.activeIconBg]}>
              <Image
                source={iconName}
                style={[
                  styles.iconSize,
                  { tintColor: focused ? '#FF7B29' : '#9CA3AF' }
                ]}
              />
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={EnrollHome} />
      <Tab.Screen name="Course" component={EnrollCourses} />
      <Tab.Screen name="Profile" component={EnrollProfile} />
    </Tab.Navigator>
  );
};

export default BottomEnrollment;

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute', 
    bottom: Platform.OS === 'ios' ? 30 : 20,
    left: 20,
    right: 20,
    height: 75,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 10 },
    elevation: 8,
    borderTopWidth: 0, 
    paddingBottom: Platform.OS === 'ios' ? 10 : 12,
    paddingTop: 12,
  },
  labelStyle: {
    fontSize: 11,
    fontWeight: '700',
    marginTop: -5,
  },
  iconContainer: {
    width: 50,
    height: 35,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  activeIconBg: {
    backgroundColor: '#FFF1E8', 
  },
  iconSize: {
    height: 22,
    width: 22,
    resizeMode: 'contain',
  },
});