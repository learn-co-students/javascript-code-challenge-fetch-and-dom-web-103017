class Image {
  constructor(json) {
    this.url = json.url
    this.name = json.name
    this.likeCount = json.like_count
    this.comments = json.comments.map(function(comment){return comment.content})

    //for delete functionality
    this.commentsWithIds = json.comments


    Image.all.push(this)
  }

  append(){
    document.getElementById('image').src = this.url
    document.getElementById('likes').innerText = this.likeCount



    this.commentsWithIds.forEach(function(comment){document.getElementById('comments').innerHTML += `<li data-id=${comment.id}>${comment.content} <button type="button" class="delete_comment" data-id=${comment.id}>Delete</button></li>`})
  }

  like(){
    this.likeCount++
    document.getElementById('likes').innerText = this.likeCount


    let myBody = JSON.stringify({image_id: 14})
    fetch('https://randopic.herokuapp.com/likes',
    {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: myBody
    }).then(resp => resp.json()).then(json => console.log(json))

  }

  addComment(event){
    event.preventDefault()
    this.comments.push(document.getElementById('comment_input').value)
    console.log(this.comments)

    // let tmpStr = document.getElementById('comments').innerHTML
    // tmpStr = `<li>${this.comments.slice(-1)}</li>` + tmpStr
    //
    //   document.getElementById('comments').innerHTML = tmpStr

  document.getElementById('comments').innerHTML += `<li>${this.comments.slice(-1)}</li>`

    document.getElementById('comment_input').value = ""

    let myCommentBody = JSON.stringify({image_id: 14, content: this.comments.slice(-1)[0]})

    console.log(myCommentBody)
    fetch('https://randopic.herokuapp.com/comments',
    {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: myCommentBody
    }).then(resp => resp.json()).then(json => console.log(json))

  }

  deleteComment(event){
    if (event.target.className === "delete_comment") {
      alert(event.target.dataset.id)

      this.commentsWithIds.filter(function(comment){comment.id !== event.target.dataset.id})

      console.log(this.commentsWithIds)

      fetch(`https://randopic.herokuapp.com/comments/${event.target.dataset.id}`, {
        method: "DELETE",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }}).then(resp => resp.json()).then(json => console.log(json))

        event.target.parentElement.remove()





      //remove from dom, remove from object, remove from backend.




    }
  }

}

Image.all = []
