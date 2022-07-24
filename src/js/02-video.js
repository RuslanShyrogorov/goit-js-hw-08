import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';


function throttleSeconds(currentTime) {
  const videoTime = JSON.stringify(currentTime);
  localStorage.setItem(STORAGE_KEY, videoTime);
}

let parsVideoTime;

player.on('timeupdate', throttle(throttleSeconds, 1000));

iframe.addEventListener('play', throttleSeconds);

const saveVideoTime = localStorage.getItem(STORAGE_KEY);
// console.log(saveVideoTime);


function checkParsTime(saveVideoTime) {
  if (saveVideoTime) {
    parsVideoTime = JSON.parse(saveVideoTime);
  } else {
    parsVideoTime = 0;
  }
  
}

checkParsTime(saveVideoTime)
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
