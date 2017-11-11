(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

let blogs = [];

$.get('blog.json').done((data) => {
	let blog = data.blogs;
	getBlogs(blog);
	console.log(blog);
}).fail((error) => {
	console.log(error);
});




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



// $('#blog-holder').click((event) => {
// 	if($(event.target).closest('.product3'))
// 		console.log(event);
	// chooseBlog(event);
  	// printSelectedBlog();
// });


// const chooseBlog = (event) => {
//     if (event.target.closest(list")) {
//    return(selectedBlog);
//    console.log(selectedBlog);
// };
// };
// const printSelectedBlog = () => {

//   const blogDescription = selectedBlog.childNodes[0].childNodes[0].innerHTML;
//   let wholeBlog = $('#entireBlog').html(string);
//   wholeBlog.innerHTML = blogDescription;
  
//   // console.log(blogDescription);
// }



 










},{}]},{},[1]);
