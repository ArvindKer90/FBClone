import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import UserProfile from '../screens/userProfile';
import Friends from '../screens/friends';
import Notifications from '../screens/notifications';
import Profile from '../screens/profile';
import Settings from '../screens/settings';
import MyTabBar from '../components/tabBar';

export type HomeStackParams = {
  HomeScreen: undefined;
  UserProfile: undefined;
  Profile: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParams>();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
}
export type FriendsStackParams = {
  Friends: undefined;
};

export type NotificationsStackParams = {
  Notifications: undefined;
};

export type ProfileStackParams = {
  Profile: undefined;
};

export type SettingsStackParams = {
  Settings: undefined;
};

const tabbar = (props: BottomTabBarProps) => {
  return <MyTabBar {...props} />;
};

const Tab = createBottomTabNavigator();

function AppTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props: BottomTabBarProps) => tabbar(props)}>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Friends"
          component={Friends}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppTabNavigator;
