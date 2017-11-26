"use strict";

app.controller("projectCtrl", function($rootScope, $routeParams, $scope, ProjectService) {
	$scope.controller = "projectCtrl";

	const showProjects = () => {
		ProjectService.getProjects($rootScope).then((results) => {
			$scope.projects = results;
			console.log("showing Projects????", results);
		}).catch((err)  => {
			console.log("error in showblogs", err);
		});
	};

	showProjects();


});
// // $('body').on('click', '.project', (event) => {
// // 	$(event.target).closest(".project").appendTo('#entireBlog');
// // });

// module.exports = {setKey, getProjects};
