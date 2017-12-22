class Comment {

  static addComment(){
    let input = document.getElementById("comment_input").value
    console.log(input)
    let li = document.createElement('li')
    li.innerHTML = `${input}`
    document.getElementById("comments").append(li)
    

  }

  static commentData(json){
    let commentDiv = document.getElementById("comments")

    json.comments.forEach(function(comment){
      let li = document.createElement('li')
      li.innerHTML = `${comment.content}`
      commentDiv.append(li)
    })
  }
}
