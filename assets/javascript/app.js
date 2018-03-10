// Side Nav Bar - Initialize collapse button
$(".button-collapse").sideNav();

$(document).ready(function() {
    $('.parallax').parallax();
    $('select').material_select();
});

$("#download-button").on("click", function() {
    console.log("yay")
    $(".input-field").empty();
    $("#download-button").remove();
});
$(document).ready(function() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBgk9gIgJdoUNUBNVtMmjcTpyjrVaXcR8A",
        authDomain: "pick-a-pet.firebaseapp.com",
        databaseURL: "https://pick-a-pet.firebaseio.com",
        projectId: "pick-a-pet",
        storageBucket: "",
        messagingSenderId: "1099432899618"
    };
    firebase.initializeApp(config);
    var userId = 0;
    $('.parallax').parallax();
    // Side Nav Bar - Initialize collapse button
    $(".button-collapse").sideNav();
    var database = firebase.database();
    $(document).on('click', '#send-button', function() {
        userId++
        database.ref('contact/' + userId).set({
            FirstName: $("#first_name").val().trim(),
            LastName: $("#last_name").val().trim(),
            Email: $("#email").val().trim(),
            Message: $("#textarea1").val().trim()
        })
    });
    $("#first_name").empty();
    $("#last_name").empty();
    $("#email").empty();
    $("#textarea1").empty();
});