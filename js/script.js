// An array with random quotes 
let quotes = [];
let quotesUrl = fetch("https://type.fit/api/quotes")
  .then(response => response.json())
  .then(data => data.forEach(element => {
    quotes.push(element);
  }))
  .catch(error => console.log('error is', error));

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
  document.body.style.backgroundColor = rgbColor;
  document.getElementById('loadQuote').style.background = rgbColor;
}

// Function to resset the interval
resetInterval = () => {
  clearInterval();
}

// This function prints the quotes
function printQuote () {
  resetInterval();
  let callGetRandomQuote = getRandomQuote();
  let htmlString = '';
  let createSpan = document.createElement('span')
  htmlString += '<p class="quote">' + callGetRandomQuote.text + '</p>';
  if (callGetRandomQuote.author) {
    htmlString += '<p class="source">' + callGetRandomQuote.author;
  } else {
    htmlString += '<p class="source">' + "";
  }

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
  getRandomColor ();
}

// When `Show another quote` is pressed it will change the quote
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Prints the quote if button is not pressed
window.setInterval(printQuote, 15000);
