
class Comment {

  constructor(data){
    this.body = data.comments.name
    this.id = data.comments.id
    commentAll.push(this)
  }


}
let commentAll = []


// new Comment({comments: {name : 'cool', id: 1}})
