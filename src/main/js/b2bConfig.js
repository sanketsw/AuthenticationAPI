/**
 * API Version : ${api.version}
 */
var name="${artifactId}";
var version="${api.version}";
var logLevel=7;

var config = [
              {name:"authenticate",
            	  methods:[
            	           {name:"GET", targetUrl:"http://api-springboot.mybluemix.net/hello"}
            	           ]
              }                           
             ];

exports.getApiConfig = function(frameworkLocation, console) {

	var util = require(frameworkLocation + 'Util.js');
		
	return util.getApiConfig(frameworkLocation, console, name, version, config, logLevel);
}


