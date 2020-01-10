const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCssAssets = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CleanWebpackPlugin = require("clean-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: "development",                                                  
//tao comment cho file output
   devtool: "none",                                                     
//tat viet cung 1 hang
    entry: "./src/app.js",
    output:{
        filename: "[name].bundle.js",
        path: path.resolve(__dirname,"dist") 
    },
    module:{
        rules:[
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                  loader: "file-loader",
                  options: {
                    name: "[name].[hash].[ext]",
                    outputPath: "imgs",
                    esModule: false,
                  }
                }
            },
            {
                test: /\.scss$/,
                use: [
                  MiniCssExtractPlugin.loader, //3. Create file css in output
                  "css-loader", //2. Turns css into commonjs
                  "sass-loader" //1. Turns sass into css
                ]   
            },
            {
                test: /\.js$/,
                use: "babel-loader",
                
            }
        ]
    },
    optimization:{
        minimizer:[
            new OptimizeCssAssets(),
            new TerserPlugin()
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
        new htmlWebpackPlugin ({
            template: "./src/index.html",
            // minify: {
            //     removeAttributeQuotes: true,
            //     collapseWhitespace: true,
            //     removeComments: true
            // }
        }),
        new htmlWebpackPlugin ({
            filename: "categories.html",
            template: "./src/categories.html",
            // minify: {
            //     removeAttributeQuotes: true,
            //     collapseWhitespace: true,
            //     removeComments: true
            // }
        }),
        new htmlWebpackPlugin ({
            filename: "blog-single.html",
            template: "./src/blog-single.html",
            // minify: {
            //     removeAttributeQuotes: true,
            //     collapseWhitespace: true,
            //     removeComments: true
            // }
        }),
        new htmlWebpackPlugin ({
            filename: "contact.html",
            template: "./src/contact.html",
            // minify: {
            //     removeAttributeQuotes: true,
            //     collapseWhitespace: true,
            //     removeComments: true
            // }
        }),
        new CleanWebpackPlugin()
    ]
}