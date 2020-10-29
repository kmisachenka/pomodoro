import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  useDisclosure,
} from '@chakra-ui/core';
import { SettingsIcon } from '@chakra-ui/icons';
import { Field, Form, Formik } from 'formik';

export const SettingsModal = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        aria-label="Settings"
        size="sm"
        onClick={onOpen}
        icon={<SettingsIcon />}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Settings</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SettingsForm />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

function SettingsForm() {
  // function validateName(value) {
  //   let error;
  //   if (!value) {
  //     error = 'Name is required';
  //   } else if (value !== 'Naruto') {
  //     error = "Jeez! You're not a fan 😱";
  //   }
  //   return error;
  // }

  return (
    <Formik
      initialValues={{
        targetPomodorosPerDay: '12',
        pomodoroLength: '25 minutes',
        shortBreakLength: '5 minutes',
        longBreakLength: '15 minutes',
        longBreakDelay: '4 pomodoros',
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {() => (
        <Form>
          <Stack spacing={5}>
            <Field name="targetPomodorosPerDay">
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    form.errors.targetPomodorosPerDay &&
                    form.touched.targetPomodorosPerDay
                  }
                >
                  <FormLabel htmlFor="targetPomodorosPerDay">
                    Tartget Pomodoros Per Day
                  </FormLabel>
                  <Select {...field} id="targetPomodorosPerDay">
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                  </Select>

                  <FormErrorMessage>
                    {form.errors.pomodoroLength}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="pomodoroLength">
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    form.errors.pomodoroLength && form.touched.pomodoroLength
                  }
                >
                  <FormLabel htmlFor="pomodoroLength">
                    Pomodoro Length
                  </FormLabel>
                  <Select {...field} id="pomodoroLength">
                    <option>20 minutes</option>
                    <option>25 minutes</option>
                    <option>30 minutes</option>
                    <option>35 minutes</option>
                    <option>40 minutes</option>
                  </Select>

                  <FormErrorMessage>
                    {form.errors.pomodoroLength}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="shortBreakLength">
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    form.errors.shortBreakLength &&
                    form.touched.shortBreakLength
                  }
                >
                  <FormLabel htmlFor="shortBreakLength">
                    Short Break Length
                  </FormLabel>
                  <Select {...field} id="shortBreakLength">
                    <option>5 minutes</option>
                    <option>10 minutes</option>
                    <option>15 minutes</option>
                  </Select>

                  <FormErrorMessage>
                    {form.errors.shortBreakLength}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="longBreakLength">
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    form.errors.longBreakLength && form.touched.longBreakLength
                  }
                >
                  <FormLabel htmlFor="longBreakLength">
                    Long Break Length
                  </FormLabel>
                  <Select {...field} id="longBreakLength">
                    <option>15 minutes</option>
                    <option>20 minutes</option>
                    <option>25 minutes</option>
                    <option>30 minutes</option>
                  </Select>

                  <FormErrorMessage>
                    {form.errors.longBreakLength}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="longBreakDelay">
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    form.errors.longBreakDelay && form.touched.longBreakDelay
                  }
                >
                  <FormLabel htmlFor="longBreakDelay">
                    Long Break Delay
                  </FormLabel>
                  <Select {...field} id="longBreakDelay">
                    <option>3 pomodoros</option>
                    <option>4 pomodoros</option>
                    <option>5 pomodoros</option>
                    <option>6 pomodoros</option>
                  </Select>

                  <FormErrorMessage>
                    {form.errors.longBreakDelay}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}
