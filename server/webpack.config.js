var path = require('path');


module.exports = {
  entry:'.',
  output: {
    path: path.resolve('../meteor-core/server/lib'),
    filename: 'server.bundle.js',
    pathinfo: false // show module paths in the bundle, handy for debugging
  }
}

