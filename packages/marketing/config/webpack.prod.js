const {merge} = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packagesJson = require('../package.json');

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/marketing/latest/',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            filename: 'rmeoteEntry.js',
            exposes: {
                './MarketingApp': './src/bootstrap'
            },
            shared: packagesJson.dependencies
        })
    ]
};

module.exports = merge(commonConfig, prodConfig);