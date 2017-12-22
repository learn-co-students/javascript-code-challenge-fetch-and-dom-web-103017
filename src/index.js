document.addEventListener('DOMContentLoaded', function() {
  const imageId = 22 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`
  Adapter.getAndSetImage(imageURL);
  EventListener.likeListener();
  EventListener.commentListener();
})
