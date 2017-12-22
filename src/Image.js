class Image {
  constructor(obj){
    this.id = obj.id
    this.url = obj.url
    this.name = obj.name
    this.likeCount = obj.like_count
    this.comments = []
    obj.comments.forEach(comment => {
      this.comments.push(new Comment(comment))
    })
    Image.all.push(this)
  }
  addComment(obj){
    const newComment = new Comment(obj)
    this.comments.push(newComment)
  }

  render(){
    const imageTag = document.querySelector('img#image')
    const nameTag = document.querySelector('h4#name')
    const likesTag = document.querySelector('span#likes')
    const commentsUl = document.querySelector('ul#comments')

    imageTag.src = this.url
    nameTag.innerText = this.name
    // console.log(typeof this.likeCount.toString())
    likesTag.innerText = this.likeCount.toString()
    const sortedComments = this.comments.sort((a,b) =>{
      return a.id - b.id
    })
    // console.log(sortedComments)
    // const inner = this.comments.map(comment => {
    //   return comment.render()
    // }).join("")
    const inner = sortedComments.map(comment => {
      return comment.render()
    }).join("")

    // console.log(inner)
    commentsUl.innerHTML = inner

  }

}

Image.all = []
