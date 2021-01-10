// components/Task.js
import * as React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';

import {styles} from './styles';
import {CheckSVG} from './svgs';

export const Task = ({task: {id, title, state}, color, onCheckTask}) => {
  return (
    <SafeAreaView style={styles.TaskContainer}>
      <TouchableOpacity
        style={styles.TaskBox}
        onPress={() => onCheckTask(id)}
        disabled={state === 'TASK_DISABLED'}>
        <View>
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
        </View>
        <Text
          style={[
            styles.Title,
            state === 'TASK_DISABLED' ? styles.TitleWithDisabled : null,
          ]}
          numberOfLines={1}
          ellipsizeMode="tail"
          accessibilityState={{
            selected: state === 'TASK_CHECKED',
            disabled: state === 'TASK_DISABLED',
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
