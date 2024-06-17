const result = document.querySelector("#result");

// we are using set interval fuction so that we can get the exact time and seconds

setInterval(() => {
  let date = new Date();
  result.innerHTML = date.toLocaleTimeString();
}, 1000);

// here 1000 is the 1 seconds

// here to localtimestring give the local time
