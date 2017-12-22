testImage = ""



class Adapter {
  static getImage() {
    fetch('https://randopic.herokuapp.com/images/17')
    .then (res => res.json())
    .then(json => this.buildImage(json))
  }

  static buildImage(json){
    testImage = new Image(json)
    const image = document.getElementById('image_content')
    let commentHTML = ""
    if (testImage.likes === undefined) {
      testImage.likes = 0
    }
    testImage.comments.forEach(x => commentHTML+= `<li>${x.content}</li>`)

    image.innerHTML = `<img src=${testImage.url} id="image" data-id/>
          <h4 id=${testImage.name}></h4>
          <span>Likes:
            <span id="likes">${parseInt(testImage.likes)}</span>
          </span>
          <button id="like_button">Like</button>
          <form id="comment_form">
            <input id="comment_input" type="text" name="comment" placeholder="Add Comment"/>
            <input type="submit" value="Submit"/>
          </form>
          <ul id="comments">
            ${String(commentHTML)}
          </ul>`

  };

};

Adapter.getImage()


document.addEventListener('DOMContentLoaded', function() {
  const imageId = 17 //Enter your assigned imageId here
  const imageURL = 'https://randopic.herokuapp.com/images/17'
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  const likeValue = document.getElementById("likes")


//this isn't working and making me a little crazy... not sure how order impacted
  document.getElementById("like_button").addEventListener("click", function(){

    document.getElementById("likes").innerText = String(parseInt(document.getElementById("likes").innerText) +1)
  });

  document.getElementById("comment_form").addEventListener("submit", function(){
    document.getElementById("comments").innerText += `<li>${    document.getElementById("comment_input").value}</li>`
  });

});
