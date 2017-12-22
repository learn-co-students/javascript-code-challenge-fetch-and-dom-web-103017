document.addEventListener('DOMContentLoaded', function() {
  const imageId = 14 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`


  fetch(imageURL).then(resp => resp.json()).then(function(json) { console.log(json);  let myImage = new Image(json); myImage.append(); addListeners();})



})

function addListeners(){
  document.getElementById('like_button').addEventListener('click', Image.all[0].like.bind(Image.all[0]))

  document.getElementById('submit_comment_button').addEventListener('click', Image.all[0].addComment.bind(Image.all[0]))

  document.getElementById('comments').addEventListener('click', Image.all[0].deleteComment.bind(Image.all[0]))

}
