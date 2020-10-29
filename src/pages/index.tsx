import {
  Box,
  Button,
  Center,
  CircularProgress,
  CircularProgressLabel,
  Flex,
} from '@chakra-ui/core';
import { NextPage } from 'next';
import { CircleIcon } from 'src/components/circle-icon';
import { SettingsModal } from 'src/components/settings-modal';

const IndexPage: NextPage = () => {
  return (
    <Flex marginTop="5rem">
      <Center width="100%">
        <Flex direction="column">
          <Flex justifyContent="flex-end">
            <SettingsModal />
          </Flex>
          <CircularProgress
            value={98}
            color="red.400"
            size="350px"
            thickness="3px"
          >
            <CircularProgressLabel>25:00</CircularProgressLabel>
          </CircularProgress>
          <Flex justifyContent="center" paddingTop="1rem" paddingBottom="2rem">
            <CircleIcon color="red.400" />
            <CircleIcon color="red.400" />
            <CircleIcon color="red.400" />
            <CircleIcon color="red.400" />
            <Box width="20px" />
            <CircleIcon color="red.400" />
            <CircleIcon color="red.400" />
            <CircleIcon color="red.400" />
            <CircleIcon color="red.400" />
            <Box width="20px" />
            <CircleIcon color="red.400" />
            <CircleIcon color="gray.400" />
            <CircleIcon color="gray.400" />
            <CircleIcon color="gray.400" />
          </Flex>
          <Box width="70%" margin="0 auto">
            <Flex justifyContent="space-around">
              <Button>Start</Button>
              <Button>Stop</Button>
              <Button>Reset</Button>
            </Flex>
          </Box>
        </Flex>
      </Center>
    </Flex>
  );
};

export default IndexPage;
