module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          root: ['./src/'],
          routes: './src/routes',
          types: './src/types',
          pages: './src/pages',
          components: './src/components',
          utils: './src/utils',
          themes: './src/themes',
          layouts: './src/layouts',
          assets: './src/assets',
          locales: './src/locales',
          hooks: './src/hooks',
        },
      },
    ],
  ],
};
