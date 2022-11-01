module.exports = ({ env }) => {
    if (env === 'production') return {
        plugins: {
            cssnano: {
                preset: 'default'
            }
        }
    }

    return {
        plugins: {},
    };
}