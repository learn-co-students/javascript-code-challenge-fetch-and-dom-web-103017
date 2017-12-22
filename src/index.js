document.addEventListener('DOMContentLoaded', function() {
  const imageId = 16 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  ImageAdapter.create()

  // loadImage() --would have used this

  let commentBtn = document.getElementById('like_button')

  commentBtn.addEventListener('click', (e) => {
    let image = Image.findImageById(imageId)
    console.log(image);
    image.likes++
    ImageAdapter.update(image)
    document.getElementById('likes').innerHTML = image.likes
    if (image.likes > 0) {LikesAdapter.update(image.likes, imageId)}
  })

  let commentButtn = document.getElementById('comment_submit')

  commentButtn.addEventListener('click', (e) => {
    e.preventDefault()
    let comment = document.getElementById('comment_input').value
    document.getElementById('comments').innerHTML = `<li> ${comment} </li>`
    CommentAdapter.create(comment, imageId)

  })





})


//HELPER METHODS
function loadImage(){
  // I couldn't get this to work properly because Image.all[0] was returning undefined(except not in the browser console, there id DID contain my one loaded image) but this is how I would have loaded the image had I had time to debug
  let newImage = Image.all[0]
  document.getElementById('image').innerHTML = ` <img src=${newImage.url}> `
  document.getElementById('name').innerHTML = `<h3> ${newImage.name} </h3>`
  document.getElementById('likes').innerHTML = newImage.likes
  })

}
