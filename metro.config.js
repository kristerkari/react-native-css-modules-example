const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const {sourceExts} = defaultConfig.resolver;

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve('./rn-transformer.js'),
  },
  resolver: {
    sourceExts: [...sourceExts, 'scss', 'css'],
  },
};

module.exports = mergeConfig(defaultConfig, config);
