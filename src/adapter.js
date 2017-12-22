const imageId = 7
class Adapter {
  static imageUrl(){
    return fetch(`https://randopic.herokuapp.com/images/${imageId}`).then(resp => resp.json())
  }

  static likeUrl(){
    return fetch(`https://randopic.herokuapp.com/likes/`).then(resp => resp.json())
  }

  static commentsUrl(){
    return fetch(`https://randopic.herokuapp.com/comments/`).then(resp => resp.json())
  }

  static updateImageLikes(newLikes){
    return fetch(`https://randopic.herokuapp.com/images/${imageId}`,{method: 'PATCH',
    headers: {'Conent-Type': 'application/json',
  'Accept': 'application/json'},
  body: JSON.stringify({'url': newLikes})
  }).then(resp => resp.json())
  }

  static updateImageComments(newcomments){
    return fetch(`https://randopic.herokuapp.com/comments/`,{method: 'PATCH',
    headers: {'Conent-Type': 'application/json',
  'Accept': 'application/json'},
  body: JSON.stringify({'content': newcomments})
  }).then(resp => resp.json())
  }
}
