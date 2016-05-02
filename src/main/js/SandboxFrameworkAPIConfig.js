var name="${artifactId}";
var version="${api.version}";
var logLevel=7;

var config = [
              {name:"/users",methods:[{name:"GET", targetUrl:"https://randomuser.me/api/users"}]},
              {name:"/users/all",methods:[{name:"GET", targetUrl:"https://randomuser.me/api/users/all"}]}
             ];

exports.getApiConfig = function(frameworkLocation, console) {

	var logCreator = require(frameworkLocation + 'Logger.js');	
	var logger = logCreator.newLogger(logLevel,console);	

	var apiVersionCreator = require(frameworkLocation + 'ApiVersion.js');
	var apiVersion = apiVersionCreator.newApiVersion(name, version, config, logger);
		
	return apiVersion;
}


