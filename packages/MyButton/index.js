import React from 'react';
import PropTypes from 'prop-types';
import {TouchableHighlight} from 'react-native';

export default function MyButton({onPress, children}) {
  return <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>;
}

MyButton.defaultProps = {
  children: null,
  onPress: () => {},
};

MyButton.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
