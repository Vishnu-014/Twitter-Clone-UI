import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeHeader = () => {
  return (
    <>
      <View style={styles.header}>
        <Pressable>
          <Text style={{ paddingHorizontal: 90, fontWeight: 'bold', fontSize: 17 }}>For You</Text>
        </Pressable>
        <Pressable>
          <Text style={{ fontWeight: 'bold', fontSize: 17, paddingHorizontal: 30, }}>Following</Text>
        </Pressable>
      </View>
      <View style={styles.line} />
    </>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
  line: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
    width: '100%'
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    alignItems: 'center',
    //backgroundColor: 'red',
    //justifyContent: 'center',
    //paddingHorizontal: 100,
  }
})