import {action as brokenAction} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {Text} from 'react-native';

import MyButton from '.';
import CenterView from '../CenterView';
import {DANGER_COLOR, SUCCESS_COLOR, PRIMARY_COLOR} from '../constants';

const action = (name, options) => {
  const constructedAction = brokenAction(name, options);
  return (event) => constructedAction(event.persist());
};

storiesOf('Components/MyButton', module)
  // .addParameters({backgrounds: {values: [{name: 'red', value: '#f00'}]}})
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Primary', () => (
    <MyButton variantColor={PRIMARY_COLOR} onPress={action('clicked-text')}>
      <Text>{text('MyButton text', 'Hello MyButton')}</Text>
    </MyButton>
  ))
  .add('Success', () => (
    <MyButton variantColor={SUCCESS_COLOR} onPress={action('clicked-text')}>
      <Text>{text('MyButton text', 'Hello MyButton')}</Text>
    </MyButton>
  ))
  .add('Danger', () => (
    <MyButton variantColor={DANGER_COLOR} onPress={action('clicked-text')}>
      <Text>{text('MyButton text', 'Hello MyButton')}</Text>
    </MyButton>
  ))
  .add('with some emoji', () => (
    <MyButton onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </MyButton>
  ));
