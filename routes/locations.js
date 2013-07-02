// Route responsible for main page
module.exports = function(app) {
  app.get('/locations', function (req, res){
    console.log("Locations page requested");

    res.render('locations');
  });
}