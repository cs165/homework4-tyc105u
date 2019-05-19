// This class will represent the menu screen that you see when you first load
// the music visualizer.
//
// See HW4 writeup for more hints and details.
class MenuScreen {
  constructor(containerElement) {
    this.containerElement = containerElement;
    var Theme = ['candy', 'charlie brown', 'computers', 'dance', 'donuts', 'hello kitty', 'flowers', 'nature', 'turtles', 'space'];

    function onJsonReady(json) {
      let tmp = Math.floor(Math.random() * Math.floor(Theme.length));
      document.querySelector('#query-input').setAttribute("value", Theme[tmp]);

      var node = document.querySelector('#song-selector');

      var track = new Object();
      for (let i in json){
        //console.log(i);
        track[i] = json[i].songUrl;
        node.append(new Option(json[i].title, track[i]));
      }
    }

    fetch('https://fullstackccu.github.io/homeworks/hw4/songs.json')
      .then(function onResponse(response) {
        return response.json();
      })
      .then(onJsonReady);
  }

  show() {
    this.containerElement.classList.remove('inactive');
  }

  hide() {
    this.containerElement.classList.add('inactive');
  }

}

