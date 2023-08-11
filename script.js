const generateMemeBtn = document.querySelector(
  ".meme-generate .generate-meme-btn"
);
const memeImg = document.querySelector(".meme-generate img");
const memeTitle = document.querySelector(".meme-generate .meme-title");
const memeAuthor = document.querySelector(".meme-generate .meme-author");

const updateDetails = (url, title, author) => {
  memeImg.setAttribute("src", url);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = author;
};

const generateMeme = () => {
  fetch("https://meme-api.com/gimme/wholesomememes").then((res) => {
    res.json().then((data) => {
      updateDetails(data.url, data.title, data.author);
    });
  });
};

generateMemeBtn.addEventListener("click", generateMeme);

generateMeme();
