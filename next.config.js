module.exports = {
  images: {
    disableStaticImages: true,
  },

  webpack(config) {
    config.module.rules.push(
      {
        test: /\.(png|jpg|gif|woff|woff2|otf|ttf|svg)$/i,
        use: [
          {
            loader: "url-loader",
          },
        ],
      },
      {
        test: /\.(png|jp?eg|gif|mp3|aif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "static/media/[name].[hash:8].[ext]",
            },
          },
        ],
      }
    );

    return config;
  },
};
