
const options = {};
const serverConfig = {
      module: {
        loaders: [
          {test: /\.css$/, loader: "style!css"},
          {test: /\.less$/, loader: "style!css!less"},
          {test: /\.ts?$/, loader: 'ts-loader' },
          
        ]
      },

      externals: /(ngfactory|ngsummary)/i,
      resolve: {
          extensions: ['.ts', '.tsx', '.js'],

      },
      node:{ 
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
    }
};

module.exports = serverConfig;
