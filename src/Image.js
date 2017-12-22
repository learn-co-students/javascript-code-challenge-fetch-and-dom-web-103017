

class Image {
  static imageData(json){
    Image.addImage(json.url)
    console.log(json)
    let likeDiv = document.getElementById("likes")
    likeDiv.innerHTML = json.like_count


  }


  static addImage(img){
    let imgDiv = document.getElementById("image")
    console.log(imgDiv.src)
    imgDiv.src = `${img}`

  }


  static like(){
    let likeDiv = document.getElementById("likes")
    let likeCount = parseInt(likeDiv.innerHTML)
    likeCount += 1
    likeDiv.innerText = ""
    console.log(likeDiv.innerText)
    likeDiv.innerText = likeCount
  }

  static postLike(likes){

    let img = document.getElementById("image")
    let imgId = img.dataset.id
    let jsonBody = {image_id: imgId}
    console.log(jsonBody)
    fetch('https://randopic.herokuapp.com/likes'), {
      method: "POST",
      headers: { 'Accept': 'application/json',
            'Content-Type': 'application/json'
      }

    }
    .then(console.log)

  }
}
