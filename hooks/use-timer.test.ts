import { act, renderHook } from '@testing-library/react-hooks';

import useTimer, { UseTimer } from './use-timer';

beforeAll(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.clearAllTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

describe('useTimer', () => {
  it('should be defined', () => {
    expect(useTimer).toBeDefined();
  });

  it('should return hook api', () => {
    const hook = renderHook<null, UseTimer>(() => useTimer());
    const controls = hook.result.current;

    expect(controls).toStrictEqual({
      startTimer: expect.any(Function),
      stopTimer: expect.any(Function),
      resetTimer: expect.any(Function),
      isRunning: expect.any(Boolean),
      timeHasPassed: expect.any(Number),
      timeLeftPretty: expect.any(String),
      initialTimeLeft: expect.any(Number),
    });
  });

  it('should have not running by default', () => {
    const hook = renderHook<null, UseTimer>(() => useTimer());
    const isRunning = hook.result.current.isRunning;

    expect(isRunning).toBeFalsy();
  });

  it('should have 25:00 on timer by default', () => {
    const hook = renderHook<null, UseTimer>(() => useTimer());
    const { timeLeftPretty, initialTimeLeft } = hook.result.current;

    expect(initialTimeLeft).toBe(25 * 60);
    expect(timeLeftPretty).toBe('25:00');
  });

  it('should have zero time passed by default', () => {
    const hook = renderHook<null, UseTimer>(() => useTimer());
    const { timeHasPassed } = hook.result.current;

    expect(timeHasPassed).toBe(0);
  });

  it('should have running state when timer started', () => {
    const { result, rerender, unmount } = renderHook<null, UseTimer>(() =>
      useTimer()
    );

    act(() => {
      result.current.startTimer();
    });

    rerender();

    expect(result.current.isRunning).toBeTruthy();

    unmount();
  });

  it('should able to start timer', () => {
    const { result, rerender, unmount } = renderHook<null, UseTimer>(() =>
      useTimer()
    );

    act(() => {
      result.current.startTimer();
      jest.advanceTimersByTime(1000);
    });

    rerender();

    expect(result.current.timeHasPassed).toBe(1);
    expect(result.current.timeLeftPretty).toBe('24:59');

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    rerender();

    expect(result.current.timeHasPassed).toBe(2);
    expect(result.current.timeLeftPretty).toBe('24:58');

    unmount();
  });

  it('should able to start timer with custom initial time left', () => {
    const hook = renderHook<number, UseTimer>((props) => useTimer(props), {
      initialProps: 12 * 60,
    });
    const { timeLeftPretty, initialTimeLeft } = hook.result.current;

    expect(initialTimeLeft).toBe(12 * 60);
    expect(timeLeftPretty).toBe('12:00');
  });

  it('should able to stop timer', () => {
    const { result, rerender } = renderHook<null, UseTimer>(() => useTimer());

    act(() => {
      result.current.startTimer();
      jest.advanceTimersByTime(1000);
    });

    rerender();

    expect(result.current.timeHasPassed).toBe(1);
    expect(result.current.timeLeftPretty).toBe('24:59');

    act(() => {
      result.current.stopTimer();
      jest.advanceTimersByTime(1000);
    });

    rerender();

    expect(result.current.timeHasPassed).toBe(1);
    expect(result.current.timeLeftPretty).toBe('24:59');
  });

  it('should able to start a stopped timer', () => {
    const { result, rerender } = renderHook<null, UseTimer>(() => useTimer());

    act(() => {
      result.current.startTimer();
      jest.advanceTimersByTime(1000);
    });

    rerender();

    expect(result.current.timeHasPassed).toBe(1);
    expect(result.current.timeLeftPretty).toBe('24:59');

    act(() => {
      result.current.stopTimer();
      jest.advanceTimersByTime(1000);
    });

    rerender();

    expect(result.current.timeHasPassed).toBe(1);
    expect(result.current.timeLeftPretty).toBe('24:59');

    act(() => {
      result.current.startTimer();
      jest.advanceTimersByTime(1000);
    });

    rerender();

    expect(result.current.timeHasPassed).toBe(2);
    expect(result.current.timeLeftPretty).toBe('24:58');
  });

  it('should able to reset timer', () => {
    const { result, rerender } = renderHook<null, UseTimer>(() => useTimer());

    act(() => {
      result.current.startTimer();
      jest.advanceTimersByTime(1000);
    });

    rerender();

    expect(result.current.timeHasPassed).toBe(1);
    expect(result.current.timeLeftPretty).toBe('24:59');

    act(() => {
      result.current.resetTimer();
    });

    rerender();

    expect(result.current.timeHasPassed).toBe(0);
    expect(result.current.timeLeftPretty).toBe('25:00');
  });

  it('sholud reset timer when countdown ends', () => {
    const { result, rerender } = renderHook<null, UseTimer>(() => useTimer());

    act(() => {
      result.current.startTimer();
      jest.advanceTimersToNextTimer(25 * 60 + 1);
    });

    rerender();

    expect(result.current.isRunning).toBeFalsy();
    expect(result.current.timeHasPassed).toBe(0);
    expect(result.current.timeLeftPretty).toBe('25:00');
  });
});
