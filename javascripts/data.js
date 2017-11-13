"use strict";

// const apiKey = require('./apiKey');
const blog = require('./blog');
const project = require('./project');

let firebaseKey = "";

let blogArray =[];


const setKey = (key) => {
	firebaseKey = key;
	
};


// put data json files here

const getBlogJSON = () => {
	return new Promise(function(resolve,reject) {
		$.ajax(`${firebaseKey.databaseURL}/blogs.json`).done(function(data) {
			resolve(data);
			blog.getBlogs(data);
		}).fail(function(error) {
			reject("errorJSON NOT WORKING", error);
		});
	});
};

const getProjectJSON = () => {
	return new Promise(function (resolve, reject) {
		$.ajax(`${firebaseKey.databaseURL}/projects.json`).done(function(data) {
			resolve(data);
			console.log("is this shit working",data);
			project.getProjects(data);
		}).fail(function(error) {
			reject("error in projectJSON CrAP TASTIC",error);
		});
	});
};

module.exports = {setKey, getBlogJSON, getProjectJSON};