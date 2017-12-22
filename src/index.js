document.getElementById('like_button').addEventListener('click',  updateLikes);
document.getElementById('comment_form').addEventListener('submit', function(event) {
  event.preventDefault();
  Comment.addCommentToDOM();
  Adapter.updateComments(event);
});

  //console.log(currentLikes);
  //Adapter.updateLikes(event);

document.addEventListener('DOMContentLoaded', function() {
  const imageId = 2 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`
  Adapter.getRandomImage().then(image => Image.populateDOM(image));
})


function updateLikes() {
  Image.increaseLikes();
  let likeCount = Image.grabLikeCount();
  Adapter.updateLikes(event);
}
