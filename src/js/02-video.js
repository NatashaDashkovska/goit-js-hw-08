import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';



function createData(data) {
  localStorage.setItem('STORAGE_KEY', data.seconds);
}


player.on('timeupdate', throttle(createData, 1000));

const pausedTime = localStorage.getItem('STORAGE_KEY');

if (pausedTime) {
  player.setCurrentTime(parseFloat(pausedTime)).catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // Час менше 0 або більше тривалості відео
        break;
      default:
        // Інша помилка
        break;
    }
  });
}
