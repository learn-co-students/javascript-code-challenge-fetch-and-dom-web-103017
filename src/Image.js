class Image {
  constructor(json) {
    this.id = json.id
    this.url = json.url
    this.name = json.name
    this.like_count = json.like_count
    this.comments = json.comments
  }
}

  // render()
  // let image = document.getElementById('image');
  //


//   likeButton() {
//     let likes = document.getElementById('likes')
//     likesCounter = 0
//     const likeButton = document.getElementById('like_button')
//     likeButton.addEventListener('click', e => {
//       e.preventDefault()
//       likesCounter++
//       likes.innerHTML = likesCounter
//     })()
//   }
// }
