exports.transformMessageBody = function(frameworkLocation,api,apim) {

	var transformer = require(frameworkLocation + 'JsonTransformer.js').newJsonTransformer(frameworkLocation);
	 
	var template = {
	  foo: ['$.some.crazy', {
	    bar: '$.example'
	  }]
	};
	
	var data = apim.getvariable('message.body');
		
	return transformer.transform(data, template);		
}
