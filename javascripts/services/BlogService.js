"use strict";

app.service("BlogService", function($http, $q, FIREBASE_CONFIG) {
	const getBlogs = () => {
		let blogs = [];
		return $q((resolve,reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/blogs.json`).then((results) => {
				let fbBlogs = results.data;
				console.log("fbContacts", fbBlogs);

				Object.keys(fbBlogs).forEach((key) => {
					fbBlogs[key].id = key;
					blogs.push(fbBlogs[key]);
				});
				resolve(blogs);
			}).catch((err) => {
				reject(err);
				console.log("getBlogs didn't work", err);
			});
		});

	};

const getSingleBlog = (blogId)=> {
				return $http.get(`${FIREBASE_CONFIG.databaseURL}/blogs/${blogId}.json`);
			};

	return{getBlogs, getSingleBlog};
});