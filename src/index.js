function appendNote(response) {
  const container = document.createElement('div');
  container.setAttribute('id', 'image')
  container.innerHTML = `<img src="${response}">`
  document.body.insertBefore(container, document.body.firstChild)

}





function likeCount(like) {
  return fetch(like, {
    method: 'POST',
    body: JSON.stringify({image_id: like}),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(response => response.json());

}





document.addEventListener('DOMContentLoaded', function() {
  const imageId = 21 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  // const container = document.getElementById('image_content');

//getting image onto screen
  fetch(`https://randopic.herokuapp.com/images/${imageId}`)
    .then(response => response.json())
    .then(obj => appendNote(obj.url))



//likebutton
    let like = document.getElementById('like_button');
    let like_count = 0;
    like.addEventListener('click', function(event) {
      like_count += 1;
      document.getElementById('likes').innerText = like_count;
      likeCount(likeURL).appendChild();
    })

//comments
  let comment_form = document.getElementById('comment_form');

  comment_form.addEventListener('submit', function(event) {
    event.preventDefault()
    let comment = event.target.children[0].value;
    let ul = document.getElementById('comments');
    let li = document.createElement('li')
    li.innerText = comment;
    ul.appendChild(li);
  })

});
