import { Image, StyleSheet, Text, View, FlatList, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { Feather, FontAwesome, AntDesign, EvilIcons, Entypo } from '@expo/vector-icons';

import data from '../assets/data/tweets.json'
import comments from '../assets/data/comments.json'
import { useNavigation, useRoute } from '@react-navigation/native';

import TweetComponent from '../components/TweetComponent'

const TweetScreen = () => {

  const navigation = useNavigation();
  const route = useRoute();

  const { profileImage, user, text, isImage, image, createdAt, id } = route.params.tweet;

  return (<ScrollView style={styles.rootContainer}>
    <View style={styles.container}>

      <View style={{ flexDirection: 'row', }}>
        <Image source={{ uri: profileImage }} style={styles.image} />

        <Pressable onPress={() => navigation.navigate('Profile', { profileData: route.params.tweet })}
          style={{ flexDirection: 'column', marginHorizontal: 10, }}
        >
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.usrName}>{user.username}</Text>
        </Pressable>
        <Entypo name="dots-three-horizontal" size={18} color="#ccc"
          style={{ paddingLeft: 160, paddingTop: 10 }} />
      </View>

      <Text style={styles.tweetMsg}>{text}</Text>

      <Image source={{ uri: image }} style={styles.tweetImage} />

      <Text style={styles.tweetCreated}>12:30 AM • 01/05/23 from Earth • 391K Views</Text>
      <View style={styles.line} />

      <Text style={styles.tweetCreated}>1.048 Retweets 187 Ouotes 13 2K Likes 86 Bookmarks</Text>
      <View style={styles.line} />

      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 10, }}>
        <Feather name="message-circle" size={20} color="#72757A" />
        <EvilIcons name="retweet" size={29} color="#72757A" />
        <Feather name="heart" size={18} color="#72757A" style={{ paddingTop: 2 }} />
        <Feather name="bookmark" size={20} color="#72757A" />
        <Feather name="upload" size={18} color="#72757A" />
      </View>
      <View style={[styles.line, { marginTop: 1, }]} />

      {
        id === 'm3' && <FlatList
          data={comments}
          renderItem={({ item }) => <TweetComponent {...item} />}
          scrollEnabled={false}
        />
      }
    </View>
  </ScrollView>
  )
}

export default TweetScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    margin: 18,
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  usrName: {
    fontSize: 17,
  },
  tweetMsg: {
    paddingVertical: 15,
  },
  tweetImage: {
    width: '100%',
    height: 313,
    borderRadius: 10,
  },
  tweetCreated: {
    paddingVertical: 15,
    color: '#72757A'
  },
  line: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
    width: '100%',

  },
})