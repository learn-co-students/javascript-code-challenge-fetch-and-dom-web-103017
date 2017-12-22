function handleLoad(data){
  img = new Image(data.id, data.url, data.name, data.like_count, data.comments)
  img.render()
}

//not updating JS model...
function handleNewLike(imageId, likeURL){
  const likesTag = document.getElementById("likes")
  likesTag.innerHTML = parseInt(likesTag.innerHTML) + 1

  fetch(likeURL,{
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
    body: JSON.stringify({image_id: imageId})
  })

}
