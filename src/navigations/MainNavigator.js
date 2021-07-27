import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeNavigator from './HomeNavigator';
import {HOME_NAVIGATOR} from '../constants/routeNames';
import {Button, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
// import { IconButton, Colors } from 'react-native-paper';

const Main = createStackNavigator();

const MainNavigator = () => {
  return (
    <Main.Navigator>
      <Main.Screen
        name={HOME_NAVIGATOR}
        component={HomeNavigator}
        options={{
          headerStyle: {backgroundColor: '#000'},
          headerTitleStyle: {color: 'white', fontWeight: 'bold'},
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
        }}
      />
    </Main.Navigator>
  );
};

export default MainNavigator;
