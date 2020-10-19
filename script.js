$(document).ready(function(){

// Current Time Console Log
    
    // Variables declared
    var currentHour12;
    var ampm;
    
    // The current time in military time(24hrs)
    const currentHourMilitary = moment().hour();
    
    // This if statements converts Military time into Normal 12hour time, represented by currentHour12 variable
    if(currentHourMilitary > 12){
        currentHour12 = currentHourMilitary - 12;
    }else{
        currentHour12 = currentHourMilitary;
    }
    // This if/else statements determines if it is AM or PM purely for console logging purposes 
    if(currentHourMilitary <= 11){
        ampm = "am"
    }else{
        ampm = "pm"
    }
    // Console Logging the current hour
    console.log("The Current Hour is " + currentHourMilitary + ":00");
    console.log("The Current Hour is " + currentHour12 + ampm);

    
// Setting a constant to represent the current date and pushing it into the HTML 
    const today = moment().format('dddd') + " " + moment().format('MMM Do YYYY')
    console.log("Today's Date is " + today);
    // Setting the Text Content of the <p> element in the HTML header to today's current date
    $("#currentDay").text(today);

// declaring global variables
var inputColumn;
var saveColumn;
var plannerContainer = $(".container");


generatePlanner();


function generatePlanner(){
for(i = 9, rowID = 0; i <= 18; i++, rowID++){

var standardTime = i;

//Converting from 24hr Clock to 12hr clock
if(i > 12){
    standardTime = i - 12;
}

// Creating row div and adding "row" class to it 
var row = $('<div>');
row.addClass('row');

// Code will contain either AM or PM based off the If statement below
let code = "";
    // condition that determines AM or PM
    if(i <= 11){
        code = "am"
    }else{
        code = "pm"
    }

//Creating a Column that displays the hour between 9AM to 6PM to the first colum in the row
var timeColumn = $('<div>');
timeColumn.addClass('hour col-1');
timeColumn.text(standardTime + code);

// Appends the timeColumn into the row
row.append(timeColumn);

//Creating an Input Column for users to input the event for the current hour
inputColumn = $('<input>');
inputColumn.attr('type', 'text');
inputColumn.attr('data-ID', rowID);
inputColumn.addClass('eventText col-10')

    // This if statement determines what time it is and changes the CSS classes to update
    // each input Column. The current hour will always be red, while future hours will be green
    // and past hours will be grayed out
    if(i < currentHourMilitary){
        inputColumn.addClass('past');
    }else if(i == currentHourMilitary){
        inputColumn.addClass('present');
    }else{
        inputColumn.addClass('future');
    }

// Creating a button column to save the content within the input
saveColumn = $('<button>');
// saveColumn.click(saveEvent())
saveColumn.attr('type', 'submit');
saveColumn.addClass('saveBtn col-1');
//Create an icon and adds classes to match FontAwesome 'Save' icon
var saveIcon = $('<i>');
saveIcon.addClass('far fa-save');
// Appends save Icon to button
saveColumn.append(saveIcon);

//Appends each Column into a row
row.append(timeColumn);
row.append(inputColumn);
row.append(saveColumn);

//Appends the entire row with all the column's into the planner div
plannerContainer.append(row);
console.log(row);


$(row).on('click', 'button', function(e){
    e.preventDefault();
    var event = $(this).val()
    console.log(event)
    });
    
    };
};



inputColumn = $(".eventText").val()


// Do not code past this line
    }
);
