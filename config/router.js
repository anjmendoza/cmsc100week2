var student = require('./../controllers/student');
var teacher = require('./../controllers/teacher');
//function for route handling
module.exports=function(router){
	router.route('/student')
		.get(student.find);
	
	router.route('/teacher')
		.get(teacher.get)
		.put(teacher.put)
		.post(teacher.post)
		.delete(teacher.delete);
	return router
};