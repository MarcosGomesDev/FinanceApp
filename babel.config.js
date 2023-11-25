module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        alias: {
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@types': './src/types',
          '@styles': './src/styles',
          '@assets': './src/assets',
          '@routes': './src/routes',
          '@config': './src/config',
          '@contexts': './src/contexts',
          '@screens': './src/screens',
          '@services': './src/services',
          '@components': './src/components',
          '@interfaces': './src/interfaces',
          '@themes': './src/themes',
          '@schemas': './src/schemas',
        },
      },
    ],
  ],
};
