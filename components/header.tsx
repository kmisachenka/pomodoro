import { Box, Container, Flex } from '@chakra-ui/react';
import React from 'react';

import ToggleColorMode from './toggle-color-mode';

const Header: React.FC = () => {
  return (
    <Box as="header" paddingTop="1rem" color="gray.400">
      <Container maxW="xl">
        <Flex justify="space-between" alignItems="center">
          <ToggleColorMode />
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
