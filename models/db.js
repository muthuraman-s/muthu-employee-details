var chalk = require('chalk');
var mongoose = require( 'mongoose' );

/*
* Mlabs Db Connection format.
* mongodb://<dbuser>:<dbpassword>@ds113680.mlab.com:13680/employeerecords
*/
var dbURI = 'mongodb://muthu:muthu@ds113680.mlab.com:13680/employeerecords';
//var dbURI = 'mongodb://localhost/employee_details'; localhost

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log(chalk.green('Mongoose connected to ' + dbURI));
});

mongoose.connection.on('error',function (err) {
  console.log(chalk.red('Mongoose connection error: ' + err));
});

mongoose.connection.on('disconnected', function () {
  console.log(chalk.red('Mongoose disconnected'));
});

var employeeSchema = new mongoose.Schema({
  name: {type: String},
  email: {type: String},
  dob: {type: Date},
  gender:{type:String},
  department:{type:String},
  age:{type:Number}
});

mongoose.model( 'Employee', employeeSchema );
