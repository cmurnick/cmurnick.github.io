"use strict";

app.run(function($location, FIREBASE_CONFIG) {
  firebase.initializeApp(FIREBASE_CONFIG);
  $location.path('/aboutMe');
});

app.config(function($routeProvider){
  $routeProvider
    .when("/history", {
      templateUrl: 'partials/history.html',
      // controller: 'historyCtrl',
    })
    .when("/contact", {
      templateUrl: 'partials/contact.html',
      // controller: 'contactCtrl',
    })
    .when("/projects", {
      templateUrl: 'partials/projects.html',
      controller: 'projectCtrl',
    })
    .when("/aboutMe", {
      templateUrl: 'partials/aboutMe.html',
      // controller:'aboutMeCtrl',
    })
    .when("/blog", {
      templateUrl: 'partials/blog.html',
      controller: 'blogCtrl',
    })
    .otherwise('/aboutMe');
});

