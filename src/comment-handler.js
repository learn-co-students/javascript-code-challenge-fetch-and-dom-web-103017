class CommentHandler{

  static postComment(id, content){
    return fetch(`https://randopic.herokuapp.com/comments/`, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      },
      body:JSON.stringify({image_id: id, content: content})
    }
  ).then(resp => resp.json())
  }

  static getComments(imageId){
    return fetch(`https://randopic.herokuapp.com/images/${imageId}`).then(resp => {resp.json()})
  }


  static deleteComment(commentId){
    return fetch(`https://randopic.herokuapp.com/comments/${commentId}`, {
      method: 'DELETE',
      headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      },
      body:JSON.stringify({image_id: id, content: content})
    }
  )
  }

}
