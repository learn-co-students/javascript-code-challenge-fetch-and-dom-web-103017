class Comment {
  constructor(data) {
    this.id = data.id;
    this.content = data.content;
    this.imageID = data.image_id;
    this.all.push(this)
  }
  render(){
    return `<div id="${this.id}">${this.content}<div><button id="delete">Delete</button>`
  }
}

Comment.all = []

// {"id":23,"url":"http://blog.flatironschool.com/wp-content/uploads/2017/06/IMAG2936-352x200.jpg","name":"Science Fair","like_count":0,"comments":[{"id":1939,"content":"first comment!","image_id":23,"created_at":"2017-12-22T14:02:16.948Z","updated_at":"2017-12-22T14:02:16.948Z"}]}
