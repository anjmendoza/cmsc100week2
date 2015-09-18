var request = require('supertest'),
	should = require ('should-http');

describe ('student' , function(){
	var url = 'localhost:5000';
	describe ('find()' , function (){
		it('should retrieve all student record' , function (done){
			request(url)
			.get('/students')
			.end(function(err,res){
				if(err) throw err;
				res.should.have.status(200);
				res.body.should.be.an.instanceOf(Array);
				done();
			});
		});
	});
	describe ('find1()' , function (){
		it('should retrieve an existing student record' , function (done){
			request(url)
			.get('/students/2001-12345')
			.end(function(err,res){
				if(err) throw err;
				res.should.have.status(200);
				res.body.should.be.an.instanceOf(Object);
				done();
			});
		});
	});
	describe ('insert()' , function (){
		it('should return newly created record' , function (done){
			request(url)
			.post('/students')
			.send({'studNo': '2015-12345' , 'name' : 'Ann Abendante' , 'bdate' : '1996-10-24'})
			.end(function(err,res){
				if(err) throw err;
				res.should.have.status(200);
				res.body.should.be.an.instanceOf(Object);
				res.body.should.have.property('studNo');
				res.body.should.have.property('name');
				res.body.should.have.property('bdate');
				
				done();
			});
		});
	});
});