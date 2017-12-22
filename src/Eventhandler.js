// function clickHandle(domElement) {
//   if (event.target.id === 'like_button') {
//     event.preventDefault()
//     console.log(1)
//   }
// }

//


function showImage(image) {
  const img = document.getElementById('image')
  const div = document.getElementById('image_card')
  div.dataset.id = image.id
  img.src = image.url
  img.id = image.id
}

function setLikes(image) {
  const likes = document.getElementById('likes')
  likes.innerHTML = image.likeCount
}

function addLike(event) {
  event.preventDefault()
  const divIv = document.getElementById('')
  const likes = document.getElementById('likes')
  likes.innerHTML = parseInt(likes.innerHTML) + 1
  const imageObj = Image.findById()
}

function addComment(event) {
  event.preventDefault()
  const ul = document.getElementById('comments')
  const input = document.getElementById('comment_input').value
  const li = document.createElement('li')
  li.innerHTML = input
  ul.appendChild(li)
}
