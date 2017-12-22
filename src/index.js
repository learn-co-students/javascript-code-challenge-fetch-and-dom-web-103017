document.addEventListener('DOMContentLoaded', function() {
  const imageId = 9 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`
  const img = document.getElementById('image')
  const title = document.getElementById('name')
  const likes = document.getElementById('likes')
  const likeBtn = document.getElementById('like_button')
  const comments = document.getElementById('comments')
  const li = document.createElement("LI")
  const formComment = document.getElementById("comment_form")
  const commentInput = document.getElementById("comment_input")

  fetch(`https://randopic.herokuapp.com/images/${imageId}`)
	.then(resp => resp.json())
  .then(json => getData(json))

  likeBtn.addEventListener('click', function(el){
    likes.innerText++
    fetch(`https://randopic.herokuapp.com/likes`, {
    	  method: 'POST',
        image_id: 9,
    	  headers: {'Accept': 'application/json','Content-Type': 'application/json'}
    })

  })

  formComment.addEventListener('submit', function(el){
    el.preventDefault()
    comments.innerHTML = `<li>${commentInput.value}</li>`
    comments.appendChild(li)

  })









  function getData(json){

      comments.appendChild(li)
      let newLike = json.like_count

      img.src = json.url
      title.innerText = json.name
      newLike = likes.innerText
      li.innerText = json.comments[0].content
  }






})
