// ------------------------- GLOBAL VARIABLES -------------------------

var employeeName;
var role;
var startDate;
var monthsWorked;
var monthlyRate;
var totalBilled;

  // ------------------------ FIREBASE -------------------------
  var config = {
    apiKey: "AIzaSyA2NlIE4ZucysDhkaTmVva4dhIy8dZi69o",
    authDomain: "employee-database-51c48.firebaseapp.com",
    databaseURL: "https://employee-database-51c48.firebaseio.com",
    projectId: "employee-database-51c48",
    storageBucket: "employee-database-51c48.appspot.com",
    messagingSenderId: "1031455141143"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

// ------------------------- FUNCTIONS -------------------------

$("#add-employee").on("click", function(event) {
    event.preventDefault();
    console.log("This worked");
    employeeName = $("#name").val().trim();
    console.log (employeeName); 
    role = $("#role").val().trim();
    console.log (role); 
    startDate = $("#start-date").val().trim();
    console.log (startDate); 
    monthlyRate = $("#rate").val().trim();
    console.log (monthlyRate); 

    database.ref().push({
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        name: employeeName,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyRate,
    }); 
});

database.ref().on("child_added", function(snapshot) {
    var snapshotVal = snapshot.val();
    console.log(snapshotVal.name);
    console.log(snapshotVal.role);
    console.log(snapshotVal.startDate);

    timeConversion(snapshotVal.startDate);

    var tRow = $("<tr>");
    var tdName = $("<td>");
    var tdRole = $("<td>");
    var tdStartDate = $("<td>");
    var tdMonthsWorked = $("<td>");
    var tdMonthlyRate = $("<td>");
    var tdTotalBilled = $("<td>");

    tdName.text(snapshotVal.name);
    tdRole.text(snapshotVal.role);
    tdStartDate.text(snapshotVal.startDate);
    tdMonthsWorked.text(snapshotVal.monthsWorked);
    tdMonthlyRate.text(snapshotVal.monthlyRate);
    tdTotalBilled.text(snapshotVal.totalBilled);

    tRow.append(tdName, tdRole, tdStartDate, tdMonthsWorked, tdMonthlyRate, tdTotalBilled)
    $(".table").append(tRow);
});

var timeConversion = function(startDate) {
    var startDateConverted = moment(startDate, "MM-DD-YYYY");
    console.log(startDateConverted);
}

