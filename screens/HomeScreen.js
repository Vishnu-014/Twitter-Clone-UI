import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import data from '../assets/data/tweets.json'

import { Ionicons, AntDesign } from '@expo/vector-icons';

import HomeHeader from '../components/HomeHeader'
import TweetComponent from '../components/TweetComponent'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{marginTop: 50}} />
      <ScrollView>
        <View style={{ flexDirection: 'row', width: '100%' }}>
          <View>
            <Image source={{ uri: 'https://c4.wallpaperflare.com/wallpaper/626/913/146/cyberpunk-skyscraper-upside-down-animated-movies-wallpaper-preview.jpg' }}
              style={{ width: 50, height: 50, marginLeft: 20, borderRadius: 50, }}
            />
          </View>
          <View style={{ paddingLeft: 130 }}>
            <AntDesign name="twitter" size={35} color="#359BF0" />
          </View>
        </View>
        <HomeHeader />
        {/* //Tweets  */}
        <FlatList
          data={data}
          renderItem={({ item }) => <TweetComponent {...item} />}
          inverted
          scrollEnabled={false}
        />
      </ScrollView>



      <Pressable onPress={() => navigation.navigate('TweetMessage')} style={styles.tweetIcon}>
        <Ionicons name="add" size={34} color="white"
          style={{ paddingTop: 13, paddingLeft: 16 }}
        />
      </Pressable>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //marginTop: 50,
  },
  tweetIcon: {
    backgroundColor: '#349BF0',
    width: 65,
    height: 65,
    borderRadius: 50,
    position: 'absolute',
    bottom: 30,
    left: 340,
  }
})