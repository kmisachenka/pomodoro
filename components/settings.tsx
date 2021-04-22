import { SettingsIcon } from '@chakra-ui/icons';
import {
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { i18n, useTranslation } from 'next-i18next';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocalStorage } from 'react-use';

const Settings: React.FC = () => {
  const { t } = useTranslation();

  const [language, setLanguage] = useLocalStorage<string>(
    'settings.language',
    'en'
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handleSubmit, register, formState } = useForm();

  const handleSettingsSave = (settings) => {
    const { language } = settings;
    i18n.changeLanguage(language);
    setLanguage(language);
    onClose();
  };

  return (
    <>
      <IconButton
        color="gray.400"
        variant="ghost"
        onClick={onOpen}
        aria-label="Settings"
        icon={<SettingsIcon />}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          as="form"
          onSubmit={handleSubmit(handleSettingsSave)}
          aria-label={'Settings Modal'}
        >
          <ModalHeader>{t('settings.heading')}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl as="fieldset" marginBottom="1rem">
              <FormLabel as="legend">{t('settings.language')}</FormLabel>
              <RadioGroup name="language" defaultValue={language}>
                <Stack spacing={4} direction="row">
                  <Radio value="en" ref={register}>
                    English
                  </Radio>
                  <Radio value="ru" ref={register}>
                    Русский
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              isLoading={formState.isSubmitting}
              type="submit"
            >
              {t('settings.save')}
            </Button>
            <Button variant="ghost" onClick={onClose}>
              {t('settings.close')}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Settings;
