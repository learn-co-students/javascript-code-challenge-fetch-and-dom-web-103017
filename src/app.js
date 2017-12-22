class App {

  static addClickListeners() {
    document.body.addEventListener('click', (e) => {
      if (e.target.id === 'like_button') {
        currentImage.addLike()
        Adapter.addLike(likeURL, currentImage)
      } else {
        console.log(e)
        alert()
        // why aren't any of these tripping?
      }
    })
  }

  static addSubmitListener() {
    document.body.addEventListener('submit', (e) => {
      e.preventDefault()
      if (e.target.id === 'comment_form'){
        let inputVal = e.target.children[0].value
        console.log(inputVal)
        // add the comment
        Image.addComment(inputVal)

        // persist the comment
        Adapter.addComment(`https://randopic.herokuapp.com/comments/`, currentImage, inputVal)

        // Adapter.addComment(commentsURL, currentImage, inputVal)
          // commentsURL isn't being referenced somehow
          // *** WHY ***

        // clear the input
        inputVal = ''
      }
    })
  }

}
