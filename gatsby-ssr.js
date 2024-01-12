import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStylesServer, ServerStyles } from '@mantine/ssr';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/PretendardVariable.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="pretendard"
    />,
  ]);
}

// optional: you can provide your cache as a first argument in createStylesServer function
const stylesServer = createStylesServer();

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const html = renderToString(bodyComponent);
  setHeadComponents([<ServerStyles html={html} server={stylesServer} />]);

};
