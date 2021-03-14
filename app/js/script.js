(function () {
  const $ = require("jquery");
  const calendarBtn = getById("g-calendar-btn");
  const galleryVid1 = getById("gallery_vid_1");
  const galleryVid2 = getById("gallery_vid_2");

  function getById(id) {
    return $(`#${id}`);
  }

  calendarBtn.click(function () {
    window.open(
      "https://www.google.com/calendar/render?action=TEMPLATE&text=Undangan+Pernikahan&details=Undangan+Pernikahan&dates=20201118T053000Z%2F20201118T083000Z",
      "_blank"
    );
  });

  galleryVid1.click(function () {
    if (
      !this.currentTime > 0 &&
      !this.paused &&
      !this.ended &&
      this.readyState > 2
    ) {
      this.play();
    }
  });

  galleryVid1.mouseover(function () {
    this.setAttribute("controls", "controls");
  });

  galleryVid1.mouseleave(function () {
    this.removeAttribute("controls");
  });

  galleryVid2.click(function () {
    if (
      !this.currentTime > 0 &&
      !this.paused &&
      !this.ended &&
      this.readyState > 2
    ) {
      this.play();
    }
  });

  galleryVid2.mouseover(function () {
    this.setAttribute("controls", "controls");
  });

  galleryVid2.mouseleave(function () {
    this.removeAttribute("controls");
  });

  $("input[type='radio']").click(function () {
    var radioValue = $("input[name='tab-input']:checked").val();
    if (radioValue) {
      // alert("Your are a - " + radioValue);
      console.log(radioValue, typeof radioValue);
      if (radioValue === 'others') {
        $(".others-nominal-group").removeClass('hidden');
      } else {
        $(".others-nominal-group").addClass('hidden');
      }
    }
  });
  
})();
