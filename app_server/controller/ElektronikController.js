let path = require('path'); // necessary
let express = require('express');
// router nesnesinde get, post, put, delete gibi routeleri kullanabilirsin
let router = express.Router();

module.exports.index = function (req, res) {
    res.sendFile(path.join(__dirname, "../../index.html"));
}

module.exports.elektronik = function(req, res) {
    console.log(req.deneme);

    res.sendFile(path.join(__dirname, '../../elektronik.html'));

    console.log("çalıştıııııııı");
};

module.exports.bilgisayar = (req, res)=> {
    console.log(req.test2);
    res.sendFile(path.join(__dirname, '../../bilgisayar.html'));
    //sendFile net yolu ister.
    //path.join projenin bulunduğu klasör ile about.html birleştiriyor. bu sayede doğru yolu almasını sağlıyor
};
