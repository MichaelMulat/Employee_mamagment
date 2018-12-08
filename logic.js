// ------------------------- GLOBAL VARIABLES -------------------------

var employeeName;
var role;
var startDate;
var monthsWorked;
var monthlyRate;
var totalBilled;

// ------------------------- FUNCTIONS -------------------------

$("#add-employee").on("click", function() {
    employeeName = $().val().trim();
    role = $().val().trim();
    startDate = $().val().trim();
    monthlyRate = $().val().trim();
});