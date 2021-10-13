let path = require('path'); // necessary
let express = require('express');
// router nesnesinde get, post, put, delete gibi routeleri kullanabilirsin
let router = express.Router();
let controller = require((path.join(__dirname, "../controller/ElektronikController.js")));

// /elektronik'nın sonuna "/" ekliyor

router.use(function(req, res, next){
    // variable
    req.deneme = "Merhabaa";

    req.test2 = "test2";

    next(); //middleware devam etmesi için
});
router.get("/", controller.elektronik);

//sadece dosya adı kullandım çünkü app.js de konumunu tanımladım
router.get("/bilgisayar", controller.bilgisayar);


//routerların başka bir dosyada olması daha okunaklı yapar
module.exports = router; // app.js dosyasında çalışabilmesi için bunu export etmeliyiz