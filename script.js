window.onload = function () {
  let menu = document.getElementById("menu");
  const menuBottom = 100;

  window.onscroll = function () {
    if (document.documentElement.scrollTop > menuBottom) {
      menu.classList.add("fixed", "semitransparent");
    } else {
      menu.classList.remove("fixed", "semitransparent");
    }
  };

  let arrow = document.getElementById("arrow");

  window.onscroll = function () {
    if (document.documentElement.scrollTop > menuBottom) {
      arrow.classList.add("fixedArrow", "semitransparent");
    } else {
      arrow.classList.remove("fixedArrow", "semitransparent");
    }
  };
};
