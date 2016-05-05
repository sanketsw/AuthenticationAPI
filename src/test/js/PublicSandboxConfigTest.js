var currentWorkingDir = java.lang.System.getProperty("user.dir");
var frameworkLocation = currentWorkingDir + '/target/framework/js/';
var configLocation = currentWorkingDir + '/src/main/js/';

var Require = load('src/main/js/Require.js');
var require = Require( './' , [ configLocation, frameworkLocation] );

describe("PublicSandboxConfigTest",function() {


	// spy object to replace console
	var console;

	beforeEach(function() {
		console = jasmine.createSpyObj('console',
				[ 'debug', 'info', 'notice', 'warning', 'error', 'critical', 'alert', 'emergency','options' ]);
		console.debug = function(msg) {
			print(msg);
		};
	});

	it("testNoSandboxConfig", function() {
					
		var util = require("Util.js");
		
		var apiConfig = util.loadApiConfig(frameworkLocation, configLocation, "PublicSandbox", "","1.0.0", console);

		expect(apiConfig).toBeNull();
	});
	
	it("testSandboxConfig", function() {
				
		
		var util = require("Util.js");
		
		console.debug(util);

		var apiConfig = util.loadApiConfig(frameworkLocation, configLocation, "PublicSandbox", "","", console);
		
		console.debug(apiConfig);
		expect(apiConfig.name).toEqual("${artifactId}");
		expect(apiConfig.version).toEqual("${api.version}");				
	});
});
