let blog = [];

$.get('./blog.json').done((data) => {
	blog = data.blogs;
}).fail((error) => {
	console.log(error);
});


const getBlogs = (blogs) => {
	let blogzString ='';

	for (let i = 0; i < blogs.length; i++) {

		let currentBlog = blogs[i];

		let domString = "";

		domString += `<div class= "product3 col-xs-4 blogContainer">`;
		domString +=	`<div class="product2 set-height thumbnail blog">`;
		domString +=		'<div class="product1 caption">'
		domString +=			`<div class="text-uppercase list title"> ${currentBlog.name} </div>`;
		domString +=			`<div class ="list date"> ${currentBlog.date} </div>`;
		domString +=			`<div class ="list blog"> ${currentBlog.blog} </div>`;
		domString +=		`</div>`;
		domString += 	`</div>`;
		domString += `</div>`;



		blogzString += domString;
		}

		printToDom(blogzString);
	}

const printToDom = (string) => {
	$('#blog-holder').html(string);
};


let selectedBlog;


$('#blog-holder').click(() => {
	chooseBlog(event);
  	printSelectedBlog();
});


const chooseBlog = (event) => {
    if (event.target.hasClass("list")) {
      selectedBlog = event.target.parentsUntil("#blog-holder");
    } else if (event.target.parentsUntil("product1")) {
      selectedBlog = event.target.parentsUntil("#blog-holder");
    } else if (event.target.parentsUntil("product2")) {
      selectedBlog = event.target.parentUntil("#blog-holder");
    } else if (event.target.parentUntil("product3")) {
    	selectedBlog = event.target;	
    }
    
   return(selectedBlog);
}

const printSelectedBlog = () => {

  const blogDescription = selectedBlog.childNodes[0].childNodes[0].innerHTML;
  let wholeBlog = $('#entireBlog').html(string);
  wholeBlog.innerHTML = blogDescription;
  
  console.log(blogDescription);
}



 









