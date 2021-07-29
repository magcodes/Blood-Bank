import React from 'react';
import {
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/Entypo';
import CustomButton from '../../components/common/CustomButton';

const ContactDetail = () => {
  const [checked, setChecked] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.listHeaderStyle}>
        <Text style={styles.title}>My Details</Text>
      </View>
      <View style={styles.myDetails}>
        <View style={styles.row}>
          <Text style={styles.detailsLabel}>Name: </Text>
          <TextInput
            style={styles.fillInput}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.detailsLabel}>Gender: </Text>
          <TextInput
            style={styles.fillInput}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.detailsLabel}>Blood Group: </Text>
          <TextInput
            style={styles.fillInput}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.detailsLabel}>Email: </Text>
          <TextInput
            style={styles.fillInput}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.detailsLabel}>Contact No.: </Text>
          <TextInput
            style={styles.fillInput}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.detailsLabel}>Address: </Text>
          <TextInput
            style={styles.fillInput}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.detailsLabel}>City: </Text>
          <TextInput
            style={styles.fillInput}
            underlineColorAndroid="transparent"
          />
        </View>
      </View>
      <View style={{...styles.row, alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.checkDonor}
          onPress={() => setChecked(!checked)}>
          {checked && <Icon name="check" color="green" size={16} />}
        </TouchableOpacity>
        <Text style={styles.confirm}>I want to be a Donor!</Text>
      </View>
      <CustomButton
        title="Update"
        color="darkgrey"
        style={{marginHorizontal: 20, marginTop: 20}}
      />
      <CustomButton
        title="Cancel"
        color="darkgrey"
        style={{marginHorizontal: 20, marginTop: 20}}
      />
    </ScrollView>
  );
};

export default ContactDetail;
