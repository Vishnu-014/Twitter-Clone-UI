import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { Feather, FontAwesome, AntDesign, EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import data from '../assets/data/tweets.json'

const TweetComponent = (props) => {

  const navigation = useNavigation();

  //console.log(props);
  const { profileImage, user, text, isImage, image, createdAt } = props;


  const tweetHandler = () => {
    navigation.navigate('Tweet', { tweet: props })
  }

  return (
    <>
      <View>
        <View style={styles.outerTweet}>

          <View style={styles.leftTweetComp}>
            {/* Profile Image */}
            <Image source={{ uri: profileImage }}
              style={styles.imgProfile} />
          </View>

          <View style={styles.rightTweetComp}>
            <Pressable onPress={tweetHandler}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.tweetUsername}>{user.name}</Text>
                <Text style={styles.usrName}>{user.username}</Text>
                <Text style={styles.createdAt}> · {createdAt}</Text>
              </View>
              <Text style={styles.tweetMsg}>{text}</Text>
            </Pressable>
            {isImage === 'true' &&
              <Pressable onPress={() => navigation.navigate('Image', { image: image })}>
                <Image source={{ uri: image }} style={styles.imgTweet} />
              </Pressable>
            }

            {/* Icons */}
            <View style={styles.bottomIcons}>
              <View style={{ flexDirection: 'row' }}>
                <Feather name="message-circle" size={20} color="#72757A" />
                <Text style={{ paddingTop: 3, paddingLeft: 3, color: '#72757A' }}>304</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <EvilIcons name="retweet" size={29} color="#72757A" />
                <Text style={{ paddingTop: 4, paddingLeft: 3, color: '#72757A' }}>50K</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Feather name="heart" size={18} color="#72757A" style={{ paddingTop: 2 }} />
                <Text style={{ paddingTop: 4, paddingLeft: 3, color: '#72757A' }}>100K</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Feather name="bar-chart-2" size={20} color="#72757A" />
                <Text style={{ paddingTop: 4, paddingLeft: 3, color: '#72757A' }}>6M</Text>
              </View>
              <View>
                <Feather name="upload" size={18} color="#72757A" />
              </View>


            </View>
          </View>

        </View >
        <View style={styles.line} />
      </View>
    </>
  )
}

export default TweetComponent

const styles = StyleSheet.create({
  line: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
    width: '100%',
    marginTop: -10,
  },
  outerTweet: {
    flexDirection: 'row',
    //backgroundColor: '#ccc',
    marginVertical: 10,
    marginHorizontal: 15,
  },
  leftTweetComp: {
    //backgroundColor: '#23a',
    paddingVertical: 18,
  },
  imgProfile: {
    width: 60,
    height: 60,
    borderRadius: 70,
  },
  rightTweetComp: {
    //backgroundColor: '#ff22',
    marginHorizontal: 10,
    width: 313,
    marginVertical: 10,
    //marginHorizontal: 15,
    //paddingHorizontal: 5,
  },
  imgTweet: {
    width: 313,
    height: 313,
    borderRadius: 15,
  },
  tweetUsername: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingVertical: 5,
  },
  tweetMsg: {
    paddingBottom: 10,
    fontSize: 16,
  },
  usrName: {
    fontSize: 18,
    paddingTop: 5,
    paddingLeft: 5,
  },
  createdAt: {
    fontSize: 18,
    paddingTop: 5,
    paddingLeft: 5,
  },
  bottomIcons: {
    //backgroundColor: 'red',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
