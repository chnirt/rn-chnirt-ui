// components/TaskList.js
import * as React from 'react';
import {FlatList, View, Text, SafeAreaView} from 'react-native';

import {Task} from '../Task';
import {styles} from './styles';
import {LoadingRow} from '../LoadingRow';
import {CheckSVG} from './svgs';

export const TaskList = ({loading, tasks, onCheckTask}) => {
  const events = {
    onCheckTask,
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.TaskContainer}>
        <View style={styles.FlatListContainer}>
          {Array.from(Array(6).keys()).map((index) => (
            <LoadingRow index={index} length={6} />
          ))}
        </View>
      </SafeAreaView>
    );
  }

  const Divider = () => <View style={styles.Divider} />;

  const Empty = () => (
    <View style={styles.EmptyContainer}>
      <CheckSVG size={64} />
      <Text style={styles.TitleMessage}>You have no tasks</Text>
      <Text style={styles.SubtitleMessage}>Sit back and relax</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.TaskContainer}>
      <FlatList
        contentContainerStyle={styles.FlatListContainer}
        data={tasks}
        keyExtractor={(task) => `${task.id}`}
        renderItem={({item}) => {
          return (
            <View key={item?.id} style={styles.TaskItem}>
              <Task task={item} {...events} />
            </View>
          );
        }}
        ItemSeparatorComponent={Divider}
        ListEmptyComponent={<Empty />}
      />
    </SafeAreaView>
  );
};

export default TaskList;
