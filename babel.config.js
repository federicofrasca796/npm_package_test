module.exports = function (api) {
    api.cache(true);
    //, 'babel-preset-expo'
    const presets = ["@babel/preset-env", "@babel/preset-react"];
    const plugins = ["macros"];

    return {
        presets,
        plugins
    };
};
