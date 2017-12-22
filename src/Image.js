class Image {
  constructor(data_params){
    this.id = data_params.id;
    this.url = data_params.url;
    this.name = data_params.name;
    this.like_count = data_params.like_count;
    this.comments = data_params.comments;
  }

  createDiv(){
    return `<p><img src="${this.url}" alt="${this.name}"></p>`
  }


  render(){
    const parent = document.getElementById('image');
    const img = this.createDiv();
    parent.outerHTML = img;
  }
}
