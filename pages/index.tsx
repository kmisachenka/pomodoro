import {
  Button,
  ButtonGroup,
  CircularProgress,
  CircularProgressLabel,
  Container,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';
import { useTitle } from 'react-use';

import Header from '@/components/header';
import useTimer from '@/hooks/use-timer';

const IndexPage: NextPage = () => {
  const color = useColorModeValue('gray.300', 'gray.400');

  useTitle('Pomodoro');

  const {
    startTimer,
    stopTimer,
    resetTimer,
    timeHasPassed,
    initialTimeLeft,
    timeLeftPretty,
    isRunning,
  } = useTimer();

  return (
    <React.Fragment>
      <Header />
      <Container maxW="lg" marginTop="3rem" centerContent color="gray.500">
        <Flex direction="column">
          <CircularProgress
            value={timeHasPassed}
            color="red.400"
            trackColor={color}
            size="450px"
            thickness="3px"
            max={initialTimeLeft}
            min={0}
          >
            <CircularProgressLabel
              style={{ fontFamily: 'monospace' }}
              color="gray.500"
            >
              {timeLeftPretty}
            </CircularProgressLabel>
          </CircularProgress>
          <ButtonGroup>
            <Flex width="50%" margin="0 auto" justifyContent="space-around">
              {!isRunning && <Button onClick={startTimer}>Start</Button>}
              {isRunning && <Button onClick={stopTimer}>Stop</Button>}
              <Button onClick={resetTimer}>Reset</Button>
            </Flex>
          </ButtonGroup>
        </Flex>
      </Container>
    </React.Fragment>
  );
};

export default IndexPage;
