let prism = document.querySelector(".rec-prism");

function showSignup() {
  prism.style.transform = "translateZ(-100px) rotateY( -90deg)";
}
function showLogin() {
  prism.style.transform = "translateZ(-100px)";
}
function showForgotPassword() {
  prism.style.transform = "translateZ(-100px) rotateY( -180deg)";
}

function showSubscribe() {
  prism.style.transform = "translateZ(-100px) rotateX( -90deg)";
}

function showContactUs() {
  prism.style.transform = "translateZ(-100px) rotateY( 90deg)";
}

function showThankYou() {
  prism.style.transform = "translateZ(-100px) rotateX( 90deg)";
}

let myEmojis = [
  "😀",
  "😂",
  "😇",
  "😍",
  "🤩",
  "🥳",
  "🥺",
  "😎",
  "🤓",
  "🥶",
  "🥵",
  "😱",
  "😭",
  "😡",
  "🥴",
  "🤢",
  "🤮",
  "🤠",
  "🤡",
  "🥸",
  "🤥",
  "🤫",
  "🤭",
  "🧐",
  "🤔",
  "🤯",
  "🥱",
  "🤤",
  "🤑",
  "🤗",
  "🤭",
  "🤫",
  "🤔",
  "🤐",
  "🤨",
  "🤥",
  "🤢",
  "🤮",
  "🤧",
  "🥵",
  "🥶",
  "🥴",
  "😵",
  "🤯",
  "🤠",
  "🥳",
  "🥺",
  "🤩",
  "😇",
  "😍",
  "🤪",
  "😜",
  "😝",
  "🤑",
  "🤗",
  "🤭",
  "🤫",
  "🤔",
  "🤐",
  "🤨",
  "🤥",
  "🤢",
  "🤮",
  "🤧",
  "🥵",
  "🥶",
  "🥴",
  "😵",
  "🤯",
  "🤠",
  "🥳",
  "🥺",
  "🤩",
  "😇",
  "😍",
  "🤪",
  "😜",
  "😝",
  "🤑",
  "🤗",
  "🤭",
  "🤫",
  "🤔",
  "🤐",
  "🤨",
  "🤥",
  "🤢",
  "🤮",
  "🤧",
  "🥵",
  "🥶",
  "🥴",
  "😵",
  "🤯",
  "🤠",
  "🥳",
  "🥺",
  "🤩",
  "😇",
  "😍",
  "🤪",
  "😜",
  "😝",
  "🤑",
];

let escPressCount = 0;

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    escPressCount++;
    if (escPressCount === 2) {
      urlAnimate();
    } else if (escPressCount === 3) {
      showEasterBunny();
    }
  } else {
    escPressCount = 0;
  }
});

let urlAnimate = () => {
  let emoji = myEmojis[Math.floor((Date.now() / 100) % myEmojis.length)];
  document.getElementById("emoji-display").innerText = emoji;
  setTimeout(urlAnimate, 70);
};

let showEasterBunny = () => {
  let bunny = document.getElementById("easter-bunny");
  bunny.style.display = "block";
  setTimeout(() => {
    bunny.style.display = "none";
  }, 5000);
};

document.getElementById("emoji-display").innerText = "";
