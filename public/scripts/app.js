
$(document).ready(function() {
	console.log('front end working');


  $.get('/api',function(quotey){
      console.log(quotey);
      console.log('now for something completely different');

      function renderQuote(quote) {
       console.log('rendering quote:', quote);

   }
  
 });  

});

$( "#getRandom" ).on('click', function(event) {
 event.preventDefault();

$.get('/api/quotes').done(function(quotey){
      console.log(quotey);
      console.log('testing');


      $('#quote').append(quotey.contents.quote);
      $('#quote').css({
       margin: '100 auto'
     });

      $('#author').append( "~" + " " + quotey.contents.author);
      $('body').css({
       background: 'none'
     });
  
 });  

});



















//---------------------- old code --------------------------------//

   //    function renderQuote(quote) {
   //     console.log('rendering quote:', quote);

   //     document.write("<h1>" + quote.contents.quote + "</h1>");
   //     document.write("<h2>" + quote.contents.author + "</h2>");

     

   // }

//       $.get('/api/quotes', function(quote){
//         console.log(quote);
  
        
//     var randomQuote  =


    
//         $('#getRandom').append(randomQuote);

//       });

 
//     });
 
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

