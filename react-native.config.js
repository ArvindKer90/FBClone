// module.exports = {
//   project: {
//     ios: {
//       automaticPodsInstallation: true
//     }
//   }
// }

module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./src/assets/fonts/'],
  dependencies: {
    'react-native-vector-icons': {
      platforms: {
        ios: null,
      },
    },
  },
};
