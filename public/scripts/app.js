//document ready
$(document).ready(function() {
	console.log('front end working');

// get random quote from they said so api on button click 
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

// get get all quotes saved into input field.. delete on click
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

//get quote by id and delete the quote
  let deleteQuote = function(id) { 
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
    
//saves quote on submit from input field
$(document).ready(function(){

  $("#updateQuote").click(function(event) {
    event.preventDefault();
    
    var data = {
      newQuoteText: $("#newQuoteText").val()
    };

    $.post("/api/quotes/", data, function() {

      window.location.reload(); 
      $('#quotes').html('');
       $('.bg').css({
       background: 'none'
       }); 
    });
  
  });

 });

}); //end document ready





