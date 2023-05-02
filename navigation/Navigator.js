import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import TweetScreen from '../screens/TweetScreen';
import MainTabNavigator from './MainTabNavigator';
import TweetMessageScreen from '../screens/TweetMessageScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ImageView from '../components/ImageView';

const Stack = createNativeStackNavigator();

const Navigator = () => {



  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainTabNavigator} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="Tweet" component={TweetScreen} />
        <Stack.Screen name="TweetMessage" component={TweetMessageScreen} options={{
          headerShown: false,
          presentation: 'containedModal'
        }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Image" component={ImageView}
          options={{
            headerShown: false,
            presentation: 'card'
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})