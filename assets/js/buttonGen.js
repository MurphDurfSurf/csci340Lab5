function newDog() {
  $.getJSON("https://random.dog/woof.json")
    .done(function(resp) {
      if (resp.url.endsWith(".mp4") || resp.url.endsWith(".webm")) {
        newDog();
        return;
      }
      $("#dogImg").attr("src", resp.url);
    })
    .fail(function() {
      alert("Could not load dog image.");
    });
}

$(function() {
  $("#btnDog").on("click", newDog);
});
