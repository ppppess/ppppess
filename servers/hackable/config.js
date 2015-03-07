
var config = {
	port		: 8081,
	env 		: "dev",
	tasks 	: "store&dns"
};

	
var processArgs = function(args) {
	
	var iskey, nextkey, nextfnc, retfnc = function(v) {return v;};
	
	args.forEach(function(val, index, array) {

		iskey = val.toString().substring(0,1) === "-";
		
		if(nextkey) {
			config[nextkey] = nextfnc(val);
			nextkey = null;
		}

		if(iskey) {
			nextkey = val.toString().replace(/^-+/, "");
			config[nextkey] = true;
			nextfnc = retfnc;
		}

		if(val === "-port") nextfnc = function(v){return parseInt(v) || config.port;};

	});

	console.log("config=", config)
	return config;
};

module.exports = processArgs;