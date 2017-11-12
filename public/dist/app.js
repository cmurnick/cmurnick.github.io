(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const project = require('./project');
const data = require('./data');

const apiKeys = () => {
	return new Promise ((resolve, reject) => {
		$.ajax ('./db/firebaseKey.json').done((data) => {
			resolve(data.firebaseKeys);
		}).fail((error) => {
			reject(error);
		});
	});
};

const retrieveKeys = () => {
	apiKeys().then((results) => {
		project.setKey(results.apiKey);
		data.setKey(results);
		firebase.initializeApp(results.firebaseKeys);
		data.getBlogJSON();
	});
};

module.exports = {retrieveKeys};
},{"./data":3,"./project":5}],2:[function(require,module,exports){
"use strict";


const getBlogs = (blog) => {
	let blogzString ='';

	for (let i = 0; i < blog.length; i++) {


		let domString = "";

		domString += `<div class= "product3 col-xs-4 blogContainer">`;
		domString +=	`<div class="product2 set-height thumbnail blog">`;
		domString +=		'<div class="product1 caption">';
		domString +=			`<div class="text-uppercase list title"> ${blog[i].name} </div>`;
		domString +=			`<div class ="list date"> ${blog[i].date} </div>`;
		domString +=			`<div class ="list blog"> ${blog[i].blog} </div>`;
		domString +=		`</div>`;
		domString += 	`</div>`;
		domString += `</div>`;



		blogzString += domString;
		}

		printToDom(blogzString);
	};

const printToDom = (strang) => {
	$('#blog-holder').append(strang);
};


let selectedBlog;


$('body').on('click', '.blog', (event) => {
	$(event.target).closest(".blog").appendTo('#entireBlog');
});



module.exports = {getBlogs};

},{}],3:[function(require,module,exports){
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
},{"./blog":2}],4:[function(require,module,exports){
"use strict";

const apiKey = require('./apiKey');
const project = require('./project');
const blog = require('./blog');

apiKey.retrieveKeys();





},{"./apiKey":1,"./blog":2,"./project":5}],5:[function(require,module,exports){
"use strict";

let firebaseKey;

const setKey = (apiKey) => {
  firebaseKey = apiKey;
};

module.exports = {setKey};
},{}]},{},[4]);
