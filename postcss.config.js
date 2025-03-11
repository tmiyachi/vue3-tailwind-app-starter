import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/**
 * @type {import('postcss-load-config').Config}
 * @see https://github.com/postcss/postcss
 */
export default {
  plugins: [tailwindcss, autoprefixer],
};
