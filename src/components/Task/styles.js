import {StyleSheet} from 'react-native';

import {DISABLED_COLOR, PRIMARY_COLOR} from '../../packages/constants';

export const styles = StyleSheet.create({
  TaskContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  TaskBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  CheckBox: {
    width: 20,
    height: 20,
    borderRadius: 20 / 5,
    borderColor: PRIMARY_COLOR,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CheckBoxWithDisabled: {
    borderColor: DISABLED_COLOR,
  },
  Title: {
    color: PRIMARY_COLOR,
    marginLeft: 10,
  },
  TitleWithDisabled: {
    color: DISABLED_COLOR,
  },
});
