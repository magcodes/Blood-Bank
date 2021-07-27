import React, {useState} from 'react';
import {Text, TouchableOpacity, Modal, View} from 'react-native';
import styles from '../styles';

const DonorItem = ({donor, onPress}) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.donorListItem}
        activeOpacity={0.7}
        onPress={onPress}>
        <Text style={styles.donorListItemText}>
          {`${donor.name.title} ${donor.name.first} ${donor.name.last}`}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DonorItem;
