// Below code: "wait until page is done loading so that elements have time to load.""
$(document).ready(function () {

 $(function() {
            $( "#slider-1" ).slider();
         });

});

 $(function() {
            $( "#slider-2" ).slider({
               value: 60,
               animate:"slow",
               orientation: "horizontal"
            });
  });




