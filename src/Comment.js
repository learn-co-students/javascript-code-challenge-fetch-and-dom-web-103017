const commentId = 0
class Comment {
  constructor(commentId, content, image_id){
    this.commentId = commentId ++,
    this.content = content,
    this.image_id = image_id
    Comment.all.push(this)
  }

  renderComment(){
    let toAppend = document.getElementById('comments')
    let li = document.createElement("LI")
    let text = document.createTextNode(`${this.content}`)
    let button = document.createElement("button")
    button.innerHTML = "delete comment"
    button.className = "button"
    button.id = "button"
    button.dataset.id = this.commentId
    li.id = this.id
    li.appendChild(text)
    toAppend.appendChild(li)
    toAppend.appendChild(button)
  }


}

Comment.all = []
