const path = require("path");
module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, "src/components/"),
      '@images': path.resolve(__dirname, "src/assets/images/"),
      '@services': path.resolve(__dirname, "src/services/"),
      '@store': path.resolve(__dirname, "src/store/"),
      '@types': path.resolve(__dirname, "src/types/"),
      '@utils': path.resolve(__dirname, "src/utils/"),
      '@views': path.resolve(__dirname, "src/views/"),
    }
  }
}