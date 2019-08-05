//mahasiswa controller

//import mahasiswa model
Mahasiswa = require('./mahasiswaModel');

//handle index action
exports.index = function(req, res) {
  Mahasiswa.get(function(err, mahasiswa) {
    if (err) {
      res,
      json({
        status: 'error',
        message: err
      });
    }
    res.json({
      status: 'Success!',
      message: 'Data mahasiswa berhasil didapatkan',
      data: mahasiswa
    });
  });
};

//handle create mahasiswa actions
exports.new = function(req, res) {
  var mahasiswa = new Mahasiswa();
  mahasiswa.nim = req.body.nim ? req.body.nim : mahasiswa.nim;
  mahasiswa.nama = req.body.nama;
  mahasiswa.jurusan = req.body.jurusan;
  mahasiswa.semester = req.body.semester;

  //save mahasiswa and check for error
  mahasiswa.save(function(err) {
    //if(err)
    //res.json(err);

    res.json({
      message: 'Mahasiswa Baru Terdaftar!',
      data: mahasiswa
    });
  });
};

//handle view mahasiswa Info
exports.view = function(req, res) {
  Mahasiswa.findById(req.params.mahasiswa_id, function(err, mahasiswa) {
    if (err)
      res.send(err);
    res.json({
      message: 'Mahasiswa details loading...!',
      data: mahasiswa
    });
  });
};

//handle update mahasiswa Info
exports.update = function(req, res) {
  Mahasiswa.findById(req.params.mahasiswa_id, function(err, mahasiswa) {
    if (err)
      res.send(err);
    mahasiswa.nim = req.body.nim ? req.body.nim : mahasiswa.nim;
    mahasiswa.nama = req.body.nama;
    mahasiswa.jurusan = req.body.jurusan;
    mahasiswa.semester = req.body.semester;

    //save data mahasiswa and check for the error
    mahasiswa.save(function(err) {
      if (err)
        res.json(err);
      res.json({
        message: 'Mahasiswa info updated',
        data: mahasiswa
      });
    });
  });
};

//handle delete data mahasiswa
exports.delete = function(req, res) {
  Mahasiswa.remove({
    _id: req.params.mahasiswa_id
  }, function(err, mahasiswa) {
    if (err)
      res.send(err);
    res.json({
      status: 'success',
      message: 'Mahasiswa deleted'
    });
  });
};