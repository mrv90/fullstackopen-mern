import React, { useState } from 'react'
import PropTypes from 'prop-types'

const NewBlog = ({ createBlog, newBlogVisibility }) => {
  const [newTitle, setNewTitle ] = useState('')
  const [newAuthor, setNewAuthor ] = useState('')
  const [newUrl, setNewUrl ] = useState('')

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value)
  }

  const handleAuthorChange = (event) => {
    setNewAuthor(event.target.value)
  }

  const handleUrlChange = (event) => {
    setNewUrl(event.target.value)
  }

  const addNewBlog = (event) => {
    event.preventDefault()

    createBlog({
      title: newTitle,
      author: newAuthor,
      url: newUrl
    })

    setNewTitle('')
    setNewAuthor('')
    setNewUrl('')
  }

  return (
    newBlogVisibility ?
      <form onSubmit = {addNewBlog}>
        <div>
          <div>
            <label>title:</label>
            <input type="text" value={newTitle} onChange={handleTitleChange} placeholder='the title of blog'></input>
          </div>
          <div>
            <label>author:</label>
            <input type="text" value={newAuthor} onChange={handleAuthorChange} placeholder='the author of blog'></input>
          </div>
          <div>
            <label>url:</label>
            <input type="text" value={newUrl} onChange={handleUrlChange} placeholder='the url of blog'></input>
          </div>
          <button id='create-blog'>create</button>
        </div>
      </form> : ''
  )
}

NewBlog.propTypes = {
  createBlog: PropTypes.func.isRequired
}

export default NewBlog