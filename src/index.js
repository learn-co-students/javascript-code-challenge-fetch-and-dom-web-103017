document.addEventListener('DOMContentLoaded', function() {
  const imageId = 13 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  document.body.addEventListener('click', (e) => {
    if (e.target.id === 'like_button') {
      currentImage.addLike()
      Adapter.addLike(likeURL, currentImage)
    }
  })

  document.body.addEventListener('submit', (e) => {
    e.preventDefault()
  })

  App.addSubmitListener()
  Adapter.getImage(imageURL) // get the Json?


})
