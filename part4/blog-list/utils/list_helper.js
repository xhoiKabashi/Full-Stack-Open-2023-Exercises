
const _ = require('lodash');

const dummy = (blogs) => {

    // ...
    return 1
  }
  

  const totalLikes = (blogs) => {

    return blogs.reduce((acc, blog) => acc + blog.likes, 0);

 
   }

   const mostBlog  = (blogs) => {

    const maxLikes = _.maxBy(blogs, "post").post;

    // Find the blog post(s) with the maximum number of likes
    const favoriteBlogs = _.filter(blogs, {"post": maxLikes});

    // Return the favorite blog post(s)
    return{
        favoriteBlogs,
        maxLikes
    };

 
   }


   const favoriteBlog  = (blogs) => {

    const maxLikes = Math.max(...blogs.map(blog => blog.likes));

    // Find the blog post(s) with the maximum number of likes
    const favoriteBlogs = blogs.filter(blog => blog.likes === maxLikes);

    // Return the favorite blog post(s)
    return favoriteBlogs

   }




  module.exports = {
    dummy, totalLikes, favoriteBlog, mostBlog
  }

