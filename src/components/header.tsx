import { Box, Container, Flex } from '@chakra-ui/react';
import React from 'react';

import Settings from './settings';
import { ToggleColorMode } from './toggle-color-mode';

export default function Header() {
  return (
    <Box as="header" paddingTop="1rem" color="gray.400">
      <Container maxW="xl">
        <Flex justify="space-between" alignItems="center">
          <ToggleColorMode />
          <Settings />
        </Flex>
      </Container>
    </Box>
  );
}
