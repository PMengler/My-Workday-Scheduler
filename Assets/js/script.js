// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var textBlock = $(".col-2");
  var task = $("text-area");
  
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  var timeBlockEl = $('.time-block');
  var saveButtonEl = timeBlockEl.children('.saveBtn');
  // var hourBlockId = $('saveBtn').parent().attr('id');
  var descriptionEl = $('.description');
  
  function saveEvent() {
    $.each(task, function() {
      this.value = "";
    });
    var description = $('textarea').val();
    descriptionEl.text(description);

    localStorage.setItem('description', description);
  };

  saveButtonEl.on('click', function(event) {
    event.preventDefault();
    saveEvent();
    localStorage.getItem('description', description).text;
    console.log($(this).parent().attr('id'));
  });



  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?


  function updateCurrentScheduleTime() {
    textBlock.removeClass('past present future');
    $.each(textBlock, function (scheduleBlockHour) {
        if (scheduleBlockHour < dayjs().hour(24)) {
            $(this).addClass('past');
        } else if (scheduleBlockHour == dayjs().hour(24)) {
            $(this).addClass('present');
        } else {
            $(this).addClass('future');
        }
    });
    currentHour = dayjs().hour(24);
  }; 

  
  // function updateTimeBlocks() { //not sure what to do with this section yet
  //   dayjs().hour();
  //   currentHour = dayjs().hour(24);

  //   var timeBlockEl = $('#container-fluid');
  //   var calendarHour = timeBlockEl.getElementById(Number);
  //   console.log(calendarHour);
  //   // if () {}; // If statement for [Current Hour > Calendar Hour] to change color to gray
  //   // timeBlockEl.children('class', 'past');
    
  //   // if() {}; // If statement for [Current Hour == Calendar Hour] to change color to red
  //   // timeBlockEl.children('class', 'present');
    
  //   // if() {}; // If statement for [Current Hour < Calendar Hour] to change color to green
  //   // timeBlockEl.children('class', 'future');

  //   // var calendarHour = document.getElementById('#hour-');
  // };

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?



  // TODO: Add code to display the current date in the header of the page.
  function updateClock() {
    var dt = new Date();
    document.getElementById('currentDay').innerHTML=dt;

    setTimeout(updateClock, 1000);
  };
  
  
  
  updateClock();
  updateCurrentScheduleTime();
});
