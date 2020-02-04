import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar
} from 'react-native';
import { Actions,Router, Scene } from 'react-native-router-flux';
import Constants from 'expo-constants';
import {DATA} from './assets/constants'

function Item({ itemss, index }) {
  return (

    <View style={styles.item}>
      <Text
       onPress={() => Actions.Track2({index})}
       style={styles.title}>{itemss.title}</Text>
    </View>
  );
};

export default function HomeScreen () {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor='#303F9F'
        barStyle='dark-content'
      />
      <View style={{flex:1}}>
        <FlatList
          style={{flex: 1, backgroundColor: 'green'}}
          data={DATA}
          renderItem={({ item, index }) =>
            <Item
              index={index}
              itemss={item}
          />
        }
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    flex: 1,
    backgroundColor: 'gray',
  },
  welcome: {
    width:'100%',
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
    color: '#ffffff',
  },

    item: {
      backgroundColor: 'lightblue',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
