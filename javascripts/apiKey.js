"use strict";

const project = require('./project');
const blog = require('.blog');

const apiKeys = () => {
	return new Promise ((resolve, reject) => {
		$.ajax ('./db/blogs.json').done((data) => {
			resolve(data.blogs);
		}).fail((error) => {
			reject(error);
		});
	});
};

const retrieveKeys = () => {
	apiKeys().then((results) => {
		project.setKey(results.apiKey);
		blog.setKey(results);
		firebase.initializeApp(results.firebaseKeys);
	});
};

module.exports = {retrieveKeys};