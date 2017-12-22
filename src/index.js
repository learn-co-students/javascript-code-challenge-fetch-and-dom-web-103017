document.addEventListener('DOMContentLoaded', function() {
  const imageId = 20 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`
  const likeButton = document.getElementById('like_button')
  Adapter.getImage(imageURL).then(imageObj => {
    const newImage = new Image(imageObj)
    console.log(newImage)
    showImage(newImage)
    setLikes(newImage)
  })
  const commentForm = document.getElementById('comment_form')
  commentForm.addEventListener('click', addComment)
  const imageCard = document.getElementById('image_card')
  console.log(imageCard)
  // imageCard.addEventListener('click', )
  likeButton.addEventListener('click', addLike)
})
