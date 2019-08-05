//mahasiswaModel.js

var mongoose = require('mongoose');

//setup scheme database
var mahasiswaSchema = mongoose.Schema({
  nim: {
    type: String,
    required: true
  },
  nama: {
    type: String,
    required: true
  },
  jurusan: String,
  semester: String,
  create_date: {
    type: Date,
    default: Date.now
  }
});

//export mahasiswaModel
var mahasiswa = module.exports = mongoose.model('mahasiswa', mahasiswaSchema);

module.exports.get = function(callback, limit) {
  Mahasiswa.find(callback).limit(limit);
};