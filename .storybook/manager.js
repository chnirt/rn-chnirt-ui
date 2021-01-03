import {addons} from '@storybook/addons';
import {themes} from '@storybook/theming';

addons.setConfig({
  theme: themes.dark,
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  sidebarAnimations: true,
  enableShortcuts: true,
  isToolshown: true,
  theme: undefined,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  showRoots: false,
});
