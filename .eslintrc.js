module.exports = {
  'extends': [
    'react-app',
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/react'
  ],
  'plugins': [
    'jsx-a11y',
    'prettier'
  ],
  'rules': {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'semi': ['error', 'always'],
    'eol-last': ['error', 'always'],
    'no-trailing-spaces': 'error',
    'import/prefer-default-export': 0,
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'react/button-has-type': 0,
    'no-multi-spaces': 'error',
    'react/state-in-constructor': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'import/order': 0
  },
  'settings': {
    'import/resolver': {
      'node': {
        'paths': ['src']
      }
    }
  }
};
