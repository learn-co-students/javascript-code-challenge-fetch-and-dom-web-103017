class Comment {

  static addCommentToDOM() {
    let commentsUL = document.getElementById('comments');
    let comment = document.getElementById('comment_input').value;
    let li = document.createElement('li');
    li.innerText = comment;
    commentsUL.appendChild(li)
  }

}
