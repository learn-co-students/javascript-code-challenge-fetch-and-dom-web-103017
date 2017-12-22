document.addEventListener('DOMContentLoaded', function() {
  const imageId = 10 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  ImageHandler.getImages().then((obj) => {
    let newImage = new Image(obj.url, obj.name, obj.like_count, obj.comments, obj.id)
    newImage.renderImage()
    newImage.comments.forEach(function(comment) {
       let newComment = new Comment(comment.id, comment.content, comment.image_id)
       newComment.renderComment()
       // debugger
     })

  })

  document.getElementById('comments').addEventListener('click', function(event) {
    if (event.target.id === "button"){
      let comment = Comment.all.filter(comment => comment.commentId === parseInt(event.target.dataset.id )[0])
      debugger

    }
  })

  document.getElementById('like_button').addEventListener('click', function(event) {
    let newImageId = document.getElementById('image').dataset.id
    let counter = document.getElementById('likes').innerHTML
    let number = parseInt(counter) + 1
    document.getElementById('likes').innerHTML = `${number}`
    LikeHandler.createLike(`${newImageId}`)
  })


  document.getElementById('submit-button').addEventListener('click', function(event) {
    event.preventDefault()
    let newImageId = document.getElementById('image').dataset.id
    let content = document.getElementById('comment_input').value
    let newComment = new Comment(1, content, parseInt(newImageId))
    newComment.renderComment()
    CommentHandler.postComment(parseInt(newImageId), content)
  })


})
