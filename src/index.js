document.addEventListener('DOMContentLoaded', function() {
  const imageId = 7 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  Image.fetchImage()

  document.querySelector("#like_button").addEventListener("click", () => {

  document.querySelector("span#likes").innerHTML = parseInt(document.querySelector("span#likes").innerHTML) + 1
  Adapter.updateImageLikes(document.querySelector("span#likes").innerHTML)

  });

  document.querySelector("input#submit").addEventListener("click", (e) => {
    e.preventDefault()
    // console.log(document.querySelector("input#comment_input").value);
    let comment = document.querySelector("input#comment_input").value
    console.log(comment);
    document.querySelector("ul#comments").innerHTML += `
    <li>${comment}</li>`

    Adapter.updateImageComments(document.querySelector("input#comment_input").value)

  })



})
