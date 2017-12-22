class Adapter{
  static fetchImgOnLoad(imageURL){
    return fetch(imageURL)
      .then(resp => resp.json())
  }



}
