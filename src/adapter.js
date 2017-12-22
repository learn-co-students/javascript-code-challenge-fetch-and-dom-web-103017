class Adapter {

  static getImage(url) {
    fetch(url)
      .then(resp => resp.json())
      .then(json => Image.setup(json))
  }

  static addLike(url, image) {
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        image_id: image.id // image.id
      })
    }).then(resp => resp.json())
      .then(json => console.log(json))
  }

  static addComment(url, image, comment) {
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        image_id: image.id,
        content: comment
      })
    }).then(resp => resp.json())
      .then(json => console.log(json))
  }

}
