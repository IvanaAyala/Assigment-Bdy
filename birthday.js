const message = document.getElementById("message");
const quote = document.getElementById("quote");
const submit = document.getElementById("submit");

submit.addEventListener("click", function(){
  // Get the birthday entered by the user
  const birthday = new Date(document.getElementById("birthday").value);
  const today = new Date();
  // Get the current year
  const currentYear = today.getFullYear();
  // Update the birthday to the same day this year
  birthday.setFullYear(currentYear);
  // Calculate the number of days until the user's birthday this year
  let diff = birthday.getTime() - today.getTime();
  
  if (diff < 0) {
    // If the birthday already passed this year, add one year to get the days until the next birthday
    birthday.setFullYear(currentYear + 1);
    diff = birthday.getTime() - today.getTime();
  }
  const daysUntilBirthday = Math.ceil(diff / (1000 * 60 * 60 * 24));
  message.innerText = `Your birthday is in ${daysUntilBirthday} days`;
  if (daysUntilBirthday == 365) {
    message.innerText = "Happy Birthday!";
  } else {
    message.innerText = `Your birthday is in ${daysUntilBirthday} days`;
  }
  
  // fetch a quote from the API
  fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // pick a random quote
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomQuote = data[randomIndex];
      // display the quote
      quote.innerText = `"${randomQuote.text}" - ${randomQuote.author}`;
    });

    const logOutButton = document.getElementById("log-out");
    logOutButton.addEventListener("click", function(){
        window.location.href="index.html"
    });
    
  
    
});
