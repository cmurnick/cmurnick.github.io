
function executeThisCodeAfterFileLoads() {
	var blogsData = JSON.parse(this.responseText).blogs;
	// console.log("dogs", dogsData);
	getBlogs(blogsData);
	
};

const executeThisCodeIfFileErrors = () =>{
	console.log("Shit's broke");
};

const myBlogs = new XMLHttpRequest();
	myBlogs.addEventListener("load", executeThisCodeAfterFileLoads);
	myBlogs.addEventListener("error", executeThisCodeIfFileErrors);
	myBlogs.open("GET", "blog.json");
	myBlogs.send();



const getBlogs = (blogs) => {
const blogHolder = document.getElementById("blog-holder")

	for (let i = 0; i < blogs.length; i++) {

		let currentBlog = blogs[i];

		let domString = "";

		domString += '<div class= "product3 col-xs-4 blogContainer">';
		domString +=	'<div class="product2 set-height thumbnail blog">';
		domString +=		'<div class="product1 caption">'
		domString +=			'<div class="text-uppercase list title">' + currentBlog.name + '</div>';
		domString +=			'<div class ="list date">' + currentBlog.date + '</div>';
		domString +=			'<div class ="list blog">' + currentBlog.blog + '</div>';
		domString +=		'</div>';
		domString += 	'</div>';
		domString += '</div>';



		blogHolder.innerHTML += domString;
		}


		}




let selectedBlog;

document.getElementById("blog-holder").addEventListener("click", (event) => {
  console.log(event);
  chooseBlog(event);
  printSelectedBlog();
})

const chooseBlog = (event) => {
    if (event.target.classList.contains("list")) {
      selectedBlog = event.target.parentNode.parentNode.parentNode;
    } else if (event.target.parentNode.parentNode.classList.contains("product1")) {
      selectedBlog = event.target.parentNode.parentNode;
    } else if (event.target.parentNode.classList.contains("product2")) {
      selectedBlog = event.target.parentNode;
    } else if (event.target.classList.contains("product3")) {
    	selectedBlog = event.target;	
    }
    
   return(selectedBlog);
}

const printSelectedBlog = () => {

  const blogDescription = selectedBlog.childNodes[0].childNodes[0].innerHTML;
  let wholeBlog = document.getElementById("entireBlog")
  wholeBlog.innerHTML = blogDescription;
  console.log(blogDescription);
}



 









