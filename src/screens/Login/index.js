import React from 'react';

import {Text, TextInput, View} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';

const Login = () => {
  // const [value, onChangeText] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <Container>
      <Input
        label="Username"
        onChangeText={text => setUsername(text)}
        value={username}
        iconPosition="right"
        // error={'This field is required'}
      />

      <Input
        label="Password"
        onChangeText={setPassword}
        value={password}
        icon={<Text>HIDE</Text>}
        iconPosition="right"
      />

      <CustomButton secondary title="Submit" loading={true} disabled={true} />
      <CustomButton secondary loading title="Click Me" />
      <CustomButton primary title="Submit" loading={true} disabled={true} />
      <CustomButton danger title="Submit" />
    </Container>
  );
};

export default Login;
