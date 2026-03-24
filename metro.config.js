const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Force Expo to load app/_entry.tsx
config.resolver.mainFields = ["browser", "module", "main"];
config.projectRoot = __dirname;
config.watchFolders = [__dirname];

config.server = {
  ...config.server,
  rewriteRequestUrl: (url) => {
    if (url === "/index.bundle") {
      return "/app/_entry.tsx";
    }
    return url;
  },
};

module.exports = config;
