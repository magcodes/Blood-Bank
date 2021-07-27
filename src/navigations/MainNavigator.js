import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeNavigator from './HomeNavigator';
import {HOME_NAVIGATOR} from '../constants/routeNames';
import {Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {useState} from 'react';

const Main = createStackNavigator();

const MainNavigator = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Main.Navigator>
        <Main.Screen
          name={HOME_NAVIGATOR}
          component={HomeNavigator}
          options={{
            headerStyle: {backgroundColor: '#000'},
            headerTitleStyle: {color: 'white', fontWeight: 'bold'},
            headerRight: () => (
              // <Button
              //   onPress={() => alert('This is a button!')}
              //   title="Info"
              //   color="#fff"
              // />
              // const myButton = (
              <Icon.Button
                name="dots-three-vertical"
                backgroundColor="#000"
                onPress={() => setShowModal(!showModal)}
              />
            ),
          }}
        />
      </Main.Navigator>
      {showModal && (
        <View style={styles.modal}>
          <TouchableOpacity activeOpacity={0.5} style={styles.modalItem}>
            <Text style={styles.textColor}> Setting</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} style={styles.modalItem}>
            <Text style={styles.textColor}> Logout </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({
  modal: {
    padding: 10,
    backgroundColor: '#000',
    position: 'absolute',
    top: 5,
    right: 0,
    marginTop: 50,
    alignSelf: 'flex-end',
    elevation: 2,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    minWidth: 150,
  },
  modalItem: {
    paddingVertical: 10,
  },
  textColor: {
    color: '#fff',
  },
});
