// components/Task.stories.js
import * as React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {withKnobs, object} from '@storybook/addon-knobs';
import {addParameters} from '@storybook/react';
import {DocsPage, DocsContainer} from '@storybook/addon-docs/blocks';

import {Task} from '.';

export const task = {
  id: '1',
  title: 'Take a coffee',
  state: 'TASK_DEFAULT',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

// const Red = Template.bind({});
// Red.args = {
//   backgroundColor: '#e00',
// };

export const actions = {
  onCheckTask: action('onCheckTask'),
};

storiesOf('Task', module)
  .addDecorator(withKnobs)
  .addDecorator((Story) => (
    <View style={styles.TaskBox}>
      <Story />
    </View>
  ))
  .add('default', () => (
    <Task
      task={object('task', {...task, state: 'TASK_DEFAULT'})}
      {...actions}
    />
  ))
  .add('checked', () => (
    <Task task={{...task, state: 'TASK_CHECKED'}} {...actions} />
  ))
  .add('disabled', () => (
    <Task task={{...task, state: 'TASK_DISABLED'}} {...actions} />
  ))
  .add('long title', () => (
    <Task
      task={{
        ...task,
        state: 'TASK_DEFAULT',
        title: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      }}
      {...actions}
    />
  ));
