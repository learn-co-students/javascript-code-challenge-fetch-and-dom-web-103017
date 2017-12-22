class Comment {
  constructor(data){
    this.content = data.content
    this.imageId = data.image_id
    this.id = data.id
    Comment.all.push(this)
  }
}

Comment.all = []

class CommentAdapter {

  static create(comment, imageId){
    const params = {
          "method": "POST",
          "headers": {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          "body": JSON.stringify({content: comment, image_id: imageId})
        }
    fetch('https://randopic.herokuapp.com/comments', params)
      .then(resp => resp.json())
      .then(json => createComment(json))
    }

}


//------------------------
function createComment(jsonObj){
  console.log(jsonObj)
}
