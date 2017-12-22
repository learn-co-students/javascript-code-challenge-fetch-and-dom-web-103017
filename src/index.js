document.addEventListener('DOMContentLoaded', function() {

  const imageId = 19 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`
  const likeButton = document.getElementById("like_button")
  const likesTag = document.getElementById("likes")
  const commentsUl = document.getElementById("comments")
  const commentForm = document.getElementById("comment_form")

  Adapter.fetchImgOnLoad(imageURL)
    .then(handleLoad)
  // fetch(imageURL)
  //   .then(resp => resp.json())
  //   .then( handleLoad
    // data => {
      // const imgTag = document.getElementById("image")
      // imgTag.src = data.url
      // const nameTag = document.getElementById("name")
      // nameTag.innerHTML = data.name
      // likesTag.innerHTML = data.like_count
      // data.comments.forEach((comment) => {
      //   commentsUl.innerHTML +=  `<li>${comment.content}</li>`
      // })
    // }
  // )

  likeButton.addEventListener("click", (event) =>{
      event.preventDefault()
      // likesTag.innerHTML = parseInt(likesTag.innerHTML) + 1
      //
      // fetch(likeURL,{
      //   method: "POST",
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json'
      //     },
      //   body: JSON.stringify({image_id: 19})
      // })
      handleNewLike(imageId, likeURL)
  })

  commentForm.addEventListener("submit", (event) =>{
      event.preventDefault()
      let input = document.getElementById("comment_input").value
      commentsUl.innerHTML =  `<li>${input}</li>`.concat(commentsUl.innerHTML)
      commentForm.reset()

      fetch(commentsURL,{
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          },
        body: JSON.stringify({image_id: 19, content: input})
      })
  })
})
