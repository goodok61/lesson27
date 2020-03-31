const slider = () => {
  const slide = document.querySelectorAll(".portfolio-item"),
    btn = document.querySelectorAll(".portfolio-btn"),
    slider = document.querySelector(".portfolio-content"),
    dots = document.createElement("ul");
  dots.classList.add("portfolio-dots");
  slider.appendChild(dots);
  for (let i = 0; i < slide.length; i++) {
    const oneDot = document.createElement("li");
    oneDot.classList.add("dot");
    dots.appendChild(oneDot);
    if (i == 0) {
      oneDot.classList.add("dot-active");
    }
  }
  let dot = document.querySelectorAll(".dot");

  let curentSlide = 0,
    interval;

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };

  const autoPlaySlide = () => {
    prevSlide(slide, curentSlide, "portfolio-item-active");
    prevSlide(dot, curentSlide, "dot-active");
    curentSlide++;
    if (curentSlide >= slide.length) {
      curentSlide = 0;
    }
    nextSlide(slide, curentSlide, "portfolio-item-active");
    nextSlide(dot, curentSlide, "dot-active");
  };

  const startSlide = (time = 3000) => {
    interval = setInterval(autoPlaySlide, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  slider.addEventListener("click", event => {
    event.preventDefault();

    let target = event.target;

    // if (!target.matches(".portfolio-btn", ".dot")) {
    //   return;
    // }

    prevSlide(slide, curentSlide, "portfolio-item-active");
    prevSlide(dot, curentSlide, "dot-active");

    if (target.matches("#arrow-right")) {
      curentSlide++;
    } else if (target.matches("#arrow-left")) {
      curentSlide--;
    } else if (target.classList.contains("dot")) {
      dot.forEach((elem, index) => {
        if (elem === target) {
          curentSlide = index;
        }
      });
    }

    if (curentSlide >= slide.length) {
      curentSlide = 0;
    }
    if (curentSlide < 0) {
      curentSlide = slide.length - 1;
    }

    nextSlide(slide, curentSlide, "portfolio-item-active");
    nextSlide(dot, curentSlide, "dot-active");
  });

  slider.addEventListener("mouseover", event => {
    if (
      event.target.matches(".portfolio-btn") ||
      event.target.matches(".dot")
    ) {
      stopSlide();
    }
  });

  slider.addEventListener("mouseout", event => {
    if (
      event.target.matches(".portfolio-btn") ||
      event.target.matches(".dot")
    ) {
      startSlide();
    }
  });

  startSlide(1500);
};
export default slider;