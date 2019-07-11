
//Explore API and how data is organized 
//Feed data to web app 
//Refresh data every 60 seconds 
//Limit train results possible to make it manageable 
//Allow ability to add a train - should be interesting 


//TODO: Add SDKs for Firebase products that you want to use
     //https://firebase.google.com/docs/web/setup#config-web-app -->


// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyDepCoRkWVIFMUnzS9saCdIzqqlKGDgb18",
authDomain: "timely-trains.firebaseapp.com",
databaseURL: "https://timely-trains.firebaseio.com",
projectId: "timely-trains",
storageBucket: "",
messagingSenderId: "775550093184",
appId: "1:775550093184:web:ddf7dfab160d5202"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

//var database = firebaseConfig.database();

// Button for new train
$("#add-train-btn").on('click',function(event) {
    event.preventDefault();

    var trainName = $("#train-name-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var firstTime = $("#first-time-input").val().trim();
    var frequency = $("#frequency-input").val().trim();

    var newTrain = {
        name: trainName,
        desitn: destination,
        first: firstTime,
        freq: frequency,
    };

    database.ref().push(newTrain);

    console.log(trainName.name);
    console.log(destination.destin);
    console.log(firstTime.first);
    console.log(frequency.freq);

    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#first-time-input").val("");
    $("#frequency-input").val("");


// add new record to HTML and firbase 
database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

    // add  to variable 
    var trainName = childSnapshot.val().name;
    var destination = childSnapshot.val().destin;
    var firstTime = childSnapshot.val().first;
    var frequency = childSnapshot.val().freq;

    console.log(trainName);
    console.log(destination);
    console.log(firstTime);
    console.log(frequency);

    var minsAway = 

    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(destination),
        $("<td>").text(firstTime),
        $("<td>").text(frequency),
        $("<td>").text(minsAway),
    )

    $("#train-table > tbody").append(newRow);
});

