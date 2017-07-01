
const options = {};
const serverConfig = {
      module: {
        loaders: [
          {test: /\.css$/, loader: "style!css"},
          {test: /\.less$/, loader: "style!css!less"},
          {test: /\.tsx?$/, loader: 'ts-loader' }

        ]
      },

      externals: /(ngfactory|ngsummary)/i,
      resolve: {
          extensions: ['.ts', '.tsx', '.js'],

      }
};

module.exports = serverConfig;
