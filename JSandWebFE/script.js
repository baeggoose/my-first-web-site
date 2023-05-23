var req = new XMLHttpRequest();
req.open("GET", "./json/image_list.json");
req.onreadystatechange = function () {
  if (this.readyState == 4) {
    // console.log(this.response);
    var data = JSON.parse(this.response);
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      div.setAttribute("class", "image");
      div.onclick = function () {
        if (this.getAttribute("class").indexOf("image-selected") == -1) {
          this.setAttribute("class", "image image-selected");
        } else {
          this.setAttribute("class", "image");
        }
      };
      var img = document.createElement("img");
      img.src = data[i];
      div.appendChild(img);
      document.body.appendChild(div);
    }
  }
};
req.send();
