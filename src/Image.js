let currentImage

class Image {

  constructor(json) {
    this.comments = json.comments
    this.id = json.id
    this.like_count = json.like_count
    this.name = json.name
    this.url = json.url
    currentImage = this
  }

  // can i move the static anchor nodes into global scope?
    // e.g. image, name, likes, comments, etc.?

  // this is the setup area

  static setup(input) {
    let newThis = new this(input) // this is bad!
    // console.log(input) // comment out later
    // console.log(newThis) // comment out later
    newThis.setURL()
    newThis.setName()
    newThis.setLikes()
    newThis.setComments()
  }

  setURL() {
    let image = document.getElementById('image')
    image.src = this.url
  }

  setName() {
    let name = document.getElementById('name')
    name.innerHTML = `${this.name}`
  }

  setLikes() {
    let likes = document.getElementById('likes')
    likes.innerHTML = `${this.like_count}`
  }

  setComments() {
    for (let comment of this.comments) {
      // let comments = document.getElementById('comments')
      // comments.innerHTML += `
      // <li>${comment.content}</li>`
      Image.addComment(comment.content)
    }
  }

  static addComment(comment) {
    let comments = document.getElementById('comments')
    comments.innerHTML += `
    <li>${comment}</li>
    <button id='delete'>delete</button>`
  }

  // this deals with likes
  addLike() {
    this.like_count++
    this.setLikes()
  }

}
