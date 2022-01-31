const clock = document.querySelector("#clock");

function getClock() {
  //2022.01.31
  const today = new Date();
  //2022.12.25
  const DDay = new Date("December 25, 2022 0:00:00");

  const gap = DDay.getTime() - today.getTime();

  const secondsInMs = Math.floor(gap / 1000);
  const minutesInMs = Math.floor(secondsInMs / 60);
  const hoursInMs = Math.floor(minutesInMs / 60);
  const days = Math.floor(hoursInMs / 24);

  const second = secondsInMs % 60;
  const minutes = minutesInMs % 60;
  const hours = hoursInMs % 24;

  const daysStr = `${days < 10 ? `0${days}` : days}d`;
  const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
  const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m`;
  const secondsStr = `${second < 10 ? `0${second}` : second}s`;

  clock.innerText = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
}

getClock();
setInterval(getClock, 1000);
