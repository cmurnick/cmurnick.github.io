// var blogs = [];

// var blog1 = {
// 	name: "JavaScript",
// 	date: "July 31, 2017",
// 	blog: "This week has been a real bell curve.  I’ve done a lot of pre-work with JavaScript, but when actually tasked to use it and write code on a blank screen, it proved very difficult.  I was lost on Monday. It was better on Tuesday.  We were working in for loops and then we took our HTML and made it into JS so we could easily add items. By Saturday, I was able to write a small program counting how any quarters, dimes, nickels and pennies were in our pocketbook.  It felt really good to see my progress and to feel the difference in my confidence.  I have a lot to learn, but every time I go to class I know more than the class before so I figure I’m going in the right direction. "
// };

// var blog2 = {
// 	name: "The struggle",
// 	date: "August 7, 2017",
// 	blog: "The further we get into JavaScript, the more this struggle has become real.  I know what I want to build, however, coding it correctly has been a different story.  I am going to ask for more practice projects to help solidify these concepts.  It’s been a month since school started and if I look backwards, I have learned so much.  Things that I was struggling with now come naturally.  I’m praying that JavaScript works the same way.  I’m waiting not so patiently for the lightbulb to go on. "
// };

// var blog3 = {
// 	name: "Working in a Group",
// 	date: "August 14, 2017",
// 	blog: "We had our first group project where we were all pushing our individual pages to GitHub. Our group didn’t have a ton of merge conflicts because we planned well and each had our own CSS and JS files forour individual pages. We have a great group, so I feel like we did pretty well. We divided and conquered pretty well. We could have been more consistent on the styling of each page, but overall we did ok for our first group project."
// };

// var blog4 = {
// 	name: "My Blog 4",
// 	date: "July 22, 2017",
// 	blog: "Four Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. "
// };

// var blog5 = {
// 	name: "My Blog 5",
// 	date: "July 22, 2017",
// 	blog: "Five Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. "
// };
function executeThisCodeAfterFileLoads (){
	var blogsData = JSON.parse(this.responseText).blogs;
	// console.log("dogs", dogsData);
	getBlogs(blogsData);
	
};

function executeThisCodeIfFileErrors() {
	console.log("Shit's broke");
};

var myBlogs = new XMLHttpRequest();
	myBlogs.addEventListener("load", executeThisCodeAfterFileLoads);
	myBlogs.addEventListener("error", executeThisCodeIfFileErrors);
	myBlogs.open("GET", "blog.json");
	myBlogs.send();

// blogs.push(blog1);
// blogs.push(blog2);
// blogs.push(blog3);
// blogs.push(blog4);
// blogs.push(blog5);



function getBlogs(blogs) {
var blogHolder = document.getElementById("blog-holder")

	for (var i = 0; i < blogs.length; i++) {

		var currentBlog = blogs[i];

		var domString = "";

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

		console.log("domString from for loop", domString);
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
  var wholeBlog = document.getElementById("entireBlog")
  wholeBlog.innerHTML = blogDescription;
  console.log(blogDescription);
}



 // const blogDescription = selectedBlog.childNodes[0].childNodes[0].childNodes[0].childNodes[2].innerHTML;









