import { Image, ScrollView, StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useRef } from 'react'
import { Animated } from 'react-native'
import data from '../assets/data/tweets.json'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import TweetComponent from '../components/TweetComponent'
import { useRoute } from '@react-navigation/native';

const ProfileScreen = (props) => {

  const route = useRoute();
  const { profileImage, user, text, isImage, image, createdAt, id, coverImage } = route.params.profileData;

  return (
    <ScrollView
      decelerationRate='fast' style={styles.rootContainer}>
      <Image source={{ uri: coverImage }}
        style={styles.image}
      />
      <View style={styles.container}>
        <Image source={{ uri: profileImage }}
          style={styles.profileImage}
        />
        <View style={{ alignItems: 'flex-end' }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.bell}>
              <MaterialCommunityIcons name="bell-plus-outline" size={24} color="black" />
            </View>
            <View style={styles.following}>
              <Text style={{ fontWeight: 'bold' }}>Following</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 50, marginHorizontal: 10, }}>
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.name}>{user.username}</Text>
        <Text style={styles.description}>{user.name}</Text>
        <Text style={styles.follows}><Text style={{ color: '#000', fontWeight: 'bold' }}>100</Text> Following <Text style={{ color: '#000', fontWeight: 'bold' }}> 1.5M </Text> Followers</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ paddingTop: 20, fontSize: 16, fontWeight: 'bold' }}>Tweets</Text>
          <Text style={{ paddingTop: 20, fontSize: 16 }}>Replies</Text>
          <Text style={{ paddingTop: 20, fontSize: 16 }}>Media</Text>
          <Text style={{ paddingTop: 20, fontSize: 16 }}>Likes</Text>
        </View>
        <View style={styles.line} />

        <FlatList
          data={data}
          renderItem={({ item }) => {
            if (item.user.username === user.username) {
              return <TweetComponent {...item} />
            }
          }}
          scrollEnabled={false}
        />
      </View>
    </ScrollView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
    //marginTop: 50,
    //backgroundColor: 'lightpink',
    marginHorizontal: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  profileImage: {
    width: 75,
    height: 75,
    borderRadius: 50,
    position: 'absolute',
    bottom: -40
  },
  userName: {
    fontSize: 27,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 17,
    color: '#72757A'
  },
  description: {
    fontSize: 17,
    color: '#72757A',
    paddingTop: 15,
  },
  follows: {
    fontSize: 17,
    color: '#72757A',
    paddingTop: 15,
  },
  line: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
    width: '100%',
    marginTop: 20,
  },
  following: {
    borderWidth: StyleSheet.hairlineWidth,
    padding: 10,
    borderRadius: 30,
    borderColor: '#72757A',
    position: 'absolute',
    right: 10,
    top: 10
    //margin: 5,
  },
  bell: {
    borderWidth: StyleSheet.hairlineWidth,
    padding: 6,
    borderRadius: 30,
    borderColor: '#72757A',
    position: 'absolute',
    right: 100,
    top: 10
    //margin: 5,
  },
})