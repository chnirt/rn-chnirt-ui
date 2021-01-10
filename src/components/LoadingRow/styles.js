import {StyleSheet} from 'react-native';

import {PRIMARY_COLOR, DISABLED_COLOR} from '../../packages/constants';

export const styles = StyleSheet.create({
  LoadingItem: {flexDirection: 'row', padding: 20},
  GlowCheckbox: {
    backgroundColor: DISABLED_COLOR,
    width: 20,
    height: 20,
  },
  GlowText: {
    flex: 1,
    backgroundColor: DISABLED_COLOR,
    marginLeft: 10,
  },
  Divider: {
    borderBottomColor: DISABLED_COLOR,
    borderBottomWidth: 1,
  },
});
