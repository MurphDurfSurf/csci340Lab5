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

function newKeanu() {
  const url = `https://placekeanu.com/480/360?cb=${Date.now()}`;
  $("#keanuImg").attr("src", "");          // clear first
  setTimeout(() => $("#keanuImg").attr("src", url), 10); // slight delay to ensure the image reloads, forces this to work idk WHY it work otherwise
}

$(function() {
  $("#btnDog").on("click", newDog);
  $("#btnKeanu").on("click", newKeanu);
});

