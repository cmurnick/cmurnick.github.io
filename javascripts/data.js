"use strict";

const blog = require('./blog');

let firebaseKey = "";
let blogs = [];

const setKey = (key) => {
	firebaseKey = key;
};

// put data json files here

const getBlogJSON = () => {
	return new Promise((resolve,reject) => {
		$.ajax(`${firebaseKey.databseURL}/blogs.json`).done((data) => {
			resolve(data);
			console.log(data);
			blog.getBlogs(data);
		}).fail((error) =>{
			reject(error);
		});
	});
};

const getProjectJSON = () => {
	return new Promise((resolve, reject) => {
		$.ajax(`${firebaseKey.databseURL}/projects.json`).done((data) => {
			resolve(data);
			console.log(data);
		}).fail((error) => {
			reject(error);
		});
	});
};

module.exports = {setKey, getBlogJSON, getProjectJSON};