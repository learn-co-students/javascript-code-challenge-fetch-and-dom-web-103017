document.addEventListener('DOMContentLoaded', function() {
  console.log('content loaded')

  Adapter.loadPicture();

  document.getElementById("image_card").addEventListener("click", buttons);

  function buttons() {
    event.preventDefault();

    if (event.target.id === "like_button") {
      return add_like();
    } else if (event.target.id === "submit") {
      return add_comment();
    } else if (event.target.id.slice(0, 6) ==="delete") {
      return delete_comment();
    }
  }





















})
