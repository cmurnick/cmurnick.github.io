var blogs = [];

var blog1 = {
	name: "My Blog 1",
	date: "July 22, 2017",
	blog: "One Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. "
};

var blog2 = {
	name: "My Blog 2",
	date: "July 22, 2017",
	blog: "Two Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. "
};

var blog3 = {
	name: "My Blog 3",
	date: "July 22, 2017",
	blog: "Three Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. "
};

var blog4 = {
	name: "My Blog 4",
	date: "July 22, 2017",
	blog: "Four Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. "
};

var blog5 = {
	name: "My Blog 5",
	date: "July 22, 2017",
	blog: "Five Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. "
};


blogs.push(blog1);
blogs.push(blog2);
blogs.push(blog3);
blogs.push(blog4);
blogs.push(blog5);

console.log("Blogs:", blogs);

var blogHolder = document.getElementById("blog-holder")

for (var i = 0; i < blogs.length; i++) {

	var currentBlog = blogs[i];

	var domString = "";

domString += '<div class="blogContainer">';
domString +=		'<section class="blog">';
domString +=			'<header>';
domString +=				'<h4 class="title">' + currentBlog.name + '</h4>';
domString +=				'<h5 class ="date">' + currentBlog.date + '</h5>';
domString +=			'</header>';

domString +=			'<div class="info">';
domString +=				'<p>' + currentBlog.blog + '</p>';
domString +=			'</div>';
domString +=		'</section>';
domString +=	'</div>';



blogHolder.innerHTML += domString;
}

console.log("domString from for loop", domString);



