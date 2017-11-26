"use strict";

app.service("ProjectService", function($http, $q, FIREBASE_CONFIG) {
	const getProjects = () => {
		let projects = [];
		return $q((resolve,reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/projects.json`).then((results) => {
				let fbProjects = results.data;
				console.log("getProjects working", fbProjects);
				Object.keys(fbProjects).forEach((key) => {
					fbProjects[key].id = key;
					projects.push(fbProjects[key]);
				});
				resolve(projects);
			}).catch((err) => {
				reject(err);
				console.log("getProjects didn't work", err);
			});
		});

	};

	return{getProjects};
});