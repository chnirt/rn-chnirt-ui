import {action as brokenAction} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {Text} from 'react-native';
import MyButton from '.';
import CenterView from '../CenterView';

const action: typeof brokenAction = (name, options) => {
  const constructedAction = brokenAction(name, options);
  return (event) => constructedAction(event.persist());
};

storiesOf('MyButton', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <MyButton onPress={action('clicked-text')}>
      <Text>{text('MyButton text', 'Hello MyButton')}</Text>
    </MyButton>
  ))
  .add('with some emoji', () => (
    <MyButton onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </MyButton>
  ));
