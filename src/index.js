class TheAdapter
{
  static getImage(url)
  {
    return fetch(url).then(resp => resp.json())
  }
  static postLike(image)
  {
    fetch('https://randopic.herokuapp.com/comments', {
      method: 'post',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({image_id: image.id})
    })

  }

  static postComment(comment)
  {

    return fetch('https://randopic.herokuapp.com/comments', {
      method: 'post',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({content: comment.body, image_id: comment.img_id})
    })

  }

}

function displayImage(url)
{
  console.log(url)
  image.src = `${url}`

}
function addComment(comment, imageObject)
{
  let comments = document.getElementById("comments")
  comments.innerHTML += `<li>${comment.body}</li>`

  // TheAdapter.postComment(comment)

}


function handleLike(newImage, e)
{
  newImage.likes++
  document.getElementById("likes").innerHTML = newImage.likes
  TheAdapter.postLike(newImage)
  console.log(newImage.likes)
}


document.addEventListener('DOMContentLoaded', function() {
  const imageId = 11 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`
  let imageObj
  TheAdapter.getImage(imageURL).then(function(json){
     imageObj = new Image(json.url, json.name,json.id)
    displayImage(imageObj.url)
  })
  // TheAdapter.getComments().then(function(json){
  //   console.log(json)
  // })
  const image = document.getElementById("image")
  console.log(image)
  const imageName = document.getElementById("name")

  const imageCard = document.getElementById("image_card").addEventListener("submit",function(event){
    console.log(event.target)
    let newComment = new Comment(event.target.firstElementChild.value, imageObj.id)
    addComment(newComment, imageObj)

    event.preventDefault()
  })
  console.log(imageCard)
  const likeButton = document.getElementById("like_button").addEventListener("click", function(event){handleLike(imageObj,event)})


})
