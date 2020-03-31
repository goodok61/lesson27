const tooglePopUp = () => {
  const popUp = document.querySelector(".popup"),
    popUpBtn = document.querySelectorAll(".popup-btn"),
    popUpContent = document.querySelector(".popup-content");

  popUpBtn.forEach(elem =>
    elem.addEventListener("click", () => {
      popUp.style.display = "block";
      popUpContent.style.opacity = "0";

      if (screen.width > 768) {
        animate({
          duration: 1000,
          timing: function(timeFraction) {
            return timeFraction;
          },
          draw: function(progress) {
            let progressPopUp = Math.floor(progress * 100) / 100;
            popUpContent.style.opacity = `${progressPopUp}`;
          }
        });
      } else {
        popUp.style.display = "block";
        popUpContent.style.opacity = "1";
      }
    })
  );

  popUp.addEventListener("click", event => {
    let target = event.target;

    if (target.classList.contains("popup-close")) {
      popUp.style.display = "none";
    } else {
      target = target.closest(".popup-content");
      if (!target) {
        popUp.style.display = "none";
      }
    }
  });

  function animate({ timing, draw, duration }) {
    let start = performance.now();

    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;

      let progress = timing(timeFraction);

      draw(progress);

      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    });
  }
};
export default tooglePopUp;