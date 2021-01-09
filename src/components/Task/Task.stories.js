// components/Task.stories.js
import * as React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import Task from '.';
export const task = {
  id: '1',
  title: 'Take a coffee',
  state: 'TASK_DEFAULT',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};
storiesOf('Task', module)
  .addDecorator((story) => <View style={styles.TaskBox}>{story()}</View>)
  .add('default', () => (
    <Task task={{...task, state: 'TASK_DEFAULT'}} {...actions} />
  ))
  .add('checked', () => (
    <Task task={{...task, state: 'TASK_CHECKED'}} {...actions} />
  ))
  .add('disabled', () => (
    <Task task={{...task, state: 'TASK_DISABLED'}} {...actions} />
  ));
