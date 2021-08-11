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
            <Text style={styles.availableBloodQuantity}>05</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.availableBloodType}>A- : </Text>
            <Text style={styles.availableBloodQuantity}>15</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.availableBloodType}>B+ : </Text>
            <Text style={styles.availableBloodQuantity}>20</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.availableBloodType}>B- : </Text>
            <Text style={styles.availableBloodQuantity}>16</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.availableBloodType}>O+ : </Text>
            <Text style={styles.availableBloodQuantity}>27</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.availableBloodType}>O- : </Text>
            <Text style={styles.availableBloodQuantity}>13</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.availableBloodType}>AB+ :</Text>
            <Text style={styles.availableBloodQuantity}>07</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.availableBloodType}>AB- :</Text>
            <Text style={styles.availableBloodQuantity}>30</Text>
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
          color="darkgrey"
          style={{marginHorizontal: 20, marginTop: 30}}
        />
      </View>
    </React.Fragment>
  );
};

export default BloodBank;
