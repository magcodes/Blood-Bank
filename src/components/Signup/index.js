import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';
import {Image} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import {LOGIN} from '../../constants/routeNames';
import styles from './styles';

const RegisterComponent = () => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={require('../../assets/images/loginimage.jpg')}
        style={styles.logoImage}
      />

      <View>
        <Text style={styles.title}>Welcome to Blood Bank</Text>
        <Text style={styles.subTitle}>Create a free account</Text>

        <View style={styles.form}>
          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
            // error={'This field is required'}
          />

          <Input
            label="First Name"
            iconPosition="right"
            placeholder="Enter First name"
            // error={'This field is required'}
          />

          <Input
            label="Last Name"
            iconPosition="right"
            placeholder="Enter Last name"
            // error={'This field is required'}
          />

          <Input
            label="Email"
            iconPosition="right"
            placeholder="Enter Email"
            // error={'This field is required'}
          />

          <Input
            label="Password"
            placeholder="Enter Password"
            icon={<Text>Show</Text>}
            secureTextEntry={true}
            iconPosition="right"
          />

          <CustomButton primary title="Submit" />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
