//webpack é responsável por fazer o código reactfuncionar no browser


const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    mode: 'development',
    //arquivo de entrada 
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    //arquivo de saída
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js' , '.jsx'],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public')
          },
          hot: true,
          port: 4000
    },

    plugins: [
        new HtmlWebpackPlugin({  
            teamplate: path.resolve(__dirname, 'public', 'index.html'),     
        })
    ],
    //config de como ficará cada arquivos
    module: {

        //configurações dos tipos de arquivos
        rules: [
            {
              //$ quer dizer - vejas os arquivos que terminam com isso
              test: /\.jsx$/,
              //exclui o aquivo node modules para que a minha aplicação não o converta
              exclude: /node_modules/,
              //converte com o babel
              use: 'babel-loader',
            }
        ]
    }
}
