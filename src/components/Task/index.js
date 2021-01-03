// components/Task.js
import * as React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {styles} from './styles';

export default function Task({
  task: {id, title, state},
  onArchiveTask,
  onPinTask,
}) {
  return (
    <SafeAreaView style={styles.ListItem}>
      <View style={styles.TaskBox}>
        <TouchableOpacity onPress={() => onArchiveTask(id)}>
          {state !== 'TASK_ARCHIVED' ? (
            <View style={styles.CheckBox} />
          ) : (
            <View style={styles.CheckBox} />
          )}
        </TouchableOpacity>
        {title?.length > 0 && (
          <TextInput style={styles.Title} value={title} editable={false} />
        )}
      </View>
      <View style={styles.PinBox}>
        <TouchableOpacity onPress={() => onArchiveTask(id)}>
          {state !== 'TASK_ARCHIVED' ? (
            <View style={styles.CheckBox} />
          ) : (
            <View style={styles.CheckBox} />
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
