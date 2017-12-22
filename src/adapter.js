class Adapter{
  static getImageInfo(imageURL){
    return fetch(imageURL).then(resp => resp.json())
  }

  static updateLikes(likeURL, imgId){
   return fetch(likeURL,{
     method: 'POST',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({image_id: imgId})
   }).then(resp => resp.json())

 }
 static addComment(commentsURL, imgId, content){
    return fetch(commentsURL,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({image_id: imgId, content: content})
    }).then(resp => resp.json())

  }
}
