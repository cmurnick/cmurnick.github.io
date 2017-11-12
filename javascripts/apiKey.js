"use strict";

const project = require('./project');
const data = require('./data');

const apiKeys = () => {
	return new Promise ((resolve, reject) => {
		$.ajax ('./db/firebaseKey.json').done((data) => {
			resolve(data.firebaseKeys);
		}).fail((error) => {
			reject(error);
		});
	});
};

const retrieveKeys = () => {
	apiKeys().then((results) => {
		project.setKey(results.apiKey);
		data.setKey(results);
		firebase.initializeApp(results.firebaseKeys);
		data.getBlogJSON();
	});
};

module.exports = {retrieveKeys};