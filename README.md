# GameZone App

## Following Guide from The Net Ninja on YouTube

https://www.youtube.com/playlist?list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ

## Notes for React Native 0.64.3

- For Drawer Navigator

  - Prior to adding code for components:
  - yarn add @react-navigation/drawer
  - expo install react-native-gesture-handler react-native-reanimated
  - Make sure that babel.config.js has the react-native-reanimated/plugin as such:
    > module.exports = function (api) {
        api.cache(true);
        return {
        presets: ['babel-preset-expo'],
        plugins: ['react-native-reanimated/plugin'],
        };
        };

* import 'react-native-gesture-handler'; must be the first import on App.js

  [Drawer Navigation Troubleshooting on StackOverflow](https://stackoverflow.com/questions/70516450/error-requiring-module-node-modules-react-native-reanimated-src-animated-js 'The best search engine for privacy').
