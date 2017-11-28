"use strict";

app.controller("blogCtrl", function($rootScope, $routeParams, $scope, BlogService) {
	$scope.controller = "blogCtrl";

	const showBlogs = () => {
		BlogService.getBlogs($rootScope).then((results) => {
			$scope.blogs = results;
		}).catch((err)  => {
			console.log("error in showblogs", err);
		});
	};

	showBlogs();

	//was getContact in contactDetailCtrl in AngularContacts
	// const getOnlyOne = () => {
	// 	BlogService.getSingleBlog($routeParams.id).then((results) =>{
	// 		$scope.blog=results.detail;
	// 		console.log(results.detail);
	// 		console.log("contactDetailCtrlgtContact", results.detail);
	// 	}).catch((err) => {
	// 		console.log("Err in Getsinglecontact", err);
	// 		});
	// 	};

	$scope.clickBlog = function(blog) {
		$scope.blogDetails = blog;
		console.log("blog?", blog);
	};


   //   var myEl = angular.element( document.querySelector( 'entireIndivBlog' ) );
   //   BlogService.getBlogs($rootScope).then((results) => {
			// $scope.blogs = results.detail}
   //   		results.detail=	myEl.append(blog);     
   //  };

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




