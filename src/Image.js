class Image {

}


function add_like() {
  let likes = document.getElementById("likes").innerText
  likes = parseInt(likes) + 1
  document.getElementById("likes").innerText = likes;

  Adapter.post_likes(4, likes)
}