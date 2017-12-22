class LikeHandler{

  static createLike(id){
    return fetch(`https://randopic.herokuapp.com/likes/`,
      {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      },
      body:JSON.stringify({image_id: id})
  }).then(resp => resp.json())
}
}
