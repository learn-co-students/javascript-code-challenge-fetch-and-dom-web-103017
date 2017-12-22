class Comment {
  constructor(obj){
    this.id = obj.id
    this.content = obj.content

    Comment.all.push(this)
  }
  render(){
    return `<li data-id=${this.id}>${this.content}</li>`
  }
}

Comment.all = []
