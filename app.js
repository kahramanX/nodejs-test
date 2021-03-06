// EXPRESS 
let express = require('express');
let path = require('path');
let fs = require("fs");
let app = express();
let ejsLayouts = require('express-ejs-layouts');


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/app_server/views"));


// file require
let routeElektronik = require(path.join(__dirname, "./app_server/routes/ElektronikRoute.js"));
// bazen bunu kullanmak gerekiyor => (path.join(__dirname, " ")

const port = 8080;
const hostname = "127.0.0.1";


//bunu yapmazsan public içindeki css dosyalarını göremez. Bu kod static, dosyaları kullanıcıya görünür yapar
app.use('/public', express.static(path.join(__dirname, 'public')));
//__dirname çağrıldığı klasörü getiriyor

app.use(ejsLayouts);

//buraya yazılan her middleware her durumda çalışacaktır.

app.use("/elektronik", routeElektronik);


app.listen(port, hostname, () => {
    console.log(`server çalışıyooo http://localhost:${port}`);

});