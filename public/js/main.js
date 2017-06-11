$(function() {

    //Changing the active item in the main menu and sidebar
    var rel = $('body[rel]').attr('rel');
    $('.main.menu a:eq(' + rel + ') , #side a:eq(' + rel + ')').addClass('active');

     //fix menu when passed
      $('.masthead')
        .visibility({
          once: false,
          onBottomPassed: function() {
            $('.fixed.menu').transition('fade in');
          },
          onBottomPassedReverse: function() {
            $('.fixed.menu').transition('fade out');
          }
        })
      ;
      //Changing the active item in following menu
      var rel = $('body[rel]').attr('rel');
    $('.fixed.menu a:eq(' + rel + ') , #side a:eq(' + rel + ')').addClass('active');


    // create sidebar and attach to menu open

    $('.sidebar-icon > .sidebar.icon').on('click', function() {

        $('.ui.sidebar').sidebar('toggle');


    });

  //  var nav = responsiveNav(".nav-collapse", {
  //      animate: true,
  //      transition: 100000000,
  //      });
  //  nav.toggle();
});
