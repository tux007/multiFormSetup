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

let urlAnimate = () => {
  window.location.hash =
    myEmojis[Math.floor((Date.now() / 100) % myEmojis.length)];
  setTimeout(urlAnimate, 70);
};

urlAnimate();
