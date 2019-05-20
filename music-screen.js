class MusicScreen{
  constructor(event) {
    this.Submit = this.Submit.bind(this);
    this.display;
    this.sound = new AudioPlayer();
    this.play = document.createElement("img");
    this.play.addEventListener('click', this.Submit);
    this.buttom =  document.querySelector('#button');


    this.api = undefined;
    this.status = false;

    this.event = event;
  }

  Pause() {
    this.event.classList.add('inactive');
  }

  Submit(event) {
    if (this.status) {
      this.sound.pause();
      this.status = false;
    }
    else{
      this.sound.setSong(this.api);
      this.sound.setKickCallback(this.display);
      this.sound.play();
      this.button.setAttribute("src","./images/pause.png");
      this.status = true;
    }
  }

  play_musicVideo() {
    this.event.classList.remove('inactive');
    this.play.setAttribute("id", "playButton");
    this.play.src = "./images/play.png";
    this.buttom.append(this.play);
    this.play.style.width = "60px";
    this.play.style.height = "60px";
    var option = document.querySelectorAll('option');
    
    for(let i of option)
        if(i.selected)
          this.api = i.value;
        
    this.display = new GifDisplay(document.querySelector('input').value); 
  }


}

