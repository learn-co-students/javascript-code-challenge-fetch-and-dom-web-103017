class Image {
  constructor(imageObj) {
    this.id = imageObj.id,
    this.url = imageObj.url,
    this.name = imageObj.name,
    this.likeCount = imageObj.like_count,
    this.comments = imageObj.comments,
    Image.all.push(this)

  }

 static imageByid(imageObj) {
   return Image.all.find(image => image.id === imageObj)
 }
}

Image.all = []
