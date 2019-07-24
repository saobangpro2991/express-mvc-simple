'use strict';

module.exports = {
	app : {
		title : 'Express MVC Api'
	},
	dbTablePrefix : 'xp_dev_',
	dbAutoIndex : true,
	host: 'localhost',
	port : process.env.PORT || 8041,
	protocol: 'http',
	basePath: '/api/v1',
	defaultPoint: 1000,
	// Session Cookie settings
	sessionCookie : {
		// session expiration is set by default to 24 hours
		maxAge : 7 * 24 * (60 * 60 * 1000),
		// httpOnly flag makes sure the cookie is only accessed
		// through the HTTP protocol and not JS/browser
		httpOnly : true,
		// secure cookie should be turned to true to provide additional
		// layer of security so that the cookie is set only when working
		// in HTTPS mode.
		secure : false
	},
	// sessionSecret should be changed for security measures and concerns
	sessionSecret : process.env.SESSION_SECRET || 'EXPRESS-MVC',
	// sessionKey is set to the generic sessionId key used by PHP applications
	// for obsecurity reasons
	sessionKey : 'sessionId',
	sessionCollection : 'sessions',
	upload : {
		path : 'uploads/',
		tmp_path : 'uploads/tmp/',
		size : 52428800
		// 3MB
	},
};
