const menu_items = document.querySelectorAll(".menu-item");
const message_box = document.getElementById("msg-id");
const messages = document.querySelectorAll(".message1");
const msg_search = document.getElementById("msgsearchid");
const themes = document.querySelector(".customize-theme");
const themeSelector = document.querySelector(".themes");
const fontsizes = document.querySelectorAll(".font-themes span");
var root = document.querySelector(":root");
const color_pallate = document.querySelectorAll(".color-container span");
const bg1 = document.querySelector(".bg1");
const bg2 = document.querySelector(".bg2");
const bg3 = document.querySelector(".bg3");
const changeActive = () => {
  menu_items.forEach((i) => {
    i.classList.remove("active");
  });
};
menu_items.forEach((items) => {
  items.addEventListener("click", () => {
    changeActive();
    items.classList.add("active");
    if (items.id != "notify1") {
      document.querySelector(".notification-values").style.display = "none";
    } else {
      document.querySelector(".notification-values").style.display = "block";
    }
  });
});
/*msg box shadow*/
message_box.addEventListener("click", () => {
  message_box.style.boxShadow = "0px 0px 5px 0px var(--color-primary)";
  setTimeout(() => {
    message_box.style.boxShadow = "none";
  }, 2000);
});
/*search filter*/
let searchmessage = () => {
  let value1 = msg_search.value.toLowerCase();
  messages.forEach((chat) => {
    let name = chat.querySelector("p").textContent.toLocaleLowerCase();
    if (name.indexOf(value1) != -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
};
let opentheme = () => {
  themes.style.display = "flex";
};
let closetheme = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themes.style.display = "none";
  }
};
msg_search.addEventListener("keyup", searchmessage);
themeSelector.addEventListener("click", opentheme);
themes.addEventListener("click", closetheme);

fontsizes.forEach((z) => {
  let size_fonts;
  z.addEventListener("click", () => {
    if (z.classList.contains("font-size1")) {
      size_fonts = "10px";
    } else if (z.classList.contains("font-size2")) {
      size_fonts = "13px";
    } else if (z.classList.contains("font-size3")) {
      size_fonts = "16px";
    } else if (z.classList.contains("font-size4")) {
      size_fonts = "19px";
    } else if (z.classList.contains("font-size5")) {
      size_fonts = "22px";
    }
    document.querySelector("body").style.fontSize = size_fonts;
  });
});
color_pallate.forEach((color) => {
  color.addEventListener("click", () => {
    let primaryhue;
    if (color.classList.contains("color-theme1")) {
      primaryhue = 252;
    } else if (color.classList.contains("color-theme2")) {
      primaryhue = 52;
    } else if (color.classList.contains("color-theme3")) {
      primaryhue = 352;
    } else if (color.classList.contains("color-theme4")) {
      primaryhue = 152;
    } else if (color.classList.contains("color-theme5")) {
      primaryhue = 202;
    }
    root.style.setProperty("--color-primary-hue", primaryhue);
  });
});

/*bg*/
let darkcolorbg;
let lightcolorbg;
let whitecolorbg;
let changebg = () => {
  root.style.setProperty("--color-dark-lightness", darkcolorbg);
  root.style.setProperty("--color-light-lightness", lightcolorbg);
  root.style.setProperty("--color-white-lightness", whitecolorbg);
};
bg2.addEventListener("click", () => {
  darkcolorbg = "95%";
  lightcolorbg = "15%";
  whitecolorbg = "20%";
  changebg();
});
bg3.addEventListener("click", () => {
  darkcolorbg = "95%";
  lightcolorbg = "0%";
  whitecolorbg = "10%";
  changebg();
});
bg1.addEventListener("click", () => {
  window.location.reload();
});
