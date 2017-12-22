class Comment {
  constructor(data_params){
    this.id = data_params.id;
    this.content = data_params.content;
    this.image_id = data_params.image_id;
    Comment.all.push(this);
  }

  createTag(text){
    return `<li>${this.content} <button data-id="">Delete</button></li>`
  }

  render(){
    const ul = document.getElementById('comments');
    const tag = this.createTag();
    ul.innerHTML += tag;
  }

}

Comment.all = [];
