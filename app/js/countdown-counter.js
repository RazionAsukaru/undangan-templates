(function () {
  const countdown = require("countdown");
  const moment = require("moment");

  const counterDays = getById("counter_days");
  const counterHours = getById("counter_hours");
  const counterMinutes = getById("counter_minutes");
  const counterSeconds = getById("counter_seconds");

  const year = 2021;
  const month = 11;
  const day = 4;
  const hour = 12;
  const minute = 30;

  let counterPassed = false;

  var updateCounterInterval = window.setInterval(function () {
    update();
  }, 1000);

  function getById(id) {
    return document.getElementById(id);
  }

  function update() {
    const counter = countdown(new Date(year, month - 1, day, hour, minute));
    counterPassed = counter.value > 0;
    if (counterPassed) {
      clearInterval(updateCounterInterval);
    }
    const miliseconds = !counterPassed ? counter.value * -1 : 0;
    const time = moment.duration(miliseconds, "milliseconds");

    counterDays.innerHTML = Math.floor(time.asDays());
    counterHours.innerHTML = time.hours();
    counterMinutes.innerHTML = time.minutes();
    counterSeconds.innerHTML = time.seconds();
  }
})();