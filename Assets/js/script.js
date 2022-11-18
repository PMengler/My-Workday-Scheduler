// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  $('.saveBtn').click(function() {
    
    var text = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
  
    console.log("Success! You saved an event in your calendar");
    localStorage.setItem(time, text);
    });
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  // *********THIS WORKS DON'T TOUCH***********
  function updateTimeBlockColor() {
    var currentHour = parseInt(dayjs().format("HH"));
    console.log(currentHour);
  $('.time-block').each(function() {
    var blockHour = parseInt($(this).attr("id"));
    console.log(this);
    if (currentHour > blockHour) {
      $(this).addClass('past');
    }
      else if (currentHour === blockHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      }
        else {
          $(this).removeClass('past');
          $(this).removeClass('present');
          $(this).addClass('future');
        }
    });
  };
  // *******************************************
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // This also works, but there may be a more elegant solution to populate all textareas
  $("#8 .description").val(localStorage.getItem("8"));
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));
  $("#18 .description").val(localStorage.getItem("18"));
  $("#19 .description").val(localStorage.getItem("19"));

  // TODO: Add code to display the current date in the header of the page.
  function updateClock() {
    var dt = new Date();
    document.getElementById('currentDay').innerHTML=dt;

    setTimeout(updateClock, 1000);
  };
  
  updateClock();
  updateTimeBlockColor();
});