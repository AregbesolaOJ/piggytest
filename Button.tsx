import React, {PropsWithChildren} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

type ButtonProps = {
  onPress: () => void;
};

const Button = ({
  onPress,
  children,
}: PropsWithChildren<ButtonProps>): JSX.Element => (
  <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
    {children}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonStyle: {
    alignSelf: 'center',
    backgroundColor: '#31D9DC',
    width: '40%',
    height: 40,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 6,
  },
});

export default Button;
