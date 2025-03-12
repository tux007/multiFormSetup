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
