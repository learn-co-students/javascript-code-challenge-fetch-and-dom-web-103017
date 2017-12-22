class Comment {
  constructor(data){
    this.content = data.content

    Comment.all.push(this)
  }
}
Comment.all = []
