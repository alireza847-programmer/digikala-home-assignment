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
          // themes: './src/themes',
          // utils: './src/utils',
          // pages: './src/pages',
          // assets: './src/assets',
          // layouts: './src/layouts',
          // stories: './src/stories',
        },
      },
    ],
  ],
};
