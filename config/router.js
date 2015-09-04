var student = require('./../controllers/student');
var teacher = require('./../controllers/teacher');
//function for route handling
module.exports=function(router){
	router.route('/students')
		.get(student.find)
		.post(student.insert);
	router.route('/students/:id')
		.get(student.find1)
		//.put(student.update);
		.delete(student.remove);
	router.route('/teachers')
		.get(teacher.get)
		.put(teacher.put)
		.post(teacher.post)
		.delete(teacher.delete);
	return router
};