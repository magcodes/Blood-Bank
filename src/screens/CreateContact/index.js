import React from 'react';
import {Text, View, TextInput} from 'react-native';
import {Button, StyleSheet} from 'react-native';
import CustomButton from '../../components/common/CustomButton';
import styles from './styles';

const BloodBank = () => {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <View style={styles.listHeaderStyle}>
          <Text style={styles.title}> Blood Bank </Text>
        </View>
        <View style={styles.myDetails}>
          <View style={styles.row}>
            <Text style={styles.availableBloodType}>A+ : </Text>
            <Text style={styles.availableBloodQuantity}>35</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.availableBloodType}>A- : </Text>
            <Text style={styles.availableBloodQuantity}>35</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.availableBloodType}>B+ : </Text>
            <Text style={styles.availableBloodQuantity}>35</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.availableBloodType}>B- : </Text>
            <Text style={styles.availableBloodQuantity}>35</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.availableBloodType}>O+ : </Text>
            <Text style={styles.availableBloodQuantity}>35</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.availableBloodType}>O- : </Text>
            <Text style={styles.availableBloodQuantity}>35</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.availableBloodType}>AB+ : </Text>
            <Text style={styles.availableBloodQuantity}>35</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.availableBloodType}>AB- : </Text>
            <Text style={styles.availableBloodQuantity}>35</Text>
          </View>
        </View>
        <View style={styles.searchSection}>
          <Text style={styles.searchLabel}>Blood Group:</Text>
          <TextInput
            style={styles.searchInput}
            underlineColorAndroid="transparent"
          />
        </View>
        <CustomButton
          title="Request"
          color="grey"
          style={{marginHorizontal: 20, marginTop: 30}}
        />
      </View>
    </React.Fragment>
  );
};

export default BloodBank;
