import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {PRIMARY_COLOR} from '../../../packages/constants';

export const CheckSVG = ({
  size = 50,
  width = 50,
  height = 50,
  color = PRIMARY_COLOR,
  ...rest
}) => {
  return (
    <Svg
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? width}
      height={size ?? height}
      viewBox="0 0 24 24">
      <Path
        fill={color}
        d="M19.281 5.281L9 15.563 4.719 11.28 3.28 12.72l5 5 .719.687.719-.687 11-11z"
      />
    </Svg>
  );
};
