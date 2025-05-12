import { StrictMode } from 'react';

import 'core-js/es/iterator/to-array';
import { createRoot } from 'react-dom/client';
import shaka from 'shaka-player';

import '@/index.css';
import Router from '@/pages/Router';
import '@/utils/globals/array';
import '@/utils/globals/string';

shaka.polyfill.installAll();

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Router />
  </StrictMode>,
);
