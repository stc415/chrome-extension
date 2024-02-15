// grab the html elements
// const hour = document.querySelector("#hour");

// how do we want to display the counting down time?
// get the current time
// subtract the countdown time --> question: is it gonna be in min? sec? milisec?
// display the countdown on the countdown box
// convert hours and minutes into seconds

// convert the user input to seconds
// conditional: check if current time = current time + input time
// if so, execute the code

const secondInput = document.querySelector("#second");
const minuteInput = document.querySelector("#minute");
const hourInput = document.querySelector("#hour");
const startButton = document.querySelector("#btn");

startButton.addEventListener("click", function () {
  const seconds = parseInt(secondInput.value) || 0;
  const minutes = parseInt(minuteInput.value || 0) * 60;
  const hours = parseInt(hourInput.value || 0) * 60 * 60;
  const totalSeconds = seconds + minutes + hours;

  startCountdown(totalSeconds);
});

function startCountdown(time) {
  const countdownInterval = setInterval(() => {
    time -= 1;

    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    // console.log('Seconds: ', seconds);
    // console.log('minutes: ', minutes);

    document.querySelector(".countdown-hour").textContent = String(
      hours
    ).padStart(2, "0");
    document.querySelector(".countdown-minute").textContent = String(
      minutes
    ).padStart(2, "0");
    document.querySelector(".countdown-second").textContent = String(
      seconds
    ).padStart(2, "0");

    // Check if the countdown has finished
    if (time <= 0) {
      clearInterval(countdownInterval);
      //play a sound. Beep beep beep
      const audio = new Audio("ding-sound.wav");
      audio.play();
      console.log("Time is up!");
    }
  }, 1000);
}

//fetch data from url
fetch("https://type.fit/api/quotes")
  .then((data) => data.json())
  .then((data) => {
    //store random quote in random
    const random = data[Math.floor(Math.random() * data.length)];
    //Going into DOM. Create p tag, set id, and assign text
    const quote = document.createElement("p");
    quote.setAttribute("id", "quote");
    quote.textContent = `"${random.text}"`;
    //Going into DOM. Create p tag, set id, and assign text
    const author = document.createElement("p");
    author.setAttribute("id", "author");
    author.textContent = `by ${random.author}`;
    //Going into DOM. select class message-container
    const messageContainer = document.querySelector(".message-container");
    messageContainer.appendChild(quote);
    messageContainer.appendChild(author);
  });

