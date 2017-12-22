class Comment {
  constructor(image_id, comment_content) {
    this.id = image_id
    this.content = comment_content
    Comment.all.push(this)
  }
  render(){
    return `<li>${this.content}</li>`
  }
}

Comment.all = []
