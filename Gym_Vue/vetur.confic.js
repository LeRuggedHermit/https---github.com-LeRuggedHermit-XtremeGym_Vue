export default {
  settings: {
    'vetur.validation.template': true,
    'vetur.validation.script': true,
    'vetur.validation.style': true,
    'vetur.format.defaultFormatter.js': 'prettier-eslint',
  },
  projects: [
    {
      root: './',
      globalComponents: ['./src/components/**/*.vue'],
    },
  ],
}
