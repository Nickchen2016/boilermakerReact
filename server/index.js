const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.config.js');
const compiler = webpack(webpackConfig);

// const morgan = require('morgan');
// app.use(morgan('dev'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    middleware(compiler, {
      // webpack-dev-middleware options
      publicPath: webpackConfig.output.publicPath
    })
);


app.use(webpackHotMiddleware(compiler)
  // log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
);

app.use(express.static(path.join(__dirname, '../public')));
// app.use(express.static(webpackConfig.output.publicPath));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

app.use(function (err, req, res, next) {
console.error(err);
console.error(err.stack);
res.status(err.status || 500).send(err.message || 'Internal server error.');
});

const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!
app.listen(port, function () {
  console.log("Knock, knock");
  console.log("Who's there?");
  console.log(`Your server, listening on port ${port}`);
});