class Comment {
  
}


function add_comment() {
  let comment = document.getElementById("comment_input").value

  document.getElementById("comments").innerHTML += `<li>${comment}</li><button id="delete">Delete</delete>`

  Adapter.post_comment(4, comment).then(function(res) {console.log(res)})
}

function delete_comment() {
  let idDelete = event.target.id.slice(6, 11)

  // let commentDelete = document.getElementById(idDelete)
  // commentDelete.parentNode.removeChild(commentDelete)
  Adapter.delete_comment(idDelete)

  // need to refactor code for delete button ids when adding comments to include id of the comment
  // also need to refactor code for adding comments to make them children elements
}