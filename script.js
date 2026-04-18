var theme = 0;
var layout = 0;
var time = 10;
var t = 0;
let mouseX, mouseY;
var mouseXP = 0;
var mouseYP = 0;
var hidden = false;
setInterval(update, time);
function update() {
  var daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var date = new Date();
  var mils = date.getMilliseconds();
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours = date.getHours();
  var weekday = date.getDay();
  var days = date.getDate();
  days -= 1;
  var months = date.getMonth();
  var year = date.getFullYear();
  var dayOfYear = Math.round((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  dayOfYear -= 1;
  var yearsDecade = year % 10;
  var yearsCentury = year % 100;
  //Leap year detector:
    var leap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  //CENTURY
  document.getElementById("centuryp").style.width = ((yearsCentury / 100) + (dayOfYear / 36525)) * 100 + "%";
  document.getElementById("centurylabel").innerText = Math.round(((yearsCentury / 100) + (dayOfYear / 36525)) * 10000) / 100 + "% to the next century"

  //DECADE
  document.getElementById("decadep").style.width = ((yearsDecade / 10) + (dayOfYear / 3652.5)) * 100 + "%";
  document.getElementById("decadelabel").innerText = Math.round(((yearsDecade / 10) + (dayOfYear / 3652.5)) * 100 * 100) / 100 + "% to the next decade"


  //YEAR
  if (leap == true) {
    document.getElementById("yearp").style.width = (((dayOfYear / 366) + (hours / 8784) + (minutes / 527040)) * 100) + "%";
    document.getElementById("yearlabel").innerText = (((Math.round(((dayOfYear / 366) + (hours / 8784) + (minutes / 527040)) * 10000)) / 100)).toFixed(2) + "% to the next year";
  } else {
    document.getElementById("yearp").style.width = (((dayOfYear / 365) + (hours / 8760) + (minutes / 525600)) * 100) + "%";
    document.getElementById("yearlabel").innerText = (((dayOfYear / 365) + (hours / 8760) + (minutes / 525600))*100).toFixed(2) + "% to the next year";
  }

  //MONTH
  if (leap == true && months == 1) {
    document.getElementById("monthp").style.width = (((days / 29) + (hours / 696)) * 100) + "%"
    document.getElementById("monthlabel").innerText = Math.round(((days / 29) + (hours / 696)) * 100 * 100) / 100 + "% to the next month";
  } else {
    document.getElementById("monthp").style.width = (((days / daysPerMonth[months]) + (hours / (daysPerMonth[months] * 24))) * 100) + "%";
    document.getElementById("monthlabel").innerText = Math.round(((days / daysPerMonth[months]) + (hours / (daysPerMonth[months] * 24))) * 100 * 100) / 100 + "% to the next month";
  }

  //WEEK
  document.getElementById("weekp").style.width = (((weekday / 7) + (hours / 168) + (minutes / 10080)) * 100) + "%";
  document.getElementById("weeklabel").innerText = Math.round((((weekday / 7) + (hours / 168) + (minutes / 10080)) * 100 * 100)) / 100 + "% to the next week";

  //DAY
  document.getElementById("dayp").style.width = (((hours / 24) + (minutes / 1440) + (seconds / 86400)) * 100) + "%";
  document.getElementById("daylabel").innerText = Math.round(((hours / 24) + (minutes / 1440) + (seconds / 86400)) * 100 * 100) / 100 + "% to the next day";

  //HOUR
  document.getElementById("hourp").style.width = (((minutes / 60) + (seconds / 3600)) * 100) + "%";
  document.getElementById("hourlabel").innerText = Math.round(((minutes / 60) + (seconds / 3600) + (mils / 3600000)) * 100 * 100) / 100 + "% to the next hour";

  //MINUTE
  document.getElementById("minutep").style.width = (((seconds / 60) + (mils / 60000)) * 100) + "%";
  document.getElementById("minutelabel").innerText = Math.round(((seconds / 60) + (mils / 60000)) * 100 * 100) / 100 + "% to the next minute";

  //SECOND
  document.getElementById("secondp").style.width = (mils / 1000 * 100) + "%";
  document.getElementById("secondlabel").innerText = Math.round((mils / 1000 * 100)) + "% to the next second";

  //CHECK FOR INACTIVITY
  if (mouseYP == mouseY && mouseXP == mouseX) {
    t += 1;
  } else {
    t = 0;
    showOptions();
  }
  if (t > 500 && hidden == false) {
    hideOptions();
  }
  mouseXP = mouseX;
  mouseYP = mouseY;
}
//Find mouse
document.addEventListener('mousemove', function(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

function hideOptions() {
  document.getElementById("themebutton").style.transition = "1s";
  document.getElementById("layoutbutton").style.transition = "1s";
  document.getElementById("currentthemelabel").style.transition = "1s";
  document.getElementById("currentlayoutlabel").style.transition = "1s";
  document.getElementById("themebutton").style.opacity = 0 + "%";
  document.getElementById("layoutbutton").style.opacity = 0 + "%";
  document.getElementById("currentthemelabel").style.opacity = 0 + "%";
  document.getElementById("currentlayoutlabel").style.opacity = 0 + "%";
  document.body.style.cursor = 'none';
  document.getElementById("themebutton").style.cursor = "none";
  document.getElementById("layoutbutton").style.cursor = "none";
  hidden = true;
}
function showOptions() {
  document.getElementById("themebutton").style.transition = "0s";
  document.getElementById("layoutbutton").style.transition = "0s";
  document.getElementById("currentthemelabel").style.transition = "0s";
  document.getElementById("currentlayoutlabel").style.transition = "0s";
  document.getElementById("themebutton").style.opacity = 100 + "%";
  document.getElementById("layoutbutton").style.opacity = 100 + "%";
  document.getElementById("currentthemelabel").style.opacity = 100 + "%";
  document.getElementById("currentlayoutlabel").style.opacity = 100 + "%";
  document.body.style.cursor = 'default';
  document.getElementById("themebutton").style.cursor = "pointer";
  document.getElementById("layoutbutton").style.cursor = "pointer";
  hidden = false;
  t = 0;
}
function toggleTheme() {
  showOptions();
  if (theme == 15) {
    theme = 0;
  } else {
    theme += 1;
  }
  var progressList = ["white", "black", "white", "black", "#e00202", "#ff6f00", "#FFD724", "lime", "#00e6da", "#2a68f7", "#922BFF", "#f75eed", "#222", "#094ae0", "#9c74f7", "white"];
  var progressbackgroundList = ["#999999", '#999999', "#999999", "white", "#999", "#999", "#999", "#999", "#999", "#999", "#999", "#999", "#222", "#5450b3", "#555", "999"];
  var backgroundList = ["#222222", "white", "black", "black", "#222222", "#222222", "#222222", "#222222", "#222222", "#222222", "#222222", "#222222", "#222", "#04287d", "#222", "#222"];
  var textList = ["white", "black", "white", "white", "#e00202", "#ff6f00", "#FFD724", "lime", "#00e6da", "#2a68f7", "#A158F0", "#f75eed", "white", "#b0c5f7", "#b0c0ff", "white"];
  var dividerList = ["black", "black", "black", "white", "black", "black", "black", "black", "black", "black", "black", "black", "white", "#b0c5f7", "white", "white"];
  var names = ["Dark", "Light", "Blackout", "Inverted", "Red", "Orange", "Yellow", "Green", "Aqua", "Blue", "Purple", "Pink", "Lines", "Ocean", "Code", "Rainbow"];
  var j = document.getElementsByClassName("p");
  var k = document.getElementsByClassName("pholder");
  for (var i = 0; i < j.length; i++) {
    j[i].style.backgroundColor = progressList[theme];
    j[i].style.borderRight = "2px solid " + dividerList[theme];
    if (theme == 12) {
      k[i].style.borderRight = "2px solid white";
      k[i].style.borderLeft = "2px solid white";
    } else if (theme == 13) {
      k[i].style.borderRight = "0px solid white";
      k[i].style.borderLeft = "0px solid white";
    }
  }
  var j = document.getElementsByClassName("pholder");
  for (var i = 0; i < j.length; i++) {
    j[i].style.backgroundColor = progressbackgroundList[theme];
  }
  var j = document.getElementsByClassName("label");
  for (var i = 0; i < j.length; i++) {
    j[i].style.color = textList[theme];
  }
  var k = document.getElementsByClassName("button");
  for (var i = 0; i < k.length; i++) {
    k[i].style.color = textList[theme];
    k[i].style.border = "2px solid " + dividerList[theme];
    if (theme == 3) {
      k[i].style.backgroundColor = "black";
    } else {
      k[i].style.backgroundColor = progressbackgroundList[theme];
    }
  }
  if (theme == 15) {
    document.getElementById("centuryp").style.backgroundColor = "#e00202";
    document.getElementById("centurylabel").style.color = "#e00202";
    document.getElementById("decadep").style.backgroundColor = "#ff6f00";
    document.getElementById("decadelabel").style.color = "#ff6f00";
    document.getElementById("yearp").style.backgroundColor = "#FFD724";
    document.getElementById("yearlabel").style.color = "#FFD724";
    document.getElementById("monthp").style.backgroundColor = "lime";
    document.getElementById("monthlabel").style.color = "lime";
    document.getElementById("weekp").style.backgroundColor = "#00e6da";
    document.getElementById("weeklabel").style.color = "#00e6da";
    document.getElementById("dayp").style.backgroundColor = "#2a68f7";
    document.getElementById("daylabel").style.color = "#2a68f7";
    document.getElementById("hourp").style.backgroundColor = "#A158F0";
    document.getElementById("hourlabel").style.color = "#A158F0";
    document.getElementById("minutep").style.backgroundColor = "#f75eed";
    document.getElementById("minutelabel").style.color = "#f75eed";
    document.getElementById("secondp").style.backgroundColor = "#e00202";
    document.getElementById("secondlabel").style.color = "#e00202";
  }
  document.body.style.backgroundColor = backgroundList[theme];
  document.getElementById("currentthemelabel").innerText = "Current Theme: " + names[theme];
}
function toggleLayout() {
  showOptions();
  var layoutNames = ["Default", "Fullscreen", "Compact"];
  if (layout == 2) {
    layout = 0;
  } else {
    layout += 1;
  }
  document.getElementById("currentlayoutlabel").innerText = "Current Layout: " + layoutNames[layout];
  if (layout == 0) {
    document.getElementById("master").style.grid = "auto / 80% 20%";
    document.getElementById("master").style.rowGap = "0px";
    e = document.getElementsByClassName("l")
    for (var i = 0; i < e.length; i++) {
      e[i].style.display = "block";
    }
  } else if (layout == 1) {
    document.getElementById("master").style.grid = "auto / 98.5%";
    document.getElementById("master").style.rowGap = "9vh";
    e = document.getElementsByClassName("l")
    for (var i = 0; i < e.length; i++) {
      e[i].style.display = "none";
    }

  } else if (layout == 2) {
    document.getElementById("master").style.grid = "auto / 98.5%";
    document.getElementById("master").style.rowGap = "20px";
  }
}