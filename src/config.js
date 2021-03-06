
var processArgs = function(hdefault, args) { 
	
	var config = $.extend({}, require($.root + hdefault) );

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

	console.log("config=", config);
	return config;
};

module.exports = processArgs;