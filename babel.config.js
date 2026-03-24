module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"], // or '@babel/preset-env' etc.
    plugins: [
      // other plugins...
      "react-native-reanimated/plugin", // <-- MUST be last
    ],
  };
};
