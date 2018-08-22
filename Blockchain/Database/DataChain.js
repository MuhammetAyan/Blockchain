/*
 *Blockchain datasını kontrol eden modüldür.
 */
var fs = require("fs");
module.exports.path = "Data.json";

module.exports.addBlock = function (block) {
    if (block === undefined && block === null) {
        return;
    }
    fs.appendFile(module.ex.path, block, function (err) {

    });
};
