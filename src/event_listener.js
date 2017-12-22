class EventListener {
  static addImage(){
    const img = document.getElementById("image")
    //img link - send request, display it in the image div
    // add image inside of div
  }

  static AddLikes() {
    const likeButton = document.getElementById("like_button")
    const likes = parseInt(document.getElementById("likes").value) //number  - has to be converted
    console.log(likes);
    likeButton.addEventListener("click", e =>
    e.preventDefault()
    // likes.innerHTML = ++likes // has to be string
    // increase count by 1
    //like_count
  )
  }

  static addComment() {
    const submitForm = document.getElementById("comment_form")
    const comment = document.getElementById("comment_input").value

    div = document.getElementById("image_card")
      submitForm.addEventListener("submit", e => {
        e.preventDefault();
        div.appendChild(comment);
        comment.innerHTML += comment
      })
      //id = ....
      deleteComment(id);
  }

    static deleteComment() {
      document.getElementById("delete").addEventListener("click", e => {
        Adapter.deleteComment(id)
      })
    }

}
