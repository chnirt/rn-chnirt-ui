// components/PureInboxScreen.stories.js
import * as React from 'react';
import {storiesOf} from '@storybook/react-native';
import {RecoilRoot} from 'recoil';

import {TaskScreen} from '.';

storiesOf('TaskScreen', module)
  .addDecorator((story) => <RecoilRoot>{story()}</RecoilRoot>)
  .add('default', () => <TaskScreen />)
  .add('error', () => <TaskScreen error="Something" />);
