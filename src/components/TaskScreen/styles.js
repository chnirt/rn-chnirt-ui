import {StyleSheet} from 'react-native';

import {PRIMARY_COLOR, DISABLED_COLOR} from '../../packages/constants';

export const styles = StyleSheet.create({
  TaskContainer: {
    backgroundColor: PRIMARY_COLOR,
  },
  FlatListContainer: {
    backgroundColor: '#fff',
    margin: 42,
  },
  TitleMessage: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  SubtitleMessage: {
    fontSize: 14,
    marginTop: 5,
  },
  ErrorContainer: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 61 * 6 - 1,
    margin: 42,
  },
});
