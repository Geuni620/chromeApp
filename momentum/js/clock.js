const clock = document.querySelector("#clock");

function getClock() {
  //2022.01.19
  const today = new Date();

  //2022.12.25
  const DDay = new Date("December 25, 2022 0:00:00");

  //남은 일 수(밀리초) = 특정 날짜 객체 - 현재 날짜 객체
  const gap = DDay.getTime() - today.getTime();

  //남은 날짜 시간 분 초 환산
  const second = Math.floor(gap / 1000);
  const minute = Math.floor(second / 60);
  const hour = Math.floor(minute / 60);
  const day = Math.floor(hour / 24);

  const secondRemain = second % 60;
  const minuteRemain = minute % 60;
  const hourRemain = hour % 24;

  clock.innerText = `${daysStr}d ${hoursStr}h ${minutesStr}m ${secondsStr}s`;
}

getClock();
setInterval(getClock, 1000);
