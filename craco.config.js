const path = require(`path`);

module.exports = {
    webpack: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@common': path.resolve(__dirname, 'src/common'),
            '@contexts': path.resolve(__dirname, 'src/contexts')
        }
    }
};
