class Image {

  constructor(url, name, likes, comments) {
    this.url = url;
    this.name = name;
    this.likes = likes;
    this.comments = comments;
  }

  static populateDOM(image) {
    let imageURL = document.getElementById('image');
    let name = document.getElementById('name');
    let likes = document.getElementById('likes');

    imageURL.src = image.url;
    name.innerText = image.name;
    likes.innerText = image.like_count;
    Image.displayComments(image);
  }

  static displayComments(image) {
    let commentsUL = document.getElementById('comments');
    let likeButton = document.getElementById('like_button');
    likeButton.setAttribute('data-id', image.id);
    let submitButton = document.getElementById('comment_form');
    submitButton.setAttribute('data-id', image.id);
    image.comments.forEach(function(comment) {
      let li = document.createElement('li');
      li.innerText = comment.content;
      commentsUL.appendChild(li);
    })
  }

  static increaseLikes() {
    let likes = document.getElementById('likes');
    let integerLikes = parseInt(likes.innerText);
    integerLikes += 1;
    //console.log(integerLikes)
    likes.innerText = integerLikes;
  }
  //
  static grabLikeCount() {
    let likes = document.getElementById('likes');
    //console.log(likes.innerText)
    return likes.innerText;
  }

}
