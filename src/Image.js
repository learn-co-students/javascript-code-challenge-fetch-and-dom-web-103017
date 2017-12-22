class Image {
  constructor(dataHash){
    this.url = dataHash.url
    this.id = dataHash.id
    this.name = dataHash.name
    this.likes = 0
    Image.all.push(this)
  }

}

Image.all = []



Image.findImageById = (id) => {
  return Image.all.find((i) => {return i.id === 16})
}

class ImageAdapter {

  static create(){
    const params = {
          "method": "GET",
          "headers": {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
      }
    return fetch('https://randopic.herokuapp.com/images/16', params)
      .then(resp => resp.json())
      .then(json => createImageObj(json))
    }

    static update(image){
      const params = {
            "method": "PATCH",
            "headers": {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
          "body": JSON.stringify({likes: image.likes})
      }
      return fetch('https://randopic.herokuapp.com/images/16', params)
    }
}

class likesAdapter{
  static create(num, imageId){
    const params = {
          "method": "POST",
          "headers": {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
        }
          "body": JSON.stringify({likes: num, image_id: imageId})
      return fetch('https://randopic.herokuapp.com/likes', params)
  }

  static update(num, imageId)
  const params = {
        "method": "POST",
        "headers": {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      }
        "body": JSON.stringify({likes: num, image_id: imageId})
    return fetch(`https://randopic.herokuapp.com/likes/${imageId}`, params)

}

//---------------------

function createImageObj(json){
  let newImage = new Image(json)
}
