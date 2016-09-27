module.exports = function(s) {
    return s.toLowerCase().replace(/\./, '').replace(/\s/g, '-');
};
