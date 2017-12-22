document.addEventListener('DOMContentLoaded', function() {
  const imageId = 3 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`


  fetch(imageURL)
  .then(response => response.json())
  .then(json => function(){
    Image.displayImage(json)
    Comment.loadComments(json)
  }())

  document.getElementById('like_button').addEventListener('click', function(){
    let currentLike = document.getElementById('likes')
    let newLike = parseInt(currentLike.innerText) + 1
    currentLike.innerText = newLike
    Image.addLike(imageId, newLike)
  })

  document.getElementById('comment_form').addEventListener('submit', function(){
    event.preventDefault()
    let comment = this.elements[0].value
    Comment.addComment(imageId, comment)
  })
})
