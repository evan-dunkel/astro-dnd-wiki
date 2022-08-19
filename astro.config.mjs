import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue(), preact()],
  site: 'https://evan-dunkel.github.io',
  base: '/astro-dnd-wiki'
});