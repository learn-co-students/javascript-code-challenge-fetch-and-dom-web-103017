let allImages = []

class Image {
  constructor(json) {
    this.id = json.id
    this.url = json.url
    this.name = json.name
    this.likeCount = json.like_count
    this.comments = json.comments
    allImages.push(this)
  }

///static methods

  static all () {
    return [...allImages]
  }




///this can be two separate methods, or I might not need to even create an image...

///also, some of this should be instance methods, but do we really need any class methods, since there's only one image?
  static createImage (json) {
    let image = document.getElementById('image')
    image.src = json.url

    let name = document.getElementById('name')
    name.innerHTML = json.name

    let likes = document.getElementById('likes')
    likes.innerHTML = json.like_count
    //do I need this?
    let newImage = new Image(json)
  }

  ////instance methods
  addLikes() {

  }

  // render () {
  //   return
  // }

}
