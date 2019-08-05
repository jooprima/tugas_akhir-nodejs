//initialize express router
let router = require('express').Router();

//set default API response
router.get('/', function(req, res) {
  res.json({
    status: 'Success!',
    message: 'Data mahasiswa berhasil didapatkan'
  });
});

//import mahasiswaController
var mahasiswaController = require('./mahasiswaController');

//mahasiswa apiRoutes
router.route('/mahasiswa')
  .get(mahasiswaController.index)
  .post(mahasiswaController.new);

router.route('/mahasiswa/:mahasiswa_id')
  .get(mahasiswaController.view)
  .patch(mahasiswaController.update)
  .put(mahasiswaController.update)
  .delete(mahasiswaController.delete);

//export API
module.exports = router;