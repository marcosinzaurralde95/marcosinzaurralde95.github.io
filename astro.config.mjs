'use strict';

import { defineConfig } from 'astro/config';
import tailwind from '@astro-tailwind/css';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  deployOptions: {
    site: 'https://marcosinzaurralde95.github.io',
  },
});