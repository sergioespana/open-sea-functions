const admin = require('firebase-admin');
const camelCase = require('camelcase');
const functions = require('firebase-functions');
const glob = require('glob');

admin.initializeApp(functions.config().firebase);

const files = glob.sync('./src/*.f.js', {
	cwd: __dirname,
	ignore: './node_modules/**'
});

files.forEach((file, i) => {
	const name = file.slice(0, -5).split('/').slice(-1)[0];
	return (exports[name] = require(file));
});