document.addEventListener('DOMContentLoaded', function() {
  const imageId = 6 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  // const likeURL = `https://randopic.herokuapp.com/likes/`
  // const commentsURL = `https://randopic.herokuapp.com/comments/`


  const commentsURL = `https://randopic.herokuapp.com/images/${imageId}`/



///////Should I make an adapter class?


///Get images
  fetch(imageURL)
  .then(resp => resp.json())
  .then(json => Image.createImage(json))

///Get comments
  fetch(imageURL)
  .then(resp => resp.json())
  .then(json => Comment.createComment(json.comments))
  // .then(json => Comment.createComment(json))

///Update likes
/// didn't finish this
// Why wasn't there an adapter class?
// don't show us a programming pattern an then change things at the last minute 
  fetch(imageURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(json)
  })

  .then(resp => resp.json())
  .then()


})
