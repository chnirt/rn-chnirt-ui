import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableHighlight} from 'react-native';
import styles from './styles';

export default function MyButton({onPress, children}) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableHighlight onPress={onPress}>
        <Text style={styles.buttonText}>{children}</Text>
      </TouchableHighlight>
    </View>
  );
}

MyButton.defaultProps = {
  children: null,
  onPress: () => {},
};

MyButton.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
