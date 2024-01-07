module.exports = {
  // ... other webpack configurations

  module: {
    rules: [
      // ... other rules

      {
        test: /\.(glb|gltf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "gear.glb",
              outputPath: "gear/textures/gear.glb", // Adjust the output path as needed
            },
          },
        ],
      },
    ],
  },
};
