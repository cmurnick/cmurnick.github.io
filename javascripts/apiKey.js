"use strict";

const project = require('./project');
const data = require('./data');

const apiKeys = () => {
	return new Promise ((resolve, reject) => {
		$.ajax ('./db/firebaseKey.json').done((data) => {
			resolve(data.firebaseKeys);
		}).fail((error) => {
			reject(error);
			console.log("error in apikeys", error);
		});
	});
};

const retrieveKeys = () => {
	apiKeys().then((results) => {
		project.setKey(results.apiKey);
		data.setKey(results);
		// console.log("results setkey", results);
		firebase.initializeApp(results.firebaseKeys);
		data.getBlogJSON();
		data.getProjectJSON();
	}).catch((error) => {
		console.log("error in retrieve keys", error);
	});
};

module.exports = {retrieveKeys};