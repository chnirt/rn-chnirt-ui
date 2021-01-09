// components/Task.js
import * as React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';

import {styles} from './styles';
import {CheckSVG} from './svgs';

export default function Task({
  task: {id, title, state},
  color,
  onArchiveTask,
  onPinTask,
}) {
  return (
    <SafeAreaView style={styles.ListItem}>
      <View style={styles.TaskBox}>
        <TouchableOpacity
          onPress={() => onArchiveTask(id)}
          disabled={state === 'TASK_DISABLED'}>
          {
            {
              TASK_DEFAULT: <View style={styles.CheckBox} />,
              TASK_CHECKED: (
                <View style={[styles.CheckBox, {color}]}>
                  <CheckSVG color={color} />
                </View>
              ),
              TASK_DISABLED: (
                <View style={[styles.CheckBox, styles.CheckBoxWithDisabled]} />
              ),
            }[state]
          }
        </TouchableOpacity>
        <Text
          style={[
            styles.Title,
            state === 'TASK_DISABLED' ? styles.TitleWithDisabled : null,
          ]}
          accessibilityState={{
            selected: state === 'TASK_CHECKED',
            disabled: state === 'TASK_DISABLED',
          }}>
          {title}
        </Text>
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
