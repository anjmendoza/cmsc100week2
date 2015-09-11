var db = require(__dirname + '/../lib/mysql');
exports.find=function(req,res){
	console.log(req.ip + "find()");
	db.query('SELECT * FROM student',
		function(err, rows){
			if(err) return next(err);
			res.send(rows);		
		});
};
exports.find1=function(req,res){
	console.log(req.ip + "find1()");
	db.query('SELECT * FROM student WHERE studNo=?', [req.params.id],
		function(err, rows){
			if(err) return next(err);
			if(rows.length==0)
				res.status(404).send("Student Not Found");
			res.send(rows[0]);		
		});
};
exports.insert=function(req,res){
	db.query('INSERT INTO student VALUES (?,?,?)', [req.body.studNo,req.body.name,req.body.bdate],
		function(err, rows){
			if(err) return next(err);
			if(rows.length==0)
				res.status(404).send("Student Not Found");
			res.send(rows[0]);		
		});
};
exports.update=function(req,res){
	db.query('UPDATE student SET ? WHERE studNo=?', [req.body , req.params.id],
		function(err, rows){
			if(err) return next(err);
			if(rows.length==0)
				res.status(404).send("Student Not Found");
			res.send(rows[0]);		
		});
};
exports.remove=function(req,res){
	db.query('DELETE FROM student WHERE studNo=?', [req.params.id],
		function(err, rows){
			if(err) return next(err);
			if(rows.length==0)
				res.status(404).send("Student Not Found");
			res.send(rows[0]);		
		});
};