class Adapter {
  static getAndSetImage(url){
    return fetch(url)
    .then(resp => resp.json())
    .then(json => {
      const image = new Image(json);
      image.render();
    })
  }

  static addLike(){
    fetch("https://randopic.herokuapp.com/likes", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "image_id": "22"
      })
    })
  }

  static addComment(content){
    fetch("https://randopic.herokuapp.com/comments", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "image_id": "22",
        "content": `${content}`
      })
    })
  }

}
