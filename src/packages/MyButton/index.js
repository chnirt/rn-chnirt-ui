import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableHighlight} from 'react-native';
import styles from './styles';

export default function MyButton({variantColor, onPress, children}) {
  return (
    <View
      style={[
        styles.buttonContainer,
        variantColor ? {backgroundColor: variantColor} : null,
      ]}>
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
