import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
// import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
// import DetailComicScreen from '../screens/DetailComicScreen';
// import ReadChapterScreen from '../screens/ReadChapterScreen';
// import AccountScreen from '../Profile/Account';
import BottomTabNavigation from './BottomTabNavigation';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      {/* Splash & Welcome */}
      <Stack.Screen name="Splash" component={SplashScreen} />
      {/* <Stack.Screen name="Welcome" component={WelcomeScreen} /> */}

      {/* Auth Screens */}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      {/* <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} /> */}

      {/* Main App Screens */}
      <Stack.Screen name="Main" component={BottomTabNavigation} />
      {/* <Stack.Screen name="DetailComic" component={DetailComicScreen} />
      <Stack.Screen name="ReadChapter" component={ReadChapterScreen} />
      <Stack.Screen name="Account" component={AccountScreen} /> */}
    </Stack.Navigator>
  );
}
