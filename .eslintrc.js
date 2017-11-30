module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
      sourceType: 'module'
    },
    env: {
      browser: true,
    },
    extends: 'airbnb',
    'rules': {
      'semi': 0,
      'arrow-parens': 0,
      'no-new':0,
      'generator-star-spacing': 0,
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
      "no-console": process.env.NODE_ENV === 'production' ? 2 : 0,
      "jsx-a11y/href-no-hash": 0
    },
    "plugins": [
      "jsx-a11y"
    ],
    globals: {
      CodeMirror: true,
    },
  }