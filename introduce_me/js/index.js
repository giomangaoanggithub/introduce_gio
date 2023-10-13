/*
 flying_uniquifier()
 */
var arr_flying_uniquifier = [];

/*
 typeWriter()
 */
var show_profile_name_num = 0;
var profile_name = " GIO";
var typing_speed = 500;
var readScroll_trigger = 0;

/*
basebackground_rotategradient()
*/
var rotating_gradient_num = 0;

//Scroll Position

window.addEventListener(
  "scroll",
  function () {
    readScroll();
  },
  false
);

function readScroll() {
  // console.log(window.scrollY);
  if (window.scrollY > 350 && readScroll_trigger != 1) {
    readScroll_trigger = 1;
    typeWriter();
  } else if (window.scrollY < 6) {
    show_profile_name_num = 0;
    readScroll_trigger = 0;
    document.getElementById("phase2-span").innerHTML = "";
  }
}

function typeWriter() {
  if (show_profile_name_num < profile_name.length) {
    document.getElementById("phase2-span").innerHTML += profile_name.charAt(
      show_profile_name_num
    );
    show_profile_name_num++;
    setTimeout(() => typeWriter(), typing_speed);
  }
}

function basebackground_rotategradient() {
  document.getElementById("base-background").style.backgroundImage =
    `linear-gradient(
    ` +
    rotating_gradient_num +
    `deg,
    rgb(33, 33, 33) 50%,
    rgb(238, 238, 238) 50%
  )`;
  rotating_gradient_num += 0.1;
  switch (rotating_gradient_num > 360) {
    case true:
      rotating_gradient_num = 0;
      break;
  }
  setTimeout(() => basebackground_rotategradient(), 10);
}

basebackground_rotategradient();

function random_flying_logos() {
  for (i = 0; i < document.getElementsByClassName("flying-logos").length; i++) {
    document.getElementsByClassName("flying-logos")[i].style.animationDuration =
      Math.floor(Math.random() * 14) + 8 + "s";

    document.getElementsByClassName("flying-logos")[i].style.zIndex = i + "";
    document.getElementsByClassName("flying-logos")[i].style.overflowX =
      "hidden";
    var fly_value = flying_uniquifier();
    switch (Math.floor(Math.random() * 4)) {
      case 0:
        document.getElementsByClassName("flying-logos")[i].style.paddingTop =
          fly_value;
        break;
      case 1:
        document.getElementsByClassName("flying-logos")[i].style.paddingBottom =
          fly_value;
        break;
      case 2:
        document.getElementsByClassName("flying-logos")[i].style.paddingLeft =
          fly_value;
        break;
      case 3:
        document.getElementsByClassName("flying-logos")[i].style.paddingRight =
          fly_value;
        break;
    }
    switch (i % 3) {
      case 0:
        document.getElementsByClassName("flying-logos")[i].style.position =
          "absolute";
        break;
      case 1:
        document.getElementsByClassName("flying-logos")[i].style.position =
          "absolute";
        break;
      case 2:
        document.getElementsByClassName("flying-logos")[i].style.position =
          "relative";
        break;
    }
    switch (Math.floor(Math.random() * 2)) {
      case 1:
        document.getElementsByClassName("flying-logos")[i].style.animationName =
          "logos-to-the-right2";
        break;
    }
    switch (Math.floor(Math.random() * 2)) {
      case 1:
        document.getElementsByClassName("flying-logos")[
          i
        ].style.animationDirection = "alternate-reverse";
        break;
    }
  }
}

random_flying_logos();

function flying_uniquifier() {
  result = Math.floor(Math.random() * 25) + 1;
  if (arr_flying_uniquifier.includes(result)) {
    flying_uniquifier();
  } else {
    arr_flying_uniquifier.push(result);
  }
  return result + "vw";
}
