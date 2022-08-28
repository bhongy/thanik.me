import compress from "astro-compress";
import react from '@astrojs/react';

export default {
  integrations: [
    compress({
      css: false,
      js: false,
    }),
    react(),
  ],
}
