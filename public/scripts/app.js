


$(document).ready(function() {
	console.log('front end working');


  $.get('/api',function(quotey){
      console.log(quotey);
      console.log('now for something completely different');
  });
  
 });  

function renderQuote(quote) {
  console.log('rendering quote:', quote);



$( "#getRandom" ).on('click', function(event) {
	event.preventDefault();
      $.get('/api/quotes', function(event){
        console.log(event);
  
        
    var randomQuote  =

    document.write("<h1>" + event.contents.quote + "</h1>");
    document.write("<h2>" + event.contents.author + "</h2>");
    
        $('#getRandom').append(randomQuote);

      });

 
    });
 
}






// <!--       <script type="text/javascript">
//         $.get('http://quotes.rest/quote/random.json?api_key=')
//          .done(function(data){
//            console.log(data);
//            console.log("QUOTE: " + data.contents.quote);
//            document.write("<h1>" + data.contents.quote + "</h1>");
//            document.write("<h2>" + data.contents.author + "</h2>");
//        });//End loop

//        //  $.get('http://quotes.rest/quote/image/search?api_key=')
//        //   .done(function(data){
//        //     console.log(data);
//        //     console.log("image: " + data.contents.qimage);
//        //     document.write("<img" + data.contents.qimage + "/>");
//        // });//End loop        
//         </script> -->

 //  };

