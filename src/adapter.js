class Adapter {
      static getAndSetimage() {
        fetch("https://randopic.herokuapp.com/images/23")
        .then(resp => resp.json())
        .then(json => const img = new Image(json))
        img.render();
        }

        static createComment() {
          fetch("https://randopic.herokuapp.com/images/23")
          method: "POST",
               headers: {
                 "Accept": "application/json",
                 "Content-Type": "application/json"
               },body: JSON.stringify({
                      image_id: "23",
                      content: `${content}`,
                    })
                  }).then(resp => resp.json()).then(json => {
                    const comment = new Comment(json);
                    comment.render();
                  });

          static deleteComment(id) {
            fetch(`https://randopic.herokuapp.com/comments/${id}`), {
              method: "DELETE",
              headers: {
                "Action": "application/json",
                "Content-Type": "application/json"
                }
              });
              Comment.all = Comment.all.filter(comment => comment.id !== id);


            }


    }
