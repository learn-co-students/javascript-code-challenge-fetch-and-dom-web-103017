document.addEventListener('DOMContentLoaded', function() {
  const imageId = 15 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  fetch(`${imageURL}`)
  .then(resp => resp.json())
  .then(json => {
    Image.imageData(json)
    Comment.commentData(json)
  })

  document.getElementById("like_button").addEventListener('click', function(e){
    e.preventDefault()
    Image.like()
    fetch(`${likeURL}`, {
      method: "POST",
      headers: { 'Accept': 'application/json',
            'Content-Type': 'application/json'
      },
      body: JSON.stringify({image_id: `${imageId}`})

    })
  })
  document.getElementById("submit-comment").addEventListener('click',function(e){
    e.preventDefault()
    let content = document.getElementById("comment_input").value
    Comment.addComment()
    fetch(`${commentsURL}`, {
      method: "POST",
      headers: { 'Accept': 'application/json',
            'Content-Type': 'application/json'
      },
      body: JSON.stringify({image_id: `${imageId}`, content: `${content}`})
    })
  })





})
