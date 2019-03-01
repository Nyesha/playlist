/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = [
    "BBIBBI",
    "Whos That",
    "Dimple / Illegal",
    "PARADISE ",
    ];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images_links = [
    "https://0.soompi.io/wp-content/uploads/2018/09/03080729/iu-12.jpg",
    "https://i.pinimg.com/originals/12/30/af/1230af2d77b5c84b09b65352a45f8041.jpg",
    "https://pm1.narvii.com/6594/e5816dd9c388d15522e796431ac5093a91ab6196_hq.jpg",
    "https://2.bp.blogspot.com/-GZbIYJ9ggHo/WvwG7WmTOWI/AAAAAAAAAg8/yml7LUEICo0BeQxWDAsRGbywUXefFakUQCLcBGAs/s1600/IMG_20180516_045029.jpg"];
var artists =[
    "IU",
    "GOT7",
    "BTS",
    "BTS"
    ];
var songLengths=["3:28","3:35","3:20","3:29"];

var links=[
    "https://www.youtube.com/watch?v=nM0xDI5R50E",
    "https://www.youtube.com/watch?v=UYgHu7GGbG4&index=9&list=OLAK5uy_miCnhaGe-xIKEwuspyrvWsu_MeZDOFP6c",
    "https://www.youtube.com/watch?v=B1jiZ8-JLo0",
    "https://www.youtube.com/watch?v=3g60P1VD2Lc"];



function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    songs.forEach(function(name){
        $("#songs").append("<p>" + name + "</p>");
    });


images_links.forEach(function(image){
    $("#images").append("<img src= '" + image + "'>");
});


artists.forEach(function(singer) {
    $("#artists").append("<p>" + singer + "</p>");
});

songLengths.forEach(function(length) {
    $("#lengths").append("<p> "+ length + "</p>");
});

links.forEach(function(link) {
    $("#links").append("<a href= '" + link + "'>" + "Listen Here!" + "'</a>")
    
})

    
};




function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#image").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();

}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
// 
var songName = $("#songName").val();
    songs.push(songName);
    
    var artist =$("#artist").val();
        artists.push(artist);
    var length = $("#lengths").val();
        songLengths.push(length);
    var link=$("#links").val();
        links.push(links);
    var images = $("#images").val;
        images.push(images);
        
    
}


$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
