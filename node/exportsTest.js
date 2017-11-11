exports.abs = function(number){
	if (number < 0) {
		return -number;
	} else {
		return number;
	}
};

exports.circleArea = function(r) {
	return r * r * 3.14;
};
