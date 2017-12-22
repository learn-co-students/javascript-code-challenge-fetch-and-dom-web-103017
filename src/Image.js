class Image {
  constructor(data){
    this.id = data.id
    this.url = data.url
    this.name = data.name
    this.like_count = data.like_count
    this.comments = Comment.all // is an array of objects EDIT

    Image.all.push(this)
  }

  static fetchImage(){
    // console.log(Adapter.imageUrl())
    Adapter.imageUrl().then(img => {
      let image = document.querySelector("div#image_card.card.col-md-4")
      // console.log(image);a
      document.querySelector("img#image").src = `${img.url}`
      document.querySelector("h4#name").innerText = `${img.name}`
      document.querySelector("span#likes").innerText = `${parseInt(img.like_count)}`
    })
  }

}

Image.all = []
