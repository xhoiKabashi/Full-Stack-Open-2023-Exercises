const Blog  = require("../models/blog")
const blogRouter = require('express').Router()



blogRouter.get('/api/blogs', (request, response) => {
    Blog
      .find({})
      .then(blogs => {
        response.json(blogs)
      })
  })
  
  blogRouter.post('/api/blogs', (request, response) => {
    const blog = new Blog(request.body)
  
    console.log(request.body.test)
  
    blog
      .save()
      .then(result => {
        response.status(201).json(result)
      })
  })




module.exports = blogRouter