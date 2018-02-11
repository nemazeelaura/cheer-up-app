
$(document).ready(function() {
	console.log('front end working');

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
      $('.bg').css({
       background: 'none'

     });
      
  });  
});


// //get all quotes
// let getAllQuotes = function loaddata() {
//  $.get('/api',function(quotey){
//       console.log(quotey);
//       console.log('now for something completely different');
//        $('#quotes').append(quotey);  
// });

// };

 

 $.get('/api',function(quotey){
      console.log(quotey);
      console.log('now for something completely different');
      $('#quotes').html('');
     for (i = 0; i < quotey.length; i++) {
 
     // console.log(quotey[i]); 
      let quoteId = (quotey[i]._id);
      console.log(quoteId);     
      let test = $('<div>').html(quotey[i].quote).attr('id', quoteId).click(function() {
         deleteQuote(quoteId);
      });
      console.log(test[0]);
      $('#quotes').append(test[0]);  
      
      $('#quotes').css({
       background: 'rgba(230, 251, 246, 1)'
      });
  

     }
   });  



   let deleteQuote = function(id) {  //get quote by id and delete the quote
          console.log(id);

          $.ajax({
            url: '/api/quotes/' + id,
            type: 'DELETE',
            success: function(result) {
            console.log(result);
            
            $.get('/api',function(quotey){
            console.log(quotey);
            console.log('now for something completely different');
            $('#quotes').html('');
           for (i = 0; i < quotey.length; i++) {
       
               // console.log(quotey[i]); 
                let quoteId = (quotey[i]._id);
                console.log(quoteId);     
                let test = $('<div>').html(quotey[i].quote).attr('id', quoteId).click(function() {
                   deleteQuote(quoteId);
                });
                console.log(test[0]);
                $('#quotes').append(test[0]);
               }
            }); 

          }
      });
   };

 //  let updateQuote = document.getElementById('updateQuote')

 //       update.addEventListener('click', function (){
 //        fetch('quotes/edit', {
 //        method: 'put',
 //        headers: {'Content-Type': 'application/json'},
 //        body: JSON.strigify({
 //        'quote': 'quote'
 //      })
 //    });
 // });

  
   
//saves quote on submit

$(document).ready(function(){


  $("#updateQuote").click(function(event) {
    event.preventDefault();

    
    var data = {
      newQuoteText: $("#newQuoteText").val()

    };


    // console.log(data.newQuoteText);

    $.post("/api/quotes/", data, function() {

      $('#newQuoteText').append( " " + data + " ");
      $('.bg').css({
       background: 'none'

     });

      // $('#quote').append(data);
      // return res.redirect('/');
      window.location.reload(); 
      $('#quotes').html('');
       $('.bg').css({
       background: 'none'
       }); 
 
    });

  });

});



}); //end document ready








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

