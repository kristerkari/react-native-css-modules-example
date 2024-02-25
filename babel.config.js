module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-classname-to-style',
    [
      'react-native-platform-specific-extensions',
      {
        extensions: ['scss', 'css'],
      },
    ],
  ],
};
