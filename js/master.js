window.onbeforeunload = function () {
  parent.scrollTo(0, 0);
}

window.onload = function(){
  setTimeout(function(){document.body.style.overflow = "auto";}, 1500);
}

function scroll(){
  var width = window.innerWidth;
  var text1 = document.getElementById("text1");
  var text2 = document.getElementById("text2");
  var about = document.getElementById("about");
  var aboutPang = document.getElementById("aboutPang");
  var aboutPang1 = document.getElementById("aboutPang1");
  var aboutPang2 = document.getElementById("aboutPang2");
  var aboutPang3 = document.getElementById("aboutPang3");
  var aboutPang4 = document.getElementById("aboutPang4");
  var elmnt = document.body;
  var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
  if (scrollTop > 22 && scrollTop < 72) {
    text1.style.opacity = 0.0;
    planeText.style.opacity = 0.0;
  } else if (scrollTop > 72) {
    text2.style.opacity = 0.0;
    planeText.style.opacity = 0.0;
  } else if (scrollTop < 72) {
    text1.style.opacity = 1.0;
    text2.style.opacity = 1.0;
  }

}

function myFunction(day){
  var origin = document.getElementById("origin").value;
  var destination = document.getElementById("destination").value;
  if(origin == "none" && destination == "none"){
    var bookFlight = document.getElementById("bookFlight");
    while(bookFlight.firstChild) bookFlight.removeChild(bookFlight.firstChild);
    var month = document.getElementById("monthTitle").innerHTML;
    var ul = document.getElementById("list");
    ul.innerHTML = '';
    var li = document.createElement("li");

    switch(day) {
      case 1:
      case 21:
      li.appendChild(document.createTextNode("Flights on " + month + " " + day + "st:"));
      li.setAttribute("class", "titleSch");
      ul.appendChild(li);
      addFlights2(day);
      break;
      case 2:
      case 22:
      li.appendChild(document.createTextNode("Flights on " + month + " " + day + "nd:"));
      li.setAttribute("class", "titleSch");
      ul.appendChild(li);
      addFlights2(day);
      break;
      case 3:
      case 23:
      li.appendChild(document.createTextNode("Flights on " + month + " " + day + "rd:"));
      li.setAttribute("class", "titleSch");
      ul.appendChild(li);
      addFlights2(day);
      break;
      default:
      li.appendChild(document.createTextNode("Flights on " + month + " " + day + "th:"));
      li.setAttribute("class", "titleSch");
      ul.appendChild(li);
      addFlights2(day);
    }


  } else if(origin == "none" && !(destination == "none")){

  }

  else if(destination == "none"){


    alert("Please enter a destination.");


  } else if (origin == destination) {


    alert("Origin cannot equal destination. Please enter another origin/destination.");


  } else {
    var bookFlight = document.getElementById("bookFlight");
    while(bookFlight.firstChild) bookFlight.removeChild(bookFlight.firstChild);
    var month = document.getElementById("monthTitle").innerHTML;
    var ul = document.getElementById("list");
    ul.innerHTML = '';
    var li = document.createElement("li");

    switch(day) {
      case 1:
      case 21:
      li.appendChild(document.createTextNode("Flights on " + month + " " + day + "st to " + destination + " from " + origin + ":"));
      li.setAttribute("class", "titleSch");
      ul.appendChild(li);
      addFlights(day, origin, destination);
      break;
      case 2:
      case 22:
      li.appendChild(document.createTextNode("Flights on " + month + " " + day + "nd to " + destination + " from " + origin + ":"));
      li.setAttribute("class", "titleSch");
      ul.appendChild(li);
      addFlights(day, origin, destination);
      break;
      case 3:
      case 23:
      li.appendChild(document.createTextNode("Flights on " + month + " " + day + "rd to " + destination + " from " + origin + ":"));
      li.setAttribute("class", "titleSch");
      ul.appendChild(li);
      addFlights(day, origin, destination);
      break;
      default:
      li.appendChild(document.createTextNode("Flights on " + month + " " + day + "th to " + destination + " from " + origin + ":"));
      li.setAttribute("class", "titleSch");
      ul.appendChild(li);
      addFlights(day, origin, destination);
    }
  }
}

function addFlights2(day){
  var main = document.getElementById("main");
  main.innerHTML = '';

  var main = document.getElementById("main");
  var row = document.createElement("div");
  row.setAttribute("class", "row");
  row.setAttribute("id", "row");

  var column0 = document.createElement("div");
  column0.setAttribute("class", "column2");
  column0.setAttribute("id", "column1");
  var h2 = document.createElement("h2");
  h2.setAttribute("class", "h3Title");
  h2.innerHTML = "Origin";

  var column01 = document.createElement("div");
  column01.setAttribute("class", "column2");
  column01.setAttribute("id", "column1");
  var h21 = document.createElement("h2");
  h21.setAttribute("class", "h3Title");
  h21.innerHTML = "Destination"

  var column1 = document.createElement("div");
  column1.setAttribute("class", "column2");
  column1.setAttribute("id", "column1");
  var h3 = document.createElement("h2");
  h3.setAttribute("class", "h3Title");
  h3.innerHTML = "Depart";

  var column2 = document.createElement("div");
  column2.setAttribute("class", "column2");
  column2.setAttribute("id", "column2");
  var h32 = document.createElement("h2");
  h32.setAttribute("class", "h3Title");
  h32.innerHTML = "Arrive";

  var column3 = document.createElement("div");
  column3.setAttribute("class", "column2");
  column3.setAttribute("id", "column3");
  var h33 = document.createElement("h2");
  h33.setAttribute("class", "h3Title");
  h33.innerHTML = "Duration";

  var column4 = document.createElement("div");
  column4.setAttribute("class", "column2");
  column4.setAttribute("id", "column4");
  var h34 = document.createElement("h2");
  h34.setAttribute("class", "h3Title");
  h34.innerHTML = "Layover";

  var column6 = document.createElement("div");
  column6.setAttribute("class", "column2");
  column6.setAttribute("id", "column6");
  var h36 = document.createElement("h2");
  h36.setAttribute("class", "priceTitle");
  h36.innerHTML = "Price <br> (one way)";

  var column5 = document.createElement("div");
  column5.setAttribute("class", "column2");
  column5.setAttribute("id", "column5");
  var h35 = document.createElement("h2");
  h35.setAttribute("class", "h3Title2");
  h35.innerHTML = "Book Flight";

  column0.appendChild(h2);
  column01.appendChild(h21);
  column1.appendChild(h3);
  column2.appendChild(h32);
  column3.appendChild(h33);
  column4.appendChild(h34);
  column6.appendChild(h36);
  column5.appendChild(h35);
  row.appendChild(column0);
  row.appendChild(column01);
  row.appendChild(column1);
  row.appendChild(column2);
  row.appendChild(column3);
  row.appendChild(column4);
  row.appendChild(column6);
  row.appendChild(column5);
  main.appendChild(row);

  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Newark", "Boston", "9:00 am", "10:10 am", "1h 10m", "None", "$68.23");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Newark", "Boston", "11:15 am", "12:25 pm", "1h 10m", "None", "$70.00");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Newark", "Boston", "12:45 pm", "1:55 pm", "1h 10m", "None", "$67.99");

  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Newark", "New York", "7:30 am", "8:05 am", "0h 35m", "None", "$26.50");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Newark", "New York", "1:20 pm", "1:56 pm", "0h 36m", "None", "$29.50");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Newark", "New York", "7:15 pm", "7:50 pm", "0h 35m", "None", "$29.98");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Newark", "New York", "9:00 pm", "9:30 pm", "0h 30m", "None", "$25.50");

  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Newark", "Baltimore", "6:20 am", "6:56 am", "0h 36m", "None", "$105.16");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Newark", "Baltimore", "8:10 am", "8:45 am", "0h 35m", "None", "$108.00");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Newark", "Baltimore", "5:50 pm", "6:20 pm", "0h 30m", "None", "$106.00");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Newark", "Baltimore", "8:20 pm", "8:56 pm", "0h 36m", "None", "$200.00");

  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Newark", "Philadelphia", "11:40 am", "12:44 pm", "1h 4m", "None", "$114.50");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Newark", "Philadelphia", "5:00 pm", "6:04 pm", "1h 4m", "None", "$134.96");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Newark", "Philadelphia", "11:15 pm", "12:19 pm", "1h 3m", "None", "$107.83");

  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "New York", "Boston", "7:25 am", "8:44 am", "1h 19m", "None", "$97.50");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "New York", "Boston", "7:50 am", "9:12 am", "1h 22m", "None", "$100.00");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "New York", "Boston", "9:25 am", "10:41 am", "1h 16m", "None", "$105.00");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "New York", "Boston", "1:00 pm", "2:15 pm", "1h 15m", "None", "$110:00");

  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "New York", "Baltimore", "9:00 am", "10:23 am", "1h 23m", "None", "$123:00");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "New York", "Baltimore", "2:55 pm", "4:16 pm", "1h 21m", "None", "$121.96");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "New York", "Baltimore", "5:40 pm", "6:57 pm", "1h 17m", "None", "$118.83");

  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "New York", "Philadelphia", "9:30 pm", "11:30 pm", "2h", "None", "$105.00");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "New York", "Philadelphia", "9:16 pm", "11:21 pm", "2h 5m", "None", "$105.53");

  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "New York", "Newark", "7:30 am", "8:05 am", "0h 35m", "None", "$26.50");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "New York", "Newark", "1:20 pm", "1:56 pm", "0h 36m", "None", "$29.50");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "New York", "Newark", "7:15 pm", "7:50 pm", "0h 35m", "None", "$29.98");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "New York", "Newark", "9:00 pm", "9:30 pm", "0h 30m", "None", "$25.50");

  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Boston", "Newark", "9:00 am", "10:10 am", "1h 10m", "None", "$80.50");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Boston", "Newark", "11:15 am", "12:25 pm", "1h 10m", "None", "$85.96");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Boston", "Newark", "12:45 pm", "1:55 pm", "1h 10m", "None", "$89.83");

  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Boston", "New York", "5:43 am", "7:00 am", "1h 25m", "None", "$97.50");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Boston", "New York", "3:20 pm", "4:45 pm", "1h 25m", "None", "$95.00");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Boston", "New York", "8:10 pm", "9:35 pm", "1h 25m", "None", "$97.53");

  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Boston", "Baltimore", "1:50 pm", "3:26 pm", "1h 19m", "None", "$70.50");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Boston", "Baltimore", "5:47 pm", "7:26 pm", "1h 39m", "None", "$70.96");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Boston", "Baltimore", "9:55 pm", "11:25 pm", "1h 30m", "None", "$72.83");

  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Boston", "Philadelphia", "10:00 am", "11:30 pm", "1h 30m", "None", "$88.50");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Boston", "Philadelphia", "2:55 pm", "4:36 pm", "1h 41m", "None", "$82.56");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Boston", "Philadelphia", "11:00 pm", "12:35 pm", "1h 35m", "None", "$89.83");

  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Philadelphia", "Newark", "11:40 am", "12:44 pm", "1h 4m", "None", "$114.50");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Philadelphia", "Newark", "5:00 pm", "6:04 pm", "1h 4m", "None", "$134.96");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Philadelphia", "Newark", "11:15 pm", "12:19 pm", "1h 3m", "None", "$107.83");

  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Philadelphia", "New York", "1:00 pm", "3:58 pm", "2h 58m", "None", "$111.50");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Philadelphia", "New York", "11:00 am", "1:55 pm", "2h 55m", "None", "$110.00");

  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Philadelphia", "Baltimore", "8:00 am", "9:00 am", "1h", "None", "$70.32");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Philadelphia", "Baltimore", "2:59 pm", "3:56 pm", "57", "None", "$80.42");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Philadelphia", "Baltimore", "9:25 pm", "10:24 pm", "59m", "None", "$77.53");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Philadelphia", "Baltimore", "12:00 pm", "1:02 pm", "1h 2m", "None", "$89.00");

  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Philadelphia", "Boston", "7:00 am", "8:25 am", "1h 25m", "None", "$81.50");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Philadelphia", "Boston", "8:20 pm", "9:49 am", "1h 29m", "None", "$81.96");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Philadelphia", "Boston", "12:00 pm", "1:24 pm", "1h 24m", "None", "$82.83");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Philadelphia", "Boston", "4:15 pm", "5:38 pm", "1h 23m", "None", "$82.00");

  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Baltimore", "Newark", "6:20 am", "6:56 am", "36m", "None", "$105.00");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Baltimore", "Newark", "8:10 am", "8:45 am", "35m", "None", "$101.96");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Baltimore", "Newark", "5:50 pm", "6:20 pm", "30m", "None", "$103.83");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Baltimore", "Newark", "8:20 pm", "8:56 pm", "36m", "Nonet", "$102.00");

  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Baltimore", "New York", "7:05 am", "8:35 am", "1h 30m", "None", "$93.50");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Baltimore", "New York", "6:00 am", "7:22 am", "1h 22m", "None", "$95.96");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Baltimore", "New York", "9:10 am", "10:25 am", "1h 15m", "None", "$97.83");

  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Baltimore", "Philadelphia", "4:22 pm", "5:20 pm", "58m", "None", "$203.50");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Baltimore", "Philadelphia", "9:25 am", "10:16 am", "51m", "None", "$205.96");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Baltimore", "Philadelphia", "6:05 am", "7:02 am", "57m", "None", "$202.83");

  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Baltimore", "Boston", "6:00 am", "7:26 am", "1h 26m", "None", "$89.50");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Baltimore", "Boston", "2:06 pm", "3:31 pm", "1h 25m", "None", "$90.46");
  addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, "Baltimore", "Boston", "4:06 pm", "5:33 pm", "1h 27m", "None", "$92.83");
}

function addFlights(day, origin, destination){
  var main = document.getElementById("main");
  main.innerHTML = '';

  var main = document.getElementById("main");
  var row = document.createElement("div");
  row.setAttribute("class", "row");
  row.setAttribute("id", "row");

  var column1 = document.createElement("div");
  column1.setAttribute("class", "column");
  column1.setAttribute("id", "column1");
  var h3 = document.createElement("h2");
  h3.setAttribute("class", "h3Title");
  h3.innerHTML = "Depart";

  var column2 = document.createElement("div");
  column2.setAttribute("class", "column");
  column2.setAttribute("id", "column2");
  var h32 = document.createElement("h2");
  h32.setAttribute("class", "h3Title");
  h32.innerHTML = "Arrive";

  var column3 = document.createElement("div");
  column3.setAttribute("class", "column");
  column3.setAttribute("id", "column3");
  var h33 = document.createElement("h2");
  h33.setAttribute("class", "h3Title");
  h33.innerHTML = "Duration";

  var column4 = document.createElement("div");
  column4.setAttribute("class", "column");
  column4.setAttribute("id", "column4");
  var h34 = document.createElement("h2");
  h34.setAttribute("class", "h3Title");
  h34.innerHTML = "Layover";

  var column6 = document.createElement("div");
  column6.setAttribute("class", "column");
  column6.setAttribute("id", "column6");
  var h36 = document.createElement("h2");
  h36.setAttribute("class", "priceTitle");
  h36.innerHTML = "Price <br> (one way)";

  var column5 = document.createElement("div");
  column5.setAttribute("class", "column");
  column5.setAttribute("id", "column5");
  var h35 = document.createElement("h2");
  h35.setAttribute("class", "h3Title2");
  h35.innerHTML = "Book Flight";

  column1.appendChild(h3);
  column2.appendChild(h32);
  column3.appendChild(h33);
  column4.appendChild(h34);
  column6.appendChild(h36);
  column5.appendChild(h35);
  row.appendChild(column1);
  row.appendChild(column2);
  row.appendChild(column3);
  row.appendChild(column4);
  row.appendChild(column6);
  row.appendChild(column5);
  main.appendChild(row);

  if (origin == "Newark" && destination == "Boston") {
    addtoFlights(day, main, row, column1, column2, column3, column4, "9:00 am", "10:10 am", "1h 10m", "None", "$68.23");
    addtoFlights(day, main, row, column1, column2, column3, column4, "11:15 am", "12:25 pm", "1h 10m", "None", "$70.00");
    addtoFlights(day, main, row, column1, column2, column3, column4, "12:45 pm", "1:55 pm", "1h 10m", "None", "$67.99");
    addtoFlights(day, main, row, column1, column2, column3, column4, "6:00 pm", "8:23 pm", "2h 23m", "1h 13m Layover at Martha's Vineyard Airport", "$125.50");
  } else if (origin == "Newark" && destination == "New York") {
    addtoFlights(day, main, row, column1, column2, column3, column4, "7:30 am", "8:05 am", "0h 35m", "None", "$26.50");
    addtoFlights(day, main, row, column1, column2, column3, column4, "1:20 pm", "1:56 pm", "0h 36m", "None", "$29.50");
    addtoFlights(day, main, row, column1, column2, column3, column4, "7:15 pm", "7:50 pm", "0h 35m", "None", "$29.98");
    addtoFlights(day, main, row, column1, column2, column3, column4, "9:00 pm", "9:30 pm", "0h 30m", "None", "$25.50");
  } else if (origin == "Newark" && destination == "Baltimore") {
    addtoFlights(day, main, row, column1, column2, column3, column4, "6:20 am", "6:56 am", "0h 36m", "None", "$105.16");
    addtoFlights(day, main, row, column1, column2, column3, column4, "8:10 am", "8:45 am", "0h 35m", "None", "$108.00");
    addtoFlights(day, main, row, column1, column2, column3, column4, "5:50 pm", "6:20 pm", "0h 30m", "None", "$106.00");
    addtoFlights(day, main, row, column1, column2, column3, column4, "8:20 pm", "8:56 pm", "0h 36m", "None", "$200.00");
  } else if (origin == "Newark" && destination == "Philadelphia") {
    addtoFlights(day, main, row, column1, column2, column3, column4, "11:40 am", "12:44 pm", "1h 4m", "None", "$114.50");
    addtoFlights(day, main, row, column1, column2, column3, column4, "5:00 pm", "6:04 pm", "1h 4m", "None", "$134.96");
    addtoFlights(day, main, row, column1, column2, column3, column4, "11:15 pm", "12:19 pm", "1h 3m", "None", "$107.83");
    addtoFlights(day, main, row, column1, column2, column3, column4, "12:00 pm", "4:57 pm", "4h 57m", "3h 53m Layover at Detroit Metro Airport", "$140.00");
  } else if (origin == "New York" && destination == "Boston") {
    addtoFlights(day, main, row, column1, column2, column3, column4, "7:25 am", "8:44 am", "1h 19m", "None", "$97.50");
    addtoFlights(day, main, row, column1, column2, column3, column4, "7:50 am", "9:12 am", "1h 22m", "None", "$100.00");
    addtoFlights(day, main, row, column1, column2, column3, column4, "9:25 am", "10:41 am", "1h 16m", "None", "$105.00");
    addtoFlights(day, main, row, column1, column2, column3, column4, "1:00 pm", "2:15 pm", "1h 15m", "None", "$110:00");
  } else if (origin == "New York" && destination == "Baltimore") {
    addtoFlights(day, main, row, column1, column2, column3, column4, "9:00 am", "10:23 am", "1h 23m", "None", "$123:00");
    addtoFlights(day, main, row, column1, column2, column3, column4, "2:55 pm", "4:16 pm", "1h 21m", "None", "$121.96");
    addtoFlights(day, main, row, column1, column2, column3, column4, "5:40 pm", "6:57 pm", "1h 17m", "None", "$118.83");
    addtoFlights(day, main, row, column1, column2, column3, column4, "9:45 pm", "1:26 pm", "3h 53m", "3h 53m Layover at Boston International Airport", "$110.00");
  } else if (origin == "New York" && destination == "Philadelphia") {
    addtoFlights(day, main, row, column1, column2, column3, column4, "9:30 pm", "11:30 pm", "2h", "None", "$105.00");
    addtoFlights(day, main, row, column1, column2, column3, column4, "9:16 pm", "11:21 pm", "2h 5m", "None", "$105.53");
    addtoFlights(day, main, row, column1, column2, column3, column4, "1:00 pm", "6:21 pm", "5h 36m", "2h 25m Layover at Boston International Airport", "$99.98");
    addtoFlights(day, main, row, column1, column2, column3, column4, "11:49 am", "4:24 pm", "4h 35m", "2h 1m Layover at Ronald Reagan Washington Airport", "$98")
  } else if (origin == "New York" && destination == "Newark") {
    addtoFlights(day, main, row, column1, column2, column3, column4, "7:30 am", "8:05 am", "0h 35m", "None", "$26.50");
    addtoFlights(day, main, row, column1, column2, column3, column4, "1:20 pm", "1:56 pm", "0h 36m", "None", "$29.50");
    addtoFlights(day, main, row, column1, column2, column3, column4, "7:15 pm", "7:50 pm", "0h 35m", "None", "$29.98");
    addtoFlights(day, main, row, column1, column2, column3, column4, "9:00 pm", "9:30 pm", "0h 30m", "None", "$25.50");
  } else if (origin == "Boston" && destination == "Newark") {
    addtoFlights(day, main, row, column1, column2, column3, column4, "9:00 am", "10:10 am", "1h 10m", "None", "$80.50");
    addtoFlights(day, main, row, column1, column2, column3, column4, "11:15 am", "12:25 pm", "1h 10m", "None", "$85.96");
    addtoFlights(day, main, row, column1, column2, column3, column4, "12:45 pm", "1:55 pm", "1h 10m", "None", "$89.83");
    addtoFlights(day, main, row, column1, column2, column3, column4, "6:00 pm", "8:23 pm", "2h 23m", "1h 13m Layover at Martha’s Vineyard Airport", "$95.00");
  } else if (origin == "Boston" && destination == "New York") {
    addtoFlights(day, main, row, column1, column2, column3, column4, "5:43 am", "7:00 am", "1h 25m", "None", "$97.50");
    addtoFlights(day, main, row, column1, column2, column3, column4, "3:20 pm", "4:45 pm", "1h 25m", "None", "$95.00");
    addtoFlights(day, main, row, column1, column2, column3, column4, "8:10 pm", "9:35 pm", "1h 25m", "None", "$97.53");
    addtoFlights(day, main, row, column1, column2, column3, column4, "12:16 pm", "2:16 pm", "2h", "30m Layover at Newark Liberty International Airport", "$90.00");
  } else if (origin == "Boston" && destination == "Baltimore") {
    addtoFlights(day, main, row, column1, column2, column3, column4, "1:50 pm", "3:26 pm", "1h 19m", "None", "$70.50");
    addtoFlights(day, main, row, column1, column2, column3, column4, "5:47 pm", "7:26 pm", "1h 39m", "None", "$70.96");
    addtoFlights(day, main, row, column1, column2, column3, column4, "9:55 pm", "11:25 pm", "1h 30m", "None", "$72.83");
    addtoFlights(day, main, row, column1, column2, column3, column4, "10:00 pm", "1:23 pm", "3h 23m", "48m Layover at  Airpor Philadelphia International Airportt", "$74.00");
  } else if (origin == "Boston" && destination == "Philadelphia") {
    addtoFlights(day, main, row, column1, column2, column3, column4, "10:00 am", "11:30 pm", "1h 30m", "None", "$88.50");
    addtoFlights(day, main, row, column1, column2, column3, column4, "2:55 pm", "4:36 pm", "1h 41m", "None", "$82.56");
    addtoFlights(day, main, row, column1, column2, column3, column4, "11:00 pm", "12:35 pm", "1h 35m", "None", "$89.83");
    addtoFlights(day, main, row, column1, column2, column3, column4, "7:01 pm", "9:31 pm", "2h 30m", "1h Layover at Fort Lauderdale International Airport", "$77.40");
  } else if (origin == "Philadelphia" && destination == "Newark") {
    addtoFlights(day, main, row, column1, column2, column3, column4, "11:40 am", "12:44 pm", "1h 4m", "None", "$114.50");
    addtoFlights(day, main, row, column1, column2, column3, column4, "5:00 pm", "6:04 pm", "1h 4m", "None", "$134.96");
    addtoFlights(day, main, row, column1, column2, column3, column4, "11:15 pm", "12:19 pm", "1h 3m", "None", "$107.83");
    addtoFlights(day, main, row, column1, column2, column3, column4, "12:00 pm", "4:57 pm", "4h 57m", "3h 53m Layover at Detroit Metro Airport", "$140.00");
  } else if (origin == "Philadelphia" && destination == "New York") {
    addtoFlights(day, main, row, column1, column2, column3, column4, "1:00 pm", "3:58 pm", "2h 58m", "None", "$111.50");
    addtoFlights(day, main, row, column1, column2, column3, column4, "11:00 am", "1:55 pm", "2h 55m", "None", "$110.00");
    addtoFlights(day, main, row, column1, column2, column3, column4, "8:00 am", "11:30 pm", "4h 30m", "1h 38m Layover at Boston International Airport", "$105.73");
    addtoFlights(day, main, row, column1, column2, column3, column4, "7:00 pm", "`12:04 pm", "5h 7m", "2h 25m Layover at Boston Intermational Airport", "$99.69");
  } else if (origin == "Philadelphia" && destination == "Baltimore") {
    addtoFlights(day, main, row, column1, column2, column3, column4, "8:00 am", "9:00 am", "1h", "None", "$70.32");
    addtoFlights(day, main, row, column1, column2, column3, column4, "2:59 pm", "3:56 pm", "57", "None", "$80.42");
    addtoFlights(day, main, row, column1, column2, column3, column4, "9:25 pm", "10:24 pm", "59m", "None", "$77.53");
    addtoFlights(day, main, row, column1, column2, column3, column4, "12:00 pm", "1:02 pm", "1h 2m", "None", "$89.00");
  } else if (origin == "Philadelphia" && destination == "Boston") {
    addtoFlights(day, main, row, column1, column2, column3, column4, "7:00 am", "8:25 am", "1h 25m", "None", "$81.50");
    addtoFlights(day, main, row, column1, column2, column3, column4, "8:20 pm", "9:49 am", "1h 29m", "None", "$81.96");
    addtoFlights(day, main, row, column1, column2, column3, column4, "12:00 pm", "1:24 pm", "1h 24m", "None", "$82.83");
    addtoFlights(day, main, row, column1, column2, column3, column4, "4:15 pm", "5:38 pm", "1h 23m", "None", "$82.00");
  } else if (origin == "Baltimore" && destination == "Newark") {
    addtoFlights(day, main, row, column1, column2, column3, column4, "6:20 am", "6:56 am", "36m", "None", "$105.00");
    addtoFlights(day, main, row, column1, column2, column3, column4, "8:10 am", "8:45 am", "35m", "None", "$101.96");
    addtoFlights(day, main, row, column1, column2, column3, column4, "5:50 pm", "6:20 pm", "30m", "None", "$103.83");
    addtoFlights(day, main, row, column1, column2, column3, column4, "8:20 pm", "8:56 pm", "36m", "Nonet", "$102.00");
  } else if (origin == "Baltimore" && destination == "New York") {
    addtoFlights(day, main, row, column1, column2, column3, column4, "7:05 am", "8:35 am", "1h 30m", "None", "$93.50");
    addtoFlights(day, main, row, column1, column2, column3, column4, "6:00 am", "7:22 am", "1h 22m", "None", "$95.96");
    addtoFlights(day, main, row, column1, column2, column3, column4, "9:10 am", "10:25 am", "1h 15m", "None", "$97.83");
    addtoFlights(day, main, row, column1, column2, column3, column4, "2:06 pm", "7:00 pm", "4h 54m", "2h 7m Layover at Boston International Airport", "$102.00");
  } else if (origin == "Baltimore" && destination == "Philadelphia") {
    addtoFlights(day, main, row, column1, column2, column3, column4, "4:22 pm", "5:20 pm", "58m", "None", "$203.50");
    addtoFlights(day, main, row, column1, column2, column3, column4, "9:25 am", "10:16 am", "51m", "None", "$205.96");
    addtoFlights(day, main, row, column1, column2, column3, column4, "6:05 am", "7:02 am", "57m", "None", "$202.83");
    addtoFlights(day, main, row, column1, column2, column3, column4, "6:00 am", "10:23 am", "4h 23m", "1h 19m Layover at Boston International Airport", "$190.00");
  } else if (origin == "Baltimore" && destination == "Boston") {
    addtoFlights(day, main, row, column1, column2, column3, column4, "6:00 am", "7:26 am", "1h 26m", "None", "$89.50");
    addtoFlights(day, main, row, column1, column2, column3, column4, "2:06 pm", "3:31 pm", "1h 25m", "None", "$90.46");
    addtoFlights(day, main, row, column1, column2, column3, column4, "4:06 pm", "5:33 pm", "1h 27m", "None", "$92.83");
    addtoFlights(day, main, row, column1, column2, column3, column4, "6:00 am", "10:34 am", "2h 18m", "56m Layover at Detroit Metro Airport", "$98.00");
  }
}

function addtoFlights(day, main, row, column1, column2, column3, column4, depart, arrive, duration, layover, price){
  var p = document.createElement("p");
  p.setAttribute("class", "inTable");
  p.innerHTML = depart + "<br><br>";
  var p2 = document.createElement("p");
  p2.setAttribute("class", "inTable");
  p2.innerHTML = arrive + "<br><br>";
  var p3 = document.createElement("p");
  p3.setAttribute("class", "inTable");
  p3.innerHTML = duration + "<br><br>";
  var p4 = document.createElement("p");
  p4.setAttribute("class", "inTable");
  p4.innerHTML = layover + "<br><br>";
  var p5 = document.createElement("p");
  p5.setAttribute("class", "inTable");
  p5.innerHTML = price + "<br><br>";
  var button = document.createElement("button");
  button.setAttribute("class", "button");
  button.setAttribute("onclick", "bookFlight("+day+")");
  button.innerHTML = "Book Now" ;

  column1.appendChild(p);
  column2.appendChild(p2);
  column3.appendChild(p3);
  column4.appendChild(p4);
  column6.appendChild(p5);
  column5.appendChild(button);
  row.appendChild(column1);
  row.appendChild(column2);
  row.appendChild(column3);
  row.appendChild(column4);
  row.appendChild(column6);
  row.appendChild(column5);
  main.appendChild(row);
}

function addtoFlights2(day, main, row, column0, column01, column1, column2, column3, column4, origin, destination, depart, arrive, duration, layover, price){
  var p0 = document.createElement("p");
  p0.setAttribute("class", "inTable");
  p0.innerHTML = origin + "<br><br>";
  var p01 = document.createElement("p");
  p01.setAttribute("class", "inTable");
  p01.innerHTML = destination + "<br><br>";
  var p = document.createElement("p");
  p.setAttribute("class", "inTable");
  p.innerHTML = depart + "<br><br>";
  var p2 = document.createElement("p");
  p2.setAttribute("class", "inTable");
  p2.innerHTML = arrive + "<br><br>";
  var p3 = document.createElement("p");
  p3.setAttribute("class", "inTable");
  p3.innerHTML = duration + "<br><br>";
  var p4 = document.createElement("p");
  p4.setAttribute("class", "inTable");
  p4.innerHTML = layover + "<br><br>";
  var p5 = document.createElement("p");
  p5.setAttribute("class", "inTable");
  p5.innerHTML = price + "<br><br>";
  var button = document.createElement("button");
  button.setAttribute("class", "button");
  button.setAttribute("onclick", "bookFlight("+day+")");
  button.innerHTML = "Book Now" ;

  column0.appendChild(p0);
  column01.appendChild(p01);
  column1.appendChild(p);
  column2.appendChild(p2);
  column3.appendChild(p3);
  column4.appendChild(p4);
  column6.appendChild(p5);
  column5.appendChild(button);
  row.appendChild(column0);
  row.appendChild(column01);
  row.appendChild(column1);
  row.appendChild(column2);
  row.appendChild(column3);
  row.appendChild(column4);
  row.appendChild(column6);
  row.appendChild(column5);
  main.appendChild(row);
}

function bookFlight(day){
  var month = document.getElementById("monthTitle").innerHTML;
  var days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

  var today = new Date();
  var monthCut = String(today).substring(4, 7);
  var dayCut = String(today).substring(8, 10);
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  var index = months.indexOf(monthCut);
  var index2 = months.indexOf(month.substring(0, 3));

  if(index > index2){
    alert("Cannot book a flight before current date.");
  } else if (index == index2) {
    if(dayCut > day){
      alert("Cannot book a flight before current date.");
    } else {
      newFunction(day);
    }
  } else {
    newFunction(day);
  }
}

function newFunction(day){
  var bookFlight = document.getElementById("bookFlight");
  bookFlight.innerHTML = "";

  var outer = document.createElement("div");
  outer.setAttribute("class", "outer");
  outer.setAttribute("id", "outer");

  var book = document.createElement("p");
  book.setAttribute("class", "titleSch");
  book.setAttribute("id", "book");
  book.innerHTML = "Book This Flight:";

  var form = document.createElement("form");

  var label = document.createElement("label");
  var firstNameInput = document.createElement("input");
  var firstName = document.createTextNode("First Name");
  firstNameInput.setAttribute("class", "bookForm");
  firstNameInput.setAttribute("id", "firstName");

  var label2 = document.createElement("label");
  var lastNameInput = document.createElement("input");
  var lastName = document.createTextNode("Last Name");
  lastNameInput.setAttribute("class", "bookForm");
  lastNameInput.setAttribute("id", "lastName");

  var label3 = document.createElement("label");
  var birthdayInput = document.createElement("input");
  var birthday = document.createTextNode("Birthday");
  birthdayInput.setAttribute("class", "bookForm");
  birthdayInput.setAttribute("id", "birthday");
  birthdayInput.setAttribute("type", "date");

  var label4 = document.createElement("label");
  var emailDiv = document.createElement("div");
  emailDiv.setAttribute("class", "checkDiv");
  var emailInput = document.createElement("input");
  var email = document.createTextNode("Email");
  emailInput.setAttribute("class", "bookForm2");
  emailInput.setAttribute("id", "email");
  emailInput.required = true;
  emailInput.pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";
  var span1 = document.createElement("span");
  span1.setAttribute("class", "validity");

  var label5 = document.createElement("label");
  var passengersInput = document.createElement("input");
  var passengers = document.createTextNode("Number of Passengers");
  passengersInput.setAttribute("class", "bookForm");
  passengersInput.setAttribute("id", "passengers");

  var label6 = document.createElement("label");
  var selectionInput = document.createElement("select");
  selectionInput.setAttribute("class", "bookForm");
  selectionInput.setAttribute("id", "selection");
  var option1 = document.createElement("option");
  var option2 = document.createElement("option");
  option1.text = "Round Trip";
  option2.text = "One Way";
  selectionInput.add(option1);
  selectionInput.add(option2);

  var selection = document.createTextNode("Round Trip or One Way");
  var br = document.createElement("br");
  var selection1 = document.createTextNode("(price is doubled for round trip)");

  var submitInput = document.createElement("button");
  submitInput.innerHTML = "Submit";
  submitInput.setAttribute("class", "bookForm");
  submitInput.setAttribute("id", "submit");
  submitInput.setAttribute("type", "button");
  submitInput.setAttribute("onclick", "submitFlight("+day+")");

  firstNameInput.appendChild(firstName);
  label.appendChild(firstName);
  form.appendChild(label);
  form.appendChild(firstNameInput);

  lastNameInput.appendChild(lastName);
  label2.appendChild(lastName);
  form.appendChild(label2);
  form.appendChild(lastNameInput);

  birthdayInput.appendChild(birthday);
  label3.appendChild(birthday);
  form.appendChild(label3);
  form.appendChild(birthdayInput);

  passengersInput.appendChild(passengers);
  label5.appendChild(passengers);
  form.appendChild(label5);
  form.appendChild(passengersInput);

  selectionInput.appendChild(selection);
  selectionInput.appendChild(br);
  selectionInput.appendChild(selection1);
  label6.appendChild(selection);
  label6.appendChild(br);
  label6.appendChild(selection1);
  label6.appendChild(selectionInput);
  form.appendChild(label6);
  form.appendChild(selectionInput);

  emailDiv.appendChild(email);
  emailDiv.appendChild(emailInput);
  emailDiv.appendChild(span1);
  label4.appendChild(email);
  form.appendChild(label4);
  form.appendChild(emailDiv);

  form.appendChild(submitInput);

  bookFlight.appendChild(book);
  outer.appendChild(form);
  bookFlight.appendChild(outer);
}

function submitFlight(day){
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var birthday = document.getElementById("birthday").value;
  var passengers = document.getElementById("passengers").value;
  var selection = document.getElementById("selection").value;
  var email = document.getElementById("email").value;
  var bookFlight = document.getElementById("bookFlight");

  // if(firstName == "" || lastName == "" || birthday == "" || passengers == "" || selection == "" || email == "" ){
  //   alert("Please enter all required information.");
  // } else
  //  if (!email.checkValidity()){
  //   alert("Please enter a valid email address.");
  // } else {
    var outer = document.getElementById("outer");
    outer.innerHTML = "";
    var month = document.getElementById("monthTitle").innerHTML;

    var success = document.createElement("div");
    success.setAttribute("class", "success");
    success.setAttribute("id", "success");
    var successP = document.createElement("p");
    successP.setAttribute("class", "success");
    successP.setAttribute("id", "success");
    successP.innerHTML = "Request to book a flight on " + month + " " + day + ", 2020 <br><br>First Name: " + firstName + "<br>Last Name: " + lastName+ "<br>Birthday: " + birthday+ "<br>Number of Passengers: " + passengers+ "<br>Round Trip or One Way: " + selection+ "<br>Email: " + email + "<br><br>A confirmation email was sent to your email address with your information and a link to payment. <br>Returning trips can be redeemable on any flight with avaliable seats.<br><br>Thank you for flying with us!";

    success.appendChild(successP);
    outer.appendChild(success);
    bookFlight.appendChild(outer);
   }
// }

function month(){
  var jumpMonth = document.getElementById("jumpMonth").value;
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var month = document.getElementById("monthTitle").innerHTML;
  var index = months.indexOf(jumpMonth);
  var newMonth = months[index];
  document.getElementById("monthTitle").innerHTML = newMonth;

  var bookFlight = document.getElementById("bookFlight");
  while(bookFlight.firstChild) bookFlight.removeChild(bookFlight.firstChild);
  document.getElementById("main").innerHTML = '';
  document.getElementById("list").innerHTML = '';
  newMon(newMonth);
}

function next(){
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var month = document.getElementById("monthTitle").innerHTML;
  var index = months.indexOf(month);
  var newMonth = months[0];
  if(index == 11){
    newMonth = months[0];
    document.getElementById("monthTitle").innerHTML = newMonth;
  } else {
    newMonth = months[index+1];
    document.getElementById("monthTitle").innerHTML = newMonth;
  }
  var bookFlight = document.getElementById("bookFlight");
  while(bookFlight.firstChild) bookFlight.removeChild(bookFlight.firstChild);
  document.getElementById("main").innerHTML = '';
  document.getElementById("list").innerHTML = '';
  newMon(newMonth);
}

function back(){
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var month = document.getElementById("monthTitle").innerHTML;
  var index = months.indexOf(month);
  var newMonth = months[11];
  if(index == 0){
    newMonth = months[11];
    document.getElementById("monthTitle").innerHTML = newMonth;
  } else {
    newMonth = months[index-1];
    document.getElementById("monthTitle").innerHTML = newMonth;
  }
  var bookFlight = document.getElementById("bookFlight");
  while(bookFlight.firstChild) bookFlight.removeChild(bookFlight.firstChild);
  document.getElementById("main").innerHTML = '';
  document.getElementById("list").innerHTML = '';
  newMon(newMonth);
}

function newMon(newMonth){
  var ul = document.getElementById("days");
  while(ul.firstChild) ul.removeChild(ul.firstChild);
  switch(newMonth){
    case "January":
    for(var i = 0; i < 3; i++){
      insertEmpty();
    }
    for(var i = 1; i < 32; i++){
      insert(i);
    }
    break;
    case "February":
    for(var i = 0; i < 6; i++){
      insertEmpty();
    }
    for(var i = 1; i < 30; i++){
      insert(i);
    }
    break;
    case "March":
    for(var i = 1; i < 31; i++){
      insert(i);
    }
    break;
    case "April":
    for(var i = 0; i < 3; i++){
      insertEmpty();
    }
    for(var i = 1; i < 31; i++){
      insert(i);
    }
    break;
    case "May":
    for(var i = 0; i < 5; i++){
      insertEmpty();
    }
    for(var i = 1; i < 32; i++){
      insert(i);
    }
    break;
    case "June":
    for(var i = 0; i < 1; i++){
      insertEmpty();
    }
    for(var i = 1; i < 31; i++){
      insert(i);
    }
    break;
    case "July":
    for(var i = 0; i < 3; i++){
      insertEmpty();
    }
    for(var i = 1; i < 32; i++){
      insert(i);
    }
    break;
    case "August":
    for(var i = 0; i < 6; i++){
      insertEmpty();
    }
    for(var i = 1; i < 32; i++){
      insert(i);
    }
    break;
    case "September":
    for(var i = 0; i < 2; i++){
      insertEmpty();
    }
    for(var i = 1; i < 31; i++){
      insert(i);
    }
    break;
    case "October":
    for(var i = 0; i < 4; i++){
      insertEmpty();
    }
    for(var i = 1; i < 32; i++){
      insert(i);
    }
    break;
    case "November":
    for(var i = 1; i < 31; i++){
      insert(i);
    }
    break;
    case "December":
    for(var i = 0; i < 2; i++){
      insertEmpty();
    }
    for(var i = 1; i < 32; i++){
      insert(i);
    }
    break;
  }
}

function insertEmpty(){
  var li = document.createElement("li");
  var text = document.createTextNode("");
  li.style.paddingLeft = "3px";
  li.appendChild(text);
  var ul = document.getElementById("days");
  ul.insertBefore(li, ul.childNodes[0]);
}

function insert(day){
  var ul = document.getElementById("days");
  var li = document.createElement("li");
  var button = document.createElement("button");
  button.innerHTML = day;
  button.setAttribute("class","sch");
  li.style.paddingLeft = "3px";
  li.appendChild(button);
  button.setAttribute("onclick","myFunction("+day+");");
  ul.appendChild(li);
}

function deleteLi(){
  var ul = document.getElementById("days");
  ul.removeChild(ul.childNodes[0]);
}

function reset(){
  document.getElementById("origin").selectedIndex = 0;
  document.getElementById("destination").selectedIndex = 0;
}
