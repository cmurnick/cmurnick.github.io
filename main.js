var blogs = [];

var blog1 = {
	name: "JavaScript",
	date: "July 31, 2017",
	blog: "This week has been a real bell curve.  I’ve done a lot of pre-work with JavaScript, but when actually tasked to use it and write code on a blank screen, it proved very difficult.  I was lost on Monday. It was better on Tuesday.  We were working in for loops and then we took our HTML and made it into JS so we could easily add items. By Saturday, I was able to write a small program counting how any quarters, dimes, nickels and pennies were in our pocketbook.  It felt really good to see my progress and to feel the difference in my confidence.  I have a lot to learn, but every time I go to class I know more than the class before so I figure I’m going in the right direction. "
};

var blog2 = {
	name: "My Blog 2",
	date: "August 7, 2017",
	blog: "The further we get into JavaScript, the more this struggle has become real.  I know what I want to build, however, coding it correctly has been a different story.  I am going to ask for more practice projects to help solidify these concepts.  It’s been a month since school started and if I look backwards, I have learned so much.  Things that I was struggling with now come naturally.  I’m praying that JavaScript works the same way.  I’m waiting not so patiently for the lightbulb to go on. "
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



