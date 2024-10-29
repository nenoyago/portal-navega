module.exports = {
  ...require('./prettier-custom-config.cjs'),
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindConfig: './tailwind.config.js'
};
