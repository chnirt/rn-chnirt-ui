import {StyleSheet} from 'react-native';

import {PRIMARY_COLOR} from '../../packages/constants';

export const styles = StyleSheet.create({
  ListItem: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  TaskBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  CheckBox: {
    width: 20,
    height: 20,
    borderRadius: 20 / 5,
    borderColor: PRIMARY_COLOR,
    borderWidth: 1,
  },
  Title: {
    marginLeft: 10,
  },
  PinBox: {},
});
