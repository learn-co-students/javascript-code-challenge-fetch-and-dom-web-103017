class Adapter {
  static getImage(url) {
    return fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(resp => resp.json())
  }

  static updateImage(image, likes) {
    fetch(`https://randopic.herokuapp.com/images/${imageId}`, {
      image_id: 20,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({})
      })
  }
}
