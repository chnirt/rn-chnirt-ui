import * as React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {storiesOf} from '@storybook/react-native';
import {task, actions} from '../Task/Task.stories';
import {TaskList} from '.';

export const defaultTasks = [
  {...task, id: '1', title: 'Task 1'},
  {...task, id: '2', title: 'Task 2'},
  {...task, id: '3', title: 'Task 3'},
  {...task, id: '4', title: 'Task 4'},
  {...task, id: '5', title: 'Task 5'},
  {...task, id: '6', title: 'Task 6'},
];
export const withCheckedTasks = [
  ...defaultTasks.slice(0, 5),
  {id: '6', title: 'Task 6 (checked)', state: 'TASK_CHECKED'},
];

storiesOf('TaskList', module)
  .addDecorator((story) => (
    <View style={[styles.TaskBox, styles.TaskListBox]}>{story()}</View>
  ))
  .add('default', () => <TaskList tasks={defaultTasks} {...actions} />)
  .add('withCheckedTasks', () => (
    <TaskList tasks={withCheckedTasks} {...actions} />
  ))
  .add('loading', () => <TaskList loading tasks={[]} {...actions} />)
  .add('empty', () => <TaskList tasks={[]} {...actions} />);
