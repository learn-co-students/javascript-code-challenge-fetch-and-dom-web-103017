// class Adapter{
//   static getImageInfo(imageURL){
//     return fetch(imageURL).then(resp => resp.json())
//   }
//
//   static updateLikes(likeURL, imgId){
//    return fetch(likeURL,{
//      method: 'POST',
//      headers: {
//        'Accept': 'application/json',
//        'Content-Type': 'application/json'
//      },
//      body: JSON.stringify({image_id: imgId})
//    }).then(resp => resp.json())
//
//  }
//  static addComment(commentsURL, imgId, content){
//     return fetch(commentsURL,{
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({image_id: imgId, content: content})
//     }).then(resp => resp.json())
//
//   }
// }

document.addEventListener('DOMContentLoaded', function() {
  const imageId = 18 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`
  // const imageTag = document.querySelector('img#image')
  // const nameTag = document.querySelector('h4#name')
  // const likesTag = document.querySelector('span#likes')
  const likeButton = document.querySelector('button#like_button')
  const commentInput = document.querySelector('input#comment_input')
  const submitButton = document.querySelector('input[type="submit"]')
  // const commentsUl = document.querySelector('ul#comments')

  Adapter.getImageInfo(imageURL).then(img => {
    const newImg = new Image(img)
    // console.log(newImg)
    // imageTag.src = newImg.url
    // nameTag.innerText = newImg.name
    // // console.log(typeof newImg.likeCount.toString())
    // likesTag.innerText = newImg.likeCount.toString()
    // const inner = newImg.comments.map(comment => {
    //   return comment.render()
    // }).join("")
    // // console.log(inner)
    // commentsUl.innerHTML = inner
    newImg.render()
  })

  likeButton.addEventListener('click', e => {
    e.preventDefault()
    const image = Image.all[0]
    // console.log(image)
    image.likeCount += 1
    // console.log(image.likeCount)
    image.render()
    Adapter.updateLikes(likeURL,imageId)
  })

  submitButton.addEventListener('click', e => {
    e.preventDefault()
    //I am doing the commit to the API first because I want it to increment by commentID instead of doing it in memory adn being inconsistent with API implementation
    if (commentInput.value) {
      Adapter.addComment(commentsURL, imageId, commentInput.value).then(comment => {
        const image = Image.all[0]
        image.addComment(comment)
        image.render()
        commentInput.value = ""
      })
    }

  })

})
