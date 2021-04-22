import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';
import React from 'react';

const ToggleColorMode: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const Icon = colorMode === 'light' ? MoonIcon : SunIcon;

  return (
    <IconButton
      color="gray.400"
      variant="ghost"
      aria-label="Toggle Color Mode"
      icon={<Icon />}
      onClick={toggleColorMode}
    />
  );
};

export default ToggleColorMode;
