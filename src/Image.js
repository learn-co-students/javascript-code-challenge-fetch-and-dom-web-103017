class Image {
  constructor(img) {
    this.id = img.id
    this.url = img.url
    this.name = img.name
    this.likes = img.like_count
    this.comments = img.comments
    Image.all.push(this)
  }
  render() {
    return `<img src="${this.url}" data-id=${this.id} id="image">`
  }
  renderComments() {
    return this.comments.forEach(comment => `<li>${comment.content}</li>`)
  }
}

Image.all = []
