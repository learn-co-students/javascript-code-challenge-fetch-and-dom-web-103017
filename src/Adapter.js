const imageId = 6 //Enter your assigned imageId here
const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
// const likeURL = `https://randopic.herokuapp.com/likes/`
// const commentsURL = `https://randopic.herokuapp.com/comments/`


const commentsURL = `https://randopic.herokuapp.com/images/${imageId}`/

class Adapter {
  constructor() {

  }

  static getImages () {
    fetch(imageURL)
    .then(resp => resp.json())
    .then(json => Image.createImage(json))
  }
}
