/* problems to solve :
-- border highlight around the box
*/


//define quote and author globally
//var quote, author= "";

var tweetString;
var apiURL = "http://quotes.stormconsultancy.co.uk/random.json";
var twitterIntentURL = "https://twitter.com/intent/tweet?text=";

function getQuote() {

/* don't miss  getJSON is asyncronious, be sure that response
 returned back */

  $.getJSON(apiURL, function(json){

        var quote = json.quote;
        var author = json.author;
        tweetString = '"' + quote + '", ' + author;
        d3.select("#quote").html(quote);
        $("#author").html(author);
        console.log(tweetString.length);

    });
}

$(document).ready(function() {

    $("#getQuote").on("click", getQuote);

    $("#tweet").on("click", function(){

        console.log(tweetString);
        console.log(tweetString.length);

        if ( tweetString.length < 160){
            window.open(twitterIntentURL+tweetString, '_blank', 'location=no,height=250,width=520,scrollbars=yes,status=yes');
        } else {
            window.alert("Tweet something conciser!");
        }
    })


});
