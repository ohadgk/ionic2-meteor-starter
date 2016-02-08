var path = require('path');


module.exports = {
  entry: [
    path.normalize('es6-shim/es6-shim.min'),
    'reflect-metadata',
    'web-animations.min',
   // 'ionic2-meteor',
    path.normalize('zone.js/dist/zone-microtask'),
    path.resolve('app/app')
  ],
  output: {
    path: path.resolve('www/build/js'),
    filename: 'app.bundle.js',
    pathinfo: false // show module paths in the bundle, handy for debugging
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript',
        //loader: 'ts-loader',
        query: {
          'doTypeCheck': true,
        //   'ignoreDiagnostics': [
        //                 2403, // 2403 -> Subsequent variable declarations
        //                 2300, // 2300 -> Duplicate identifier
        //                 2374, // 2374 -> Duplicate number index signature
        //                 2375  // 2375 -> Duplicate string index signature
        //             ]

        },
        include: [
            path.resolve('app'),
           // path.resolve('node_modules/ionic2-meteor'),
            ],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        include: [
            path.resolve('node_modules/angular2'),
           // path.resolve('node_modules/ionic2-meteor'),
            ],
        loader: 'strip-sourcemap'
      }
    ],
    noParse: [
      /es6-shim/,
      /reflect-metadata/,
      /web-animations/,
      /zone\.js(\/|\\)dist(\/|\\)zone-microtask/
    ]
  },
  resolve: {
    alias: {
      'web-animations.min': path.normalize('ionic-framework/js/web-animations.min'),
  //     'ionic2-meteor': path.normalize('ionic2-meteor/dist/meteor_app')
    },
    extensions: ["", ".js", ".ts"]
  }
};
