class App {
    constructor() {
        let Main = document.querySelector('#main');
        this.MusicScreen = new MusicScreen(Main);
        this.MusicScreen.Pause();

        let Menu = document.querySelector('#menu');
        this.Submit = this.Submit.bind(this);
        Menu.addEventListener('submit', this.Submit);

        this.MenuScreen = new MenuScreen(Menu);
        this.MenuScreen.show();
    }
    Submit(event) {
        event.preventDefault();
        this.MenuScreen.hide();
        this.MusicScreen.play_musicVideo();
    }
}

function hide() {
    this.containerElement.classList.add('inactive');
}

function show(){
    this.containerElement.classList.remove('inactive');
}

