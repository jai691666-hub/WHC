import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import GetStartedScreen from '../Screen/GetStartedScreen';
import SplashScreen from '../Screen/SplashScreen';
import Login from '../auth/Login';
import StudentDetail from '../auth/StudentDetail';
import OtpScreen from '../auth/OtpScreen';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import EditProfileScreen from './EditProfileScreen';
import TabNavigation from '../components/TabNavigation';
import CourseDetail from '../Screen/CourseDetail';
import PersonalDetail from '../Screen/PersonalDetail';
import Confirmation from '../Screen/Confirmation';
import BottomEnrollment from '../Screen/BottomEnrollment';
import EnrollCourses from '../Screen/EnrollCourses';
import CoursesDetail from '../Screen/CoursesDetail';
import EnrollgetStarted from '../Screen/EnrollgetStarted';
import PCoursesDetail from '../Screen/PCoursesDetail';
import ExploreC from '../Screen/ExploreC';
import AboutScreen from '../Screen/AboutScreen';
import ThanksEnroll from '../Screen/ThanksEnroll';
import UserContext from '../../context/UserContext';
import DemTest from '../Screen/DemTest';
import DemTest2 from '../Screen/DemTest2';
import AdminHome from '../Admin/AdminHome';
import AdminLogin from '../Admin/AdminLogin';
import AdminTabNavigation from '../Admin/AdminTabNavigation';
import ManageStudent from '../Admin/ManageStudent';
import Signup from '../auth/Signup';
import CreaterNavigation from '../createrfolder/CreaterNavigation';
const Stack = createNativeStackNavigator();

const NavigationScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="getstarted" component={GetStartedScreen} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name='already' component={Confirmation}/>
        <Stack.Screen name="StudentDetail" component={StudentDetail} />
        <Stack.Screen name="otp" component={OtpScreen} />
        <Stack.Screen name="bottom" component={TabNavigation} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="profile" component={ProfileScreen} />
        <Stack.Screen name="editProfile" component={EditProfileScreen} />
        <Stack.Screen name="course" component={CourseDetail} />
        <Stack.Screen name="personal" component={PersonalDetail} />
        <Stack.Screen name='EnrollBottom' component={BottomEnrollment}/>
        <Stack.Screen name='Course' component={EnrollCourses} />
        <Stack.Screen name='detailsCourse' component={CoursesDetail}/>
        <Stack.Screen name='EnrollGet' component={EnrollgetStarted}/>
        <Stack.Screen name="EnrollCourses" component={EnrollCourses} />
        <Stack.Screen name='explorecourse' component={ExploreC}/>
        <Stack.Screen name='about' component={AboutScreen}/>
        <Stack.Screen name='thanks' component={ThanksEnroll}/>
        <Stack.Screen name='AdminHome' component={AdminHome}/>
        <Stack.Screen name='AdminLogin' component={AdminLogin}/>
        <Stack.Screen name='AdminTab' component={AdminTabNavigation}/>
        <Stack.Screen name='AdminManage' component={ManageStudent}/>
        <Stack.Screen name='Signup' component={Signup}/>
        <Stack.Screen name='CreaterNav' component={CreaterNavigation}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationScreen;

const styles = StyleSheet.create({});
