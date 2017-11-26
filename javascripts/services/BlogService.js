"use strict";

app.service("BlogService", function($http, $q, FIREBASE_CONFIG) {
	const getBlogs = () => {
		let blogs = [];
		return $q((resolve,reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/blogs.json`).then((results) => {
				let fbBlogs = results.data;

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

	const createBlogObject = (blog) => {
		return {
			"id": blog.id,
			"name": blog.name,
			"date": blog.date,
			"detail": blog.detail,
			"showDetails": blog.showDetails
		};
	};

	const getSingleBlog = (blogId)=> {
					return $http.get(`${FIREBASE_CONFIG.databaseURL}/blogs/${blogId}.json`);
	};

	const updateBlog = (blog, blogId) => {
			return $http.put(`${FIREBASE_CONFIG.databaseURL}/blogs/${blogId}.json`, JSON.stringify(blog));
	};

	return{getBlogs, getSingleBlog, createBlogObject, updateBlog};
});