
module.exports.a = function (req, res, next) {
    res.write("Hello");
    if (req.url == "/")
        next();
    else
        res.end();
};

module.exports.b = function (req, res, next) {
    res.write(" world!");
    res.end();
    next();
};