import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const ImageView = () => {

  const route = useRoute();
  return (
    <View style={styles.container}>
      <Image source={{ uri: route.params.image }} style={styles.image} />
    </View>
  )
}

export default ImageView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 250
  }
})