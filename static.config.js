const path = require('path');

export default {
  plugins: [
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-styled-components'),
    [
      require.resolve('react-static-plugin-favicons'),
      { inputFile: path.resolve(__dirname, 'public/sati_green.png') },
    ],
  ],
}
