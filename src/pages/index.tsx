import { Button } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';

import { Link, useTranslation } from '../i18n';

const IndexPage: NextPage = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguageClick = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <div>
      <h1>{t('hello-world')}</h1>
      <Button colorScheme="green" size="lg" onClick={handleChangeLanguageClick}>
        {t('change-language')}
      </Button>
      <Link href="/second-page">
        <Button colorScheme="red" size="lg">
          {t('goto-second-page')}
        </Button>
      </Link>
    </div>
  );
};

export default IndexPage;
