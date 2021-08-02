import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../components/App';

export default () => {
  const content = renderToString(<App />);

  return `
    <html>
      <head></head>
      <body style="margin: 0">
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};
