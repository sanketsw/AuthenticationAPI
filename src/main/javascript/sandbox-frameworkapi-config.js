var apicCommons = require('local:///apic-commons-main');

//json
var catalogConfig = {[
	["${api.version}",[["/users",[["GET",{targetUrl:"https://randomuser.me/api/"}]]]]],
]};

// turn jsonConfig into Javascript map object
exports.getCatalog = function() {
	return apicCommons.newCatalog("sandbox",catalogConfig);
}


