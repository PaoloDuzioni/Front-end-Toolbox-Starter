module.exports = {
    plugins: [
        require('postcss-preset-env')({
            browsers: ['> 2%', 'last 2 versions'],
        }),
    ],
};
