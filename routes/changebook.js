/* 
 * A Bluemix application using  Cloudant & Node Express 
 * Developed by: Tinniam V Ganesh
 * Date: 19 Aug 2014
 * File: changebook.js
 */
exports.list = function(req, res){
  res.render('changebook', { title: 'Update book'});
};
