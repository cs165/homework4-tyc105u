// This class will represent the gif display area. It keeps track of which gif
// is being shown and can select a new random gif to be shown.
// 
// See HW4 writeup for more hints and details.
class GifDisplay {
  constructor(event) {
    this.url = "https://api.giphy.com/v1/gifs/search?" + "q=" + event + "&api_key=gm2ZMlRhxG54KrlmuhJ8J4O2SREJW4G7&limit=25&rating=g";
    this.flag = 1;
    var play = document.querySelector('#button');
    play.style.zIndex = "500";

    fetch(this.url)
      .then(onResponse => {
        return onResponse.json();
      })
      .then(json => {
        var pic = document.createElement("img");
        var _pic = document.createElement("img");
        var gif = document.querySelector('#music');

        this.len = Math.floor(Math.random() * Math.floor(json.data.length));
        console.log(this.len);
        let len = this.len

        pic.setAttribute("id", "gif");


        pic.src = json.data[this.len].images.downsized.url;
        gif.append(pic);

        _pic.setAttribute("id", "next");

        if (len == json.data.length)
          len = 0;
        else
          len++;

        this.len = len;
        _pic.src = json.data[this.len].images.url;
        _pic.style.position = "absolute";
        gif.append(_pic);

      });
    if (this.flag != 1) {
      let count = this.len;
      this.flag = 1;
      var pic = document.querySelector('#gif');
      var _pic = document.querySelector('#next');
      if (count == json.data.length)
        count = 0;
      else
        count++;
      this.len = count;
      _pic.src = json.data[this.len].images.url;
    }
    else {
      this.flag = 0;
      let count = this.len
      var pic = document.querySelector('#gif');
      var _pic = document.querySelector('#next');
      if (count == json.data.length)
        count = 0;
      else
        count++;
      this.len = count;
      gif.src = json.data[this.len].images.url;
    }
  }

}