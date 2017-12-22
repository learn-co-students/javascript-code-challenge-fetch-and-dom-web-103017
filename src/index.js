document.addEventListener('DOMContentLoaded', function() {
  const imageId = 8
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  //Hi! lots of issues with this code, not everything is working. I did my best to write out the functions as if they were working

  //get image data from API, create instance of image, send to renderImage function
  fetch(imageURL).then(resp => resp.json())
    .then(img => new Image(img))
    .then(img => renderImage(Image.all))

  //select entire image container
  const imageContainer = document.getElementById("image_card")
  imageContainer.addEventListener("click", e => likeImage(e))
  imageContainer.addEventListener("submit", e => createComment(e))

  const imageCard = document.getElementById("image")

  function renderImage(img){
    let image = Image.all[0].render()
    imageCard.outerHTML = image
    renderImageName(img)
  }

  const imageTitleContainer = document.getElementById("name")

  function renderImageName(img){
    let imageTitle = Image.all[0].name
    imageTitleContainer.innerHTML = imageTitle
    renderImageLikes(img)
  }

  const imageLikesContainer = document.getElementById("likes")

  function renderImageLikes(img){
    let imageLikes = Image.all[0].likes
    imageLikesContainer.innerText = imageLikes
    renderImageComments(img)
  }

  const imageCommentsContainer = document.getElementById("comments")
  function renderImageComments(img){
    let imageComments = Image.all[0].renderComments()
    imageCommentsContainer.appendChild(imageComments)
  }

  // if the like button is clicked, increment the innertext of the imageLikesContainer by 1.
  // Need to get the current number of likes, which is scoped within a function. Issue with taking it out of the
  // function is async/promise
  function likeImage(e){
    if (e.target.id === "like_button"){
      imageLikesContainer.innerText = imageLikes
      updateLikes()
    }
  }

  //after liking image on frontend, send patch to backend to update likes in DB
  function updateLikes(){
    let like_count = imageLikesContainer.innerText
    fetch('https://randopic.herokuapp.com/likes/', {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify( {image_id: `${}`, like_count: `${like_count}`})
    })
  }

  let image_id = imageCard.dataset.id
  let comment_content = document.getElementById("comment_input").value
  //if comment submit clicked, create a new comment on frontend, then call
  //createComment in DB to
  function createComment(e){
    e.preventDefault()
    if (e.target.id === "comment_form"){
      //send to comment class to create new instance
      new Comment(image_id, comment_content)
      //comment class will have render method to generate <li>
      //append to DOM here

    }
  }

  function createCommentDB(){
    fetch('https://randopic.herokuapp.com/comments', {
    method: POST,
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
    body: JSON.stringify( {image_id: `${image_id}`, content: `${comment_content}`}
  })
}

})
