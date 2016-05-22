/**
 * Created by whisp_000 on 2016/5/22.
 */
module.exports = {
    entry:{
        HomePage:"./src/HomePage/HomePage.entry.js"},
    output: {
        path: './build/dist/',
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};