var DB = require('./DB');

exports.AuthenticateUser = function (username) {
	for (var i = 0; i < DB.Users.length; i++) {
		if(DB.Users[i].username === username) {
			return DB.Users[i];
		}
	}
	return null;
}

exports.getUserIdFromUsername = function (username) {
	var user = exports.AuthenticateUser(username);
	return user === null? null : user.id;
}