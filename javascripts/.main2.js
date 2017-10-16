let blogs = [];

$.get('/blog.json').done((data) => {
	blog = data.blogs;
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
		domString +=		'<div class="product1 caption">'
		domString +=			`<div class="text-uppercase list title"> ${blog[i].name} </div>`;
		domString +=			`<div class ="list date"> ${blog[i].date} </div>`;
		domString +=			`<div class ="list blog"> ${blog[i].blog} </div>`;
		domString +=		`</div>`;
		domString += 	`</div>`;
		domString += `</div>`;



		blogzString += domString;
		}

		printToDom(blogzString);
	}

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



 









