"use strict";

app.controller("blogCtrl", function($rootScope, $scope, BlogService) {
	$scope.controller = "blogCtrl";

	const showBlogs = () => {
		BlogService.getBlogs($rootScope).then((results) => {
			$scope.blogs = results;
			console.log("results of showBlogs", results);
		}).catch((err)  => {
			console.log("error in showblogs", err);
		});
	};

	showBlogs();

	$scope.AppendText = function() {
     var myEl = angular.element( document.querySelector( 'entireIndivBlog' ) );
     BlogService.getBlogs($rootScope).then((results) => {
			$scope.blogs = results.detail}
     		results.detail=	myEl.append(blog);     
    };

	// $scope.blogDetail = "{{blog.detail}}";
	// $scope.myVar = false;
	// $scope.toggle = function() {
	// 	$scope.myVar = !$scope.myVar;
	// };
	
	// $rootScope.append(document.body)
	// $scope.showBlog = (blogId) => {
	// 	$location.path(`/contact/edit/${contactId}`);
	// 	console.log("path working:", contactId);
	// };


});

// $('body').on('click', '.blog', (event) => {
// 	$(event.target).closest(".blog").appendTo('#entireBlog');
// });




