import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {windowHeight} from '../utils/Dimensions';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const SocialButton = ({buttonTitle, backgroundColor, btnType, color, ...rest}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, {backgroundColor: backgroundColor}]}
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <FontAwesome style={styles.icon} name={btnType} size={22} color={color} />
      </View>
      <View style={styles.btnWrapper}>
        <Text style={[styles.buttonText, {color: color}]}>{buttonTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  btnWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    marginTop: 10,
    height: windowHeight / 15,
    width: '100%',
    backgroundColor: '#2e64e5',
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  icon: {
    fontWeight: 'bold'
  },
  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    padding: 10,
    borderRadius: 3,
    flexDirection: 'row'
  },
});
