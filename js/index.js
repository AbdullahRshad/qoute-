var quote = [
  { author: "― Frank Zappa", text: "So many books, so little time." },
  {
    author: "― Albert Einstein",
    text: "Two things are infinite: the universe and human stupidity.",
  },
  {
    author: "― Marcus Tullius Cicero",
    text: "A room without books is like a body without a soul.",
  },
  {
    author: "― Bernard M. Baruch",
    text: "Be who you are and say what you feel, because those who mind don't matter.",
  },
  {
    author: "― Mahatma Gandhi",
    text: "Be the change that you wish to see in the world.",
  },
  {
    author: "― Mark Twain",
    text: "If you tell the truth, you don't have to remember anything.",
  },
  {
    author: "― Elbert Hubbard",
    text: "A friend is someone who knows all about you and still loves you.",
  },
];

function generateQuote(){
  var x = Math.floor(Math.random() * quote.length);
  document.getElementById("quote").innerHTML = quote[x].text;
  document.getElementById("author").innerHTML = quote[x].author;
}
