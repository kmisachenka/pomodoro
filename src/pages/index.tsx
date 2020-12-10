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
import React, { useRef, useState } from 'react';

import Header from '../components/header';
import useTitle from '../hooks/use-title';
import { useTranslation } from '../i18n';

function padTime(time) {
  return time.toString().padStart(2, '0');
}

const INITIAL_TIME_LEFT = 25 * 60;

const IndexPage: NextPage = () => {
  const { t } = useTranslation();

  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME_LEFT);
  const [isRunning, setIsRunning] = useState(false);
  const intervalReference = useRef(null);

  function startTimer() {
    if (intervalReference.current !== null) return;

    setIsRunning(true);
    intervalReference.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft >= 1) return timeLeft - 1;

        resetTimer();
        return 0;
      });
    }, 1000);
  }

  function stopTimer() {
    if (intervalReference.current === null) return;

    clearInterval(intervalReference.current);
    intervalReference.current = null;
    setIsRunning(false);
  }

  function resetTimer() {
    clearInterval(intervalReference.current);
    intervalReference.current = null;
    setTimeLeft(INITIAL_TIME_LEFT);
    setIsRunning(false);
  }

  const circularProgressValue = INITIAL_TIME_LEFT - timeLeft;
  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - minutes * 60);

  const timeLeftPretty = `${minutes}:${seconds}`;

  useTitle(`Pomodoro: ${timeLeftPretty}`);

  const color = useColorModeValue('gray.300', 'gray.400');

  return (
    <React.Fragment>
      <Header />
      <Container maxW="lg" marginTop="3rem" centerContent color="gray.500">
        <Flex direction="column">
          <CircularProgress
            value={circularProgressValue}
            color="red.400"
            trackColor={color}
            size="450px"
            thickness="3px"
            max={INITIAL_TIME_LEFT}
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
              {!isRunning && <Button onClick={startTimer}>{t('start')}</Button>}
              {isRunning && <Button onClick={stopTimer}>{t('stop')}</Button>}
              <Button onClick={resetTimer}>{t('reset')}</Button>
            </Flex>
          </ButtonGroup>
        </Flex>
      </Container>
    </React.Fragment>
  );
};

export default IndexPage;
