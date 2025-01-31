const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

// Define additional node module lookup directories
const extraNodeModules = {
  'react-native-math': path.resolve(__dirname, '../react-native-math'),
};

// Watch additional folders to ensure they are included in Metro bundling
const watchFolders = [path.resolve(__dirname, '../react-native-math')];

const customConfig = {
  resolver: {
    extraNodeModules,
  },
  watchFolders,
};

module.exports = mergeConfig(getDefaultConfig(__dirname), customConfig);
