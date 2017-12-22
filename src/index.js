document.addEventListener('DOMContentLoaded', function() {
  const imageId = 12 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  // Adapter.getAndSetImage(imageURL)

  function getAndSetImage() {
    fetch(imageURL)
    .then(resp => resp.json())
    .then(json => {
      debugger
      let getImage = new Image(json)
      console.log(getImage)
    })
  }
  getAndSetImage()

  //getAndSetImage()

  (function likeButton() {
    let likes = document.getElementById('likes')
    likesCounter = 0
    const likeButton = document.getElementById('like_button')
    console.log(likeButton)
    likeButton.addEventListener('click', e => {
      e.preventDefault()
      likesCounter++
      likes.innerHTML = likesCounter
    })
  })()

  function postLikes() {
    fetch('https://randopic.herokuapp.com/likes', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify ({
        image_id: `${imageId}`
      })
    })
  }
  postLikes()

  function addComment() {
    let commentForm = document.getElementById('comment_form')
    commentForm.addEventListener("submit", e => {
      e.preventDefault();
      const comment = document.getElementById('comment_input').value;
      let ul = document.getElementById('comments')
      let li = document.createElement('li')
      li.innerHTML = comment
      ul.append(li)
    })
  }
  addComment()



})
