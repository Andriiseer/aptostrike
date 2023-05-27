import React, { useMemo } from 'react';

import ContextProviders from '@context/ContextProviders';

import '../styles/game-gallery.css'
import '../styles/game-index.css'
import '../styles/style.scss'
import '../styles/style-lp.scss'
import BackgroundImage from '@components/BackgroundImage/BackgroundImage';
import GoogleAnalytics from '@components/GoogleAnalytics/GoogleAnalytics';
import { IS_STAGING } from '../constants';

function MyApp({ Component, pageProps }) {
  const isProduction = useMemo(
      () => process.env.NODE_ENV === "production" && !IS_STAGING,
      [],
  );

  return (
    <>
      {isProduction && <GoogleAnalytics />}
      <ContextProviders>
        <BackgroundImage />
        <Component {...pageProps} />
      </ContextProviders>
    </>
  )
}

export default MyApp
