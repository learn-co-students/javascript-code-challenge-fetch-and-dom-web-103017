const Comment = (() => {
  const all = []
  class Comment {

    constructor(body, img)
    {
      this.img_id = img
      this.body = body
      all.push(this)
    }

    static all()
    {
      return [...all]
    }

  }
})()
