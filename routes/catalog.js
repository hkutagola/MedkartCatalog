require('./db');
initDB();
//Create an item to add to the database.
exports.create = function(req, res) {
db.insert(req.body, function (err, body, headers) {
if (!err) {
res.send({msg: 'Successfully created item'});
}
else {
res.send({msg: 'Error on insert, maybe the item already exists: ' + err});
}
});
}
//list all the database contents.
exports.list = function(req, res) {
db.list({include_docs: true}, function (err, body, headers) {
if (!err) {
res.send(body);
return;
}
else res.send({msg:'Error listing items: ' + err});
});
}
