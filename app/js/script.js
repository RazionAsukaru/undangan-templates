(function () {
  const calendarBtn = getById("g-calendar-btn");
  const galleryVid1 = getById("gallery_vid_1");
  const galleryVid2 = getById("gallery_vid_2");

  let videoTime1 = 0;
  let videoTime2 = 0;

  function getById(id) {
    return document.getElementById(id);
  }

  calendarBtn.addEventListener("click", function () {
    window.open(
      "https://www.google.com/calendar/render?action=TEMPLATE&text=Undangan+Pernikahan&details=Undangan+Pernikahan&dates=20201118T053000Z%2F20201118T083000Z",
      "_blank"
    );
  });

  galleryVid1.addEventListener("click", function () {
    if (!this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2) {
      this.play();
    }
  });

  galleryVid1.addEventListener("mouseover", function () {
    this.setAttribute("controls","controls");
  });

  galleryVid1.addEventListener("mouseleave", function () {
    this.removeAttribute("controls");
  });

  galleryVid2.addEventListener("click", function () {
    if (!this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2) {
      this.play();
    }
  });

  galleryVid2.addEventListener("mouseover", function () {
    this.setAttribute("controls","controls");
  });

  galleryVid2.addEventListener("mouseleave", function () {
    this.removeAttribute("controls");
  });


  function openFullscreen(myVideo) {
    console.log("hitting")
    var elem = myVideo
    console.log(elem)
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }
  
  
})();
