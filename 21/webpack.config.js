const path = require('path');

module.exports = {
    entry: './src/index.js',
    /*module: {
        rules:[
            {
                test: /\.js$/,
                use: 'ts-loader'
                include: [path.resolve(__dirname,'src')]
            }
        ]
    },*/
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
}