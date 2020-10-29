import { Icon } from '@chakra-ui/core';

interface CircleIconProps {
  color: string;
}

export const CircleIcon = (props: CircleIconProps): JSX.Element => (
  <Icon viewBox="0 0 200 200" color={props.color}>
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
);
