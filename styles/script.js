$(document).ready(function() {
    // Get all 'section' elements
    var $section = $('section');
  
    // Loop through all 'section' elements
    $section.each(function() {
      // Insert <hr> after each 'section' element
      $(this).after('<hr>');
    });
  });
  