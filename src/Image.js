class Image {
  constructor(imageUrl, imageName, likesCount, comments, localId){
    this.imageUrl= imageUrl,
    this.imageName = imageName,
    this.likesCount = likesCount,
    this.comments = comments,
    this.localId = localId
    Image.all.push(this)
  }


  renderImage(){
    let toAppend = document.getElementById("image")
    let h4 = document.getElementById("name")
    toAppend.src = this.imageUrl
    toAppend.dataset.id = this.localId
    toAppend.id = "image"
    toAppend.height = '120'
    toAppend.width = '120'
    h4.innerText = `${this.imageName}`
  }

}

Image.all = []
