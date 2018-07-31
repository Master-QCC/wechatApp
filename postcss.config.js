module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: [
                "Firefox >= 20",
                "ie >= 11",
                'Chrome >= 58'
            ]
        })
    ]
};
