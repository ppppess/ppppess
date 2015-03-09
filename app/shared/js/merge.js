// will merge several modules into one single hash

module.exports = function(libs) {

	libs = libs || []; 

	var root = process.cwd() + "/", ret = require( __dirname + "/base");  

	libs.forEach(function(lib) {
		ret = ret.extend(ret, require(root + lib));
	});

	ret.root = root;

	return ret; 
};
