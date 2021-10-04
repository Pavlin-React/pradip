import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';
import FormButton from '../components/FormButton';

const LoginScreen = ({navigation}) => {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image source={require('../assets/pic_1.png')} style={styles.logo} />
      <Text style={styles.text}>RN Social App</Text>
      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />
      <FormButton
        buttonTitle='Sign In'
        onPress={() => alert('sign in is pressed')}
      />
      <TouchableOpacity style={styles.forgotButton} onPress={()=>{}}>
        <Text style={styles.navButtonText} >
          Forgot Password?
        </Text>
      </TouchableOpacity>
      <SocialButton
        buttonTitle='Sign In with Facebook'
        btnType='facebook'
        color='#4867aa'
        backgroundColor='#e6eaf4'
        onPress={() => {}}
      />
      <SocialButton
        buttonTitle='Sign In with Google'
        btnType='google'
        color='#de4d41'
        backgroundColor='#f5e7ea'
        onPress={() => {}}
      />
      <TouchableOpacity style={styles.forgotButton} onPress={()=>navigation.navigate('SignUpScreen')}>
        <Text style={styles.navButtonText} >
          Do not have acount? Create here
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

let styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e64e5',
  },
});
