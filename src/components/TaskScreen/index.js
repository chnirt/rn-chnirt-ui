import * as React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {useRecoilState} from 'recoil';

import {TaskList} from '../TaskList';
import {styles} from './styles';
import {tasksState} from '../../atoms';
import {CrySVG} from './svgs';

export const TaskScreen = ({error}) => {
  const [tasks, setTasks] = useRecoilState(tasksState);

  const handleCheckTask = (id) => {
    setTasks((prevState) =>
      prevState.map((task) => ({
        ...task,
        state:
          task.id === id
            ? task.state === 'TASK_DEFAULT'
              ? 'TASK_CHECKED'
              : 'TASK_DEFAULT'
            : task.state,
      })),
    );
  };

  if (error) {
    return (
      <SafeAreaView style={styles.TaskContainer}>
        <View style={styles.ErrorContainer}>
          <CrySVG size={64} />
          <Text style={styles.TitleMessage}>Oh no!</Text>
          <Text style={styles.SubtitleMessage}>Something went wrong</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.TaskContainer}>
      <TaskList tasks={tasks} onCheckTask={handleCheckTask} />
    </SafeAreaView>
  );
};
