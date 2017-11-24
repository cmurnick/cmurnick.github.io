"use strict";

let projectKey;

const setKey = (apiKey) => {
  projectKey = apiKey;
  console.log ("project key", projectKey);
};



const getProjects = (project) => {
	let productzString ='';

	for (let i = 0; i < project.length; i++) {


		let domString = "";

		// domString += `<div class= "product3 col-xs-4 blogContainer">`;
		domString +=	`<div class="product2 set-height project">`;
		domString +=		'<div class="product1 caption">';
		domString +=			`<div class="text-uppercase list title"> ${project[i].name} </div>`;
		domString +=			`<div class ="list date"> ${project[i].description} </div>`;
		domString +=			`<img class ="list screenshot" src =${project[i].screenshot}>`;
		domString +=			`<div class ="list link"> ${project[i].link} </div>`;
		domString +=			`<div class ="list deployLink"> ${project[i].deployLink} </div>`;

		domString +=		`</div>`;
		domString += 	`</div>`;
		domString += `</div>`;



		productzString += domString;
		}

		printToDom(productzString);
	};

const printToDom = (strang) => {
	$('#project-holder').append(strang);
};


let selectedBlog;


// $('body').on('click', '.project', (event) => {
// 	$(event.target).closest(".project").appendTo('#entireBlog');
// });

module.exports = {setKey, getProjects};
