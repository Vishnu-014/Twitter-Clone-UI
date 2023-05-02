import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const TweetMessageScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.rootContainer}>
      <View style={styles.container}>


        <View style={{ flexDirection: 'row', marginBottom: 5, }}>
          <Pressable onPress={() => navigation.goBack()}>
            <Text style={styles.cancelBtn}>Cancel</Text>
          </Pressable>
          <View style={styles.tweetBtn}>
            <Text style={styles.tweetTxt}>Tweet</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Image source={{ uri: 'https://c4.wallpaperflare.com/wallpaper/626/913/146/cyberpunk-skyscraper-upside-down-animated-movies-wallpaper-preview.jpg' }}
            style={{ width: 50, height: 50, marginLeft: 20, borderRadius: 50, }}
          />
          <TextInput
            multiline
            placeholder='Whats Happening'
            style={styles.tweet} />
        </View>
      </View>
    </View>
  )
}

export default TweetMessageScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
    marginTop: 50,
    //backgroundColor: '#ccc',
    margin: 15,
  },
  tweetTxt: {
    fontSize: 21,
    color: '#fff',
    paddingLeft: 12,
    paddingTop: 3,
  },
  tweetBtn: {
    marginLeft: 260,
    marginTop: 5,
    height: 30,
    width: 70,
    backgroundColor: '#359BF0',
    borderRadius: 20,
  },
  cancelBtn: {
    fontSize: 21,
    marginTop: 5,
    color: '#000'
  },
  tweet: {
    //backgroundColor: 'grey',
    color: '#000',
    marginLeft: 10,
  },
})