import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  return (
    <View style={styles.container}>
        <Spacer>
            <Text h3>Sign Up for tracker </Text>
        </Spacer>

        <Input label="Email"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={(newEmail) => setEmail(newEmail)}
        />
        <Spacer />
        <Input label="Password" 
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={(newPassword) => setPassword(newPassword)}/>
        <Spacer>
            <Button title="Sign Up" />
        </Spacer>

    </View>
  );
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}
const styles = StyleSheet.create({
    container : {
        // flex: 1,
        // justifyContent: "center",
        // marginBottom: 250
        marginTop: 200
    }
});

export default SignupScreen;
