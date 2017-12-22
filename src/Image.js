class Image {
  constructor(id, imgURL, name, likeCount, commentsArray) {
    this.id = id
    this.imgURL = imgURL;
    this.name = name
    this.likeCount = likeCount;
    this.commentsArray = commentsArray;
  }

  render(){
    const imgTag = document.getElementById("image")
    const nameTag = document.getElementById("name")
    const likesTag = document.getElementById("likes")
    const commentsUl = document.getElementById("comments")
    imgTag.src = this.imgURL
    nameTag.innerHTML = this.name
    likesTag.innerHTML = this.likeCount
    this.commentsArray.forEach((comment) => {
      commentsUl.innerHTML +=  `<li>${comment.content}</li>`
    })
  }

  //work in progress
  findCommentIdByName(name){
    this.commentsArray.find( (name) => {
      return name === this.name
    })
    return this.id
  }

}
