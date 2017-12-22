class Image {

  static displayImage(json){
    //debugger
    document.getElementById('image').src = json.url
    document.getElementById('likes').innerText = json.like_count
    //console.log(json)
  }

  static addLike(imageId, newLike){
    fetch('https://randopic.herokuapp.com/likes', {
      method: "POST",
      headers: {'Accept': 'application/json',
              'Content-Type': 'application/json'},
      body: JSON.stringify({image_id: imageId, like_count: newLike})
    })
  }

}
