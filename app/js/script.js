(function () {
  const calendarBtn = getById("g-calendar-btn");

  function getById(id) {
    return document.getElementById(id);
  }

  calendarBtn.addEventListener("click", function () {
    window.open(
      "https://www.google.com/calendar/render?action=TEMPLATE&text=Undangan+Pernikahan&details=Undangan+Pernikahan&dates=20201118T053000Z%2F20201118T083000Z",
      "_blank"
    );
  });

})();
