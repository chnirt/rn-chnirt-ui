import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

import {PRIMARY_COLOR} from '../../../packages/constants';

export const CrySVG = ({color = PRIMARY_COLOR, size = 50, ...rest}) => {
  return (
    <Svg
      width={size}
      height={size}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50">
      <Path
        fill={color}
        d="M25 2C12.309 2 2 12.309 2 25s10.309 23 23 23 23-10.309 23-23C48 12.363 37.775 2.103 25.158 2.016A1 1 0 0025 2zm0 2c11.61 0 21 9.39 21 21s-9.39 21-21 21S4 36.61 4 25 13.39 4 25 4zm-8 14a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3zm16 0a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3zm-8 11c-6.444 0-10.707 4.293-10.707 4.293a1 1 0 101.414 1.414S19.444 31 25 31c5.556 0 9.293 3.707 9.293 3.707a1 1 0 101.414-1.414S31.444 29 25 29z"
      />
    </Svg>
  );
};
