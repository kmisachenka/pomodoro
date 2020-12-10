import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';

export function ToggleColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  const Icon = colorMode === 'light' ? MoonIcon : SunIcon;

  return (
    <IconButton
      color="gray.400"
      variant="ghost"
      aria-label="Settings"
      icon={<Icon />}
      onClick={toggleColorMode}
    />
  );
}
