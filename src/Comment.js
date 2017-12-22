let allComments = []

class Comment {
  constructor(json) {
    this.id = json.id
    this.content = json.content
    this.imageId = json.image_id
    allComments.push(this)
  }

  ///static methods

  static all () {
    return [...allComments]
  }

  static createComment(json) {
    const commentList = document.getElementById('comments')

    for (let i = 0; i < json.length; i++) {
      let commentLi = document.createElement('li')
      commentLi.innerHTML = json[i].content
      commentList.appendChild(commentLi)
    }


  }





  /////instance methods


}
