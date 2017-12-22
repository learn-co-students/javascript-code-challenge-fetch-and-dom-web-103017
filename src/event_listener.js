class EventListener {

  static likeListener(){
    const likeButton = document.getElementById('like_button');
    const likes = document.getElementById('likes');
    let num = parseInt(document.getElementById('likes').innerHTML);
    likeButton.addEventListener("click", e => {
      num = num + 1;
      likes.innerHTML = num
      Adapter.addLike();
    })
  }

  static commentListener(){
    const commentForm = document.getElementById('comment_form');
    commentForm.addEventListener("submit", e => {
      e.preventDefault();
      const content = document.getElementById('comment_input').value;
      const comment = new Comment({"content": content})
      comment.render();
      Adapter.addComment(content);
    })
  }

}
