var express = require('express'),
    multer  = require('multer');
    var cors = require('cors');
    var fs = require('fs');
    var path = require('path');
    var _ = require('lodash');

var app = express();
app.use(cors());
var storage = multer.diskStorage({
  destination: './uploads',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
  }
});
var csvExtensions = ['.csv'];

function fileFilter (req, file, cb) {

  var uriExtension = path.extname(file.originalname).toLowerCase();

  if(_.include(csvExtensions,uriExtension)){
      cb(null, true);
  }
  else{
      console.log("rejected filetype mismatch");
      cb(null, false);
  }

}

var upload = multer({
    storage: storage,
    fileFilter : fileFilter,
    limits : {
        files : 1,
        fileSize : 5*1024*1024 //5MB
    }
});

app.post('/upload', upload.single('file'), function (req, res, next) {
  console.log("server",req.file);

  var Converter = require("csvtojson").Converter;
  var converter = new Converter({});
  converter.fromFile(path.join('./uploads',req.file.filename),function(err,result){
   res.json(result);
  });
  
});



console.log("listening on 3001");
app.listen(3001);
