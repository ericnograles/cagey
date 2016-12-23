/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';

require('./nic-cage-screaming.mp3');
const Sound = require('react-native-sound');
const window = Dimensions.get('window');

export default class Cagey extends Component {
  playSound = () => {
    let clip = new Sound('nic-cage-screaming.mp3', Sound.MAIN_BUNDLE, (e) => {
      if (e) {
        console.log(e);
      } else {
        console.log('duration', clip.getDuration());
        clip.play();
      }
    });
  };

  render() {
    return (
      <Image style={styles.container} source={require('./assets/nic-cage-crazy.jpg')} resizeMode="cover">
        <View>
          <TouchableOpacity style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: window.width * 0.8,
              padding: 10,
              marginBottom: 20,
              borderWidth: 1,
              borderColor: '#ffffff',
              backgroundColor: 'rgb(151, 6, 41)',
              borderRadius: 64
          }} onPress={this.playSound}>
            <Text style={{
              backgroundColor: 'rgb(151, 6, 41)',
              color: '#ffffff',
              fontWeight: 'bold',
              fontSize: 24
            }}>
              Unlock the Cage
            </Text>
          </TouchableOpacity>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: window.width,
    height: window.height
  },
});

AppRegistry.registerComponent('Cagey', () => Cagey);
