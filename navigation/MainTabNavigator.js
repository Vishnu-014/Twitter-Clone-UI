import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign, Feather, MaterialIcons, Ionicons, Entypo, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import SpaceScreen from '../screens/SpaceScreen';
import NotificationScreen from '../screens/NotificationScreen';
import MessagesScreen from '../screens/MessagesScreen';


const MainTabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{
      tabBarLabelStyle: {
        display: "none" 
      },
    }}>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Entypo name="home" size={24} color="black" />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name='Search'
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="search" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name='Space'
        component={SpaceScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="mic" size={24} color="black" />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name='Bell'
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Fontisto name="bell" size={24} color="black" />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name='Mail'
        component={MessagesScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons name="email-outline" size={24} color="black" />
          ),
          headerShown: false
        }}
      />
    </Tab.Navigator>
  )
}

export default MainTabNavigator

const styles = StyleSheet.create({})