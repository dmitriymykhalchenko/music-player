import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text,TouchableOpacity } from 'react-native';
import { Router, Scene,Actions } from 'react-native-router-flux';
import Constants from 'expo-constants';
import HomeScreen from './app/HomeScreen';
import Track2Screen from './app/Track2Screen';
import MaizeScreen from './app/MaizeScreen';
import BlackScreen from './app/BlackScreen';

class TabIcon extends React.Component {
  render() {
    const color = `#${Math.floor(Math.random()* 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`
    return (
      <View style={{backgroundColor: color, width: '100%',borderColor:'black',borderLeftWidth:5,borderTopWidth:5,borderRightWidth:5,borderBottomWidth:5,  height: '100%',justifyContent: 'center'}}>
        <Text style={{color: this.props.selected ? 'pink' :'white', textAlign: 'center', fontSize :20}}>{this.props.title}</Text>
      </View>
    );
  }
}

export default function App () {
  return (
    <Router
       hideNavBar={true}
    >
       <Scene
         key='root'
       >
        <Scene
          hideNavBar={true}
          key="tabbar"
          tabs
          showLabel={false}
          icon={TabIcon}

        >
          <Scene
            icon={TabIcon}
            hideNavBar={false}
            title="1"
            tabBarPosition="bottom"
            headerLayoutPreset={'center'}
            tabBarSelectedItemStyle={{borderRightWidth: 20,borderRightColor: 'green'}}
          >
            <Scene
              title="Title"
              headerLayoutPreset={'center'}
              key="home"
              hideNavBar={false}
              initial
              component={HomeScreen}
            />
            <Scene
              title= 'Track2'
              hideNavBar={false}
              key="Track2"
              component={Track2Screen}
              tabBarSelectedItemStyle={{justifyContent:'center',alignItems:'center'}}

            />


          </Scene>
          <Scene
            headerLayoutPreset={'center'}
            hideNavBar={false}
            title="2"
          >
            <Scene
              title="2"
              hideNavBar={false}
              key="black"
              component={BlackScreen}
            />
          </Scene>

          <Scene
            icon={TabIcon}
            headerLayoutPreset={'center'}
            hideNavBar={false}
            title="3">
            <Scene
              headerLayoutPreset={'center'}
              hideNavBar={false}
              key="Gold"
              component={MaizeScreen}
              />
          </Scene>

          <Scene
            icon={TabIcon}
            headerLayoutPreset={'center'}
            hideNavBar={false}
            title="4">
          <Scene
            icon={TabIcon}
            hideNavBar={false}
            component={MaizeScreen}
            />
          </Scene>
          </Scene>
       </Scene>
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
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
