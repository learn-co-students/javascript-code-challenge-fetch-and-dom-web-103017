class Adapter {

  static loadPicture() {
    const imageId = 4 //Enter your assigned imageId here
    const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
    const likeURL = `https://randopic.herokuapp.com/likes/`
    const commentsURL = `https://randopic.herokuapp.com/comments/`

    fetch(`https://randopic.herokuapp.com/images/${imageId}`)
    .then(function(resp) {return resp.json()})
    .then(function (json) {

      document.getElementById("image").src = `${json.url}`
      document.getElementById("name").innerText = `${json.name}`
      document.getElementById("likes").innerText = `${json.like_count}`
      json.comments.forEach(function(el) {
        document.getElementById("comments").innerHTML += `<li id=${el.id}>${el.content}</li><button id="delete ${el.id}">Delete</delete>`
      })
    })
  }

  static post_likes(id, likes) {
    return fetch("https://randopic.herokuapp.com/likes", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({like_count: `${likes}`, image_id: `${id}`})
    })
  }

  static post_comment(id, comment) {
    return fetch("https://randopic.herokuapp.com/comments", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({image_id: `${id}`, content: `${comment}`})
    })
  }


  static delete_comment(id) {
    return fetch(`https://randopic.herokuapp.com/comments/${id}`, {
      method: "DELETE"
    })
  }















}