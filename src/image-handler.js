class ImageHandler{

  static getImages(){
    return fetch('https://randopic.herokuapp.com/images/').then(resp => resp.json()
  )
  }
}
