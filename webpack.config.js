module.exports = {
    entry: "./index.js",
    output: {
        filename: "app.min.js"
    },
    module: {
        rules: [{
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                use: ['glslify-import-loader', 'raw-loader', 'glslify-loader'],
                test: /\.(glsl|glb|vert|frag)$/
            }
        ],
    },
    mode: 'development',
    devServer: {
        port: 3000
    }
};