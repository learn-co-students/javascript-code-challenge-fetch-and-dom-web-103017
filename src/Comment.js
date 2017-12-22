class Comment {

  static addComment(imageId, comment){
    Comment.displayComment(comment)
    fetch('https://randopic.herokuapp.com/comments', {
      method: "POST",
      headers: {'Accept': 'application/json',
              'Content-Type': 'application/json'},
      body: JSON.stringify({image_id: imageId, content: comment})
    })
  }
  static displayComment(comment){
    //debugger
    // document.getElementById('comments').innerHTML += `<li>${comment}</li><br>`
    this.render(comment)
  }

  static loadComments(json){
    json.comments.forEach(function(comment){
      //document.getElementById('comments').innerHTML += `<li>${comment.content}</li><br>`
      Comment.render(comment.content, comment.id)
    })
  }

  static render(comment, id=Math.floor((Math.random() * 9999) + 1000)){
    document.getElementById('comments').innerHTML += `<li id=${id}>${comment}</li><br>`
  }
}
