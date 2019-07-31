/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


// An array with random quotes 

let quotes = [
  {
    quote : "Deep in the human unconscious is a pervasive need for a logical universe that makes sense. But the real universe is always one step beyond logic",
    source : "Frank Herbert",
    citation : "Facebook",
    tag : "#motivated"
  },
  {
    quote : "I loved her against reason, against promise, against peace, against hope, against happiness, against all discouragement that could be.",
    source : "Charles Dickens",
    citation : "Great Expectations",
    tag : "#love",
    year : 1861
  },
  {
    quote : "Think before you speak. Read before you think",
    source : "Fran Lebowitz",
    citation : "Facebook",
    tag : "#smart"
  },
  {
    quote : "Time is the longest distance between two places.",
    source : "Tennessee Williams",
    citation : "The Glass Menagerie",
    year : 1944
  },
  {
    quote : "The greatest victory in life is to rise above the material things that we once valued most.",
    source : " Muhammad Ali and Hana Yasmeen Ali",
    citation : "The Soul of a Butterfly: Reflections on Life's Journey",
    tag: "#materialsim"
  },
  {
    quote : "But there is only one thing that has power completely, and this is love.",
    source : "Alan Paton",
    citation : "Cry, the Beloved Country",
    year : 1948
  },
  {
    quote : "Change before you have to.",
    source : " Jack Welch",
    citation : "Winning",
    tag : "#one Perfect Sentence"
  }
];


// This function generates a random quote

function getRandomQuote () {
  let getRandomNumber = quotes[ Math.floor(Math.random() * quotes.length)];
  return getRandomNumber;
};

// This function generates random color for the background

function getRandomColor () {
  let a = Math.floor(Math.random() * 193);
  let b = Math.floor(Math.random() * 193);
  let c = Math.floor(Math.random() * 193);
  
  let rgbColor = "rgb(" + a + "," + b + "," + c + ")";
  // The HTML body is getting random color
  document.body.style.backgroundColor = rgbColor;
  // The button is getting the same color like the background
  document.getElementById('loadQuote').style.background = rgbColor;
}

// This function prints the quotes

function printQuote () {
  let callGetRandomQuote = getRandomQuote();
  let htmlString = '';
  let createSpan = document.createElement('span')
  htmlString += '<p class="quote">' + callGetRandomQuote.quote + '</p>';
  htmlString += '<p class="source">' + callGetRandomQuote.source;

// Statement to check for the citation property before adding it
  if (callGetRandomQuote.citation) {
    htmlString += '<span class="citation">' + callGetRandomQuote.citation + '</span>';
  };

// Statement to check for the year property before adding it
  if (callGetRandomQuote.year) {
    htmlString += '<span class="year">' + callGetRandomQuote.year + '</span>'
  }

// Statement to check for the tag property before adding it
  if (callGetRandomQuote.tag) {
    htmlString += createSpan.innerHTML = ", " + callGetRandomQuote.tag;
    document.getElementById("quote-box").appendChild(createSpan); 
  }

  htmlString += '</p>';
  
  document.getElementById("quote-box").innerHTML = htmlString;
  getRandomColor ()
}

// When `Show another quote` is pressed it will change the quote
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Seting interval for automatic quote generating
setInterval(printQuote, 15000);
