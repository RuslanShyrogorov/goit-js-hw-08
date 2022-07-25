import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';


function saveTime(currentTime) {
  const videoTime = JSON.stringify(currentTime);
  localStorage.setItem(STORAGE_KEY, videoTime);
}

let parsVideoTime;

player.on('timeupdate', throttle(saveTime, 1000));

iframe.addEventListener('play', saveTime);

const savedVideoTime = localStorage.getItem(STORAGE_KEY);
// console.log(saveVideoTime);


function checkParsSaveTime(savedVideoTime) {
  if (savedVideoTime) {
    parsVideoTime = JSON.parse(savedVideoTime);
  } else {
    parsVideoTime = 0;
  }
  
}

checkParsSaveTime(savedVideoTime)
// console.log(parsVideoTime);

player
  .setCurrentTime(parsVideoTime.seconds)
  .then(function () {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
