class Image {
  constructor(data){
    this.url = data["url"]
    this.name = data["name"]
    this.likes = data["likes"]
    this.comments = data["comments"]
    Image.all.push(this)
  }

}

Image.all = []
