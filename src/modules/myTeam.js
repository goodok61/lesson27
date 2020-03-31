const myTeam = () => {
  const teamImg = document.querySelectorAll(".command__photo");

  teamImg.forEach(item => {
    let defaultItemSrc = item.src;
    item.addEventListener("mouseenter", event => {
      event.target.src = event.target.dataset.img;
    });
    item.addEventListener("mouseleave", event => {
      event.target.src = defaultItemSrc;
    });
  });
};
export default myTeam;