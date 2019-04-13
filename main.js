const data =
  {
    "cities": [
      {
        "section": "cupertino",
        "label": "Cupertino"
      },
      {
        "section": "new-york-city",
        "label": "New York City"
      },
      {
        "section": "london",
        "label": "London"
      },
      {
        "section": "amsterdam",
        "label": "Amsterdam"
      },
      {
        "section": "tokyo",
        "label": "Tokyo"
      },
      {
        "section": "hong-kong",
        "label": "Hong Kong"
      },
      {
        "section": "sydney",
        "label": "Sydney"
      }
    ]
  }

//nav from json
$(() => {

  function menu(ul, cities) {
    for (let i=0;i<cities.length;i++) {
      const li=$(ul).append(`<li class="item"><a href="#" class="link ${cities[i].section}" >${cities[i].label}</a></li>`);
    }
  }
  const cities=$('#nav');
  menu(cities, data.cities);


  //active class
  const itemContainer = document.getElementById("nav");

  const items = itemContainer.getElementsByClassName("link");

  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function() {
      const current = document.getElementsByClassName("active");

      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      this.className += " active";
    });
  }

  //sliding nav
  const target = document.querySelector(".underline");
  const links = document.querySelectorAll("#nav a");

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", onClick);
  }

  function onClick() {
    const width = this.getBoundingClientRect().width;
    const height = this.getBoundingClientRect().height;
    const left = this.getBoundingClientRect().left;
    const top = this.getBoundingClientRect().top;

    target.style.width = `${width}px`;
    target.style.height = `${height}px`;
    target.style.left = `${left}px`;
    target.style.top = `${top}px`;
    target.style.transform = "none";
  }

  //resize update
  function resize() {
    const active = document.querySelector("#nav a.active");
    if (active) {
      const left = active.getBoundingClientRect().left + window.pageXOffset;
      const top = active.getBoundingClientRect().top + window.pageYOffset;

      target.style.left = `${left}px`;
      target.style.top = `${top}px`;
    }
  }
  window.addEventListener("resize", resize);

});


//timezone
let Cupertino = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
Cupertino = new Date(Cupertino);
console.log(`Cupertino time: ${Cupertino.toLocaleTimeString()}`);

let NYC = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
NYC = new Date(NYC);
console.log(`NYC time: ${NYC.toLocaleTimeString()}`);

let London = new Date().toLocaleString("en-US", {timeZone: "Europe/London"});
London = new Date(London);
console.log(`London time: ${London.toLocaleTimeString()}`);

let Amsterdam = new Date().toLocaleString("en-US", {timeZone: "Europe/Amsterdam"});
Amsterdam = new Date(Amsterdam);
console.log(`Amsterdam time: ${Amsterdam.toLocaleTimeString()}`);

let Tokyo = new Date().toLocaleString("en-US", {timeZone: "Asia/Tokyo"});
Tokyo = new Date(Tokyo);
console.log(`Tokyo time: ${Tokyo.toLocaleTimeString()}`);

let HongKong = new Date().toLocaleString("en-US", {timeZone: "Asia/Hong_Kong"});
HongKong = new Date(HongKong);
console.log(`Hong Kong time: ${HongKong.toLocaleTimeString()}`);

let Sydney = new Date().toLocaleString("en-US", {timeZone: "Australia/Sydney"});
Sydney = new Date(Sydney);
console.log(`Sydney time: ${Sydney.toLocaleTimeString()}`);


$(document).ready(() => {
  const timePill = document.querySelector(".time-pill");
  timePill.style.visibility = "hidden";
  $("#nav a").click(function(){
      if($(this).hasClass("cupertino") && $(this).hasClass("active")){
        timePill.style.visibility = "visible";
        $('.time').remove();
        $('.time-container p').append(`<div class="time">${Cupertino.toLocaleTimeString()}</div>`);
      } else if ($(this).hasClass("new-york-city") && $(this).hasClass("active")){
        timePill.style.visibility = "visible";
        $('.time').remove();
        $('.time-container p').append(`<div class="time">${NYC.toLocaleTimeString()}</div>`)
      } else if ($(this).hasClass("london") && $(this).hasClass("active")){
        timePill.style.visibility = "visible";
        $('.time').remove();
        $('.time-container p').append(`<div class="time">${London.toLocaleTimeString()}</div>`)
      } else if ($(this).hasClass("amsterdam") && $(this).hasClass("active")){
        timePill.style.visibility = "visible";
        $('.time').remove();
        $('.time-container p').append(`<div class="time">${Amsterdam.toLocaleTimeString()}</div>`)
      } else if ($(this).hasClass("tokyo") && $(this).hasClass("active")){
        timePill.style.visibility = "visible";
        $('.time').remove();
        $('.time-container p').append(`<div class="time">${Tokyo.toLocaleTimeString()}</div>`)
      } else if ($(this).hasClass("hong-kong") && $(this).hasClass("active")){
        timePill.style.visibility = "visible";
        $('.time').remove();
        $('.time-container p').append(`<div class="time">${HongKong.toLocaleTimeString()}</div>`)
      } else if ($(this).hasClass("sydney") && $(this).hasClass("active")){
        timePill.style.visibility = "visible";
        $('.time').remove();
        $('.time-container p').append(`<div class="time">${Sydney.toLocaleTimeString()}</div>`)
      }
  });
});
