class Adapter {
  static getRandomImage() {
    return fetch('https://randopic.herokuapp.com/images', {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(resp => resp.json())
  }

  static updateLikes(event) {
    let imageId = event.target.dataset.id;
    let content = {image_id: imageId}
    return fetch(`https://randopic.herokuapp.com/likes`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(content)
    })
  }

  static updateComments(event) {
    console.log(event.target);
    let imageId = event.target.dataset.id;
    let content = document.getElementById('comment_input').value;
    let body = {image_id: imageId, content: content}
    return fetch(`https://randopic.herokuapp.com/comments`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(image => document.getElementById('comment_input').value = '')

  }

}
