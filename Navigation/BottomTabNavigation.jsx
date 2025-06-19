import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// // Import screens
// import HomeScreen from '../screens/HomeScreen';
// import BookshelfScreen from '../Profile/Bookshelf';
// import ChapterSelectScreen from '../Profile/ChapterSelectScreen';
import ProfileScreen from '../Profile/profile';
// import SearchScreen from '../Search/search';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName = '';

          switch (route.name) {
            case 'Trang Chủ':
              iconName = 'home';
              break;
            case 'Truyện Tranh':
              iconName = 'book-open-page-variant';
              break;
            case 'Gói Truyện':
              iconName = 'package-variant-closed';
              break;
            case 'Tài Khoản':
              iconName = 'account-circle';
              break;
          }

          return <Icon name={iconName} color={color} size={size} />;
        },
        tabBarActiveTintColor: '#ff5e57',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Trang Chủ" component={HomeScreen} />
      {/* <Tab.Screen name="Truyện Tranh" component={BookshelfScreen} />
      <Tab.Screen name="Gói Truyện" component={ChapterSelectScreen} /> */}
      <Tab.Screen name="Tài Khoản" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
