;(function($) {

    'use strict'

    var countDown = function() {
        var before = '<div class="square"><div class="numb">',
            text = '</div><div class="text">';
                if ($().countdown) {
                    $(".countdown").countdown('2023/10/24', function(event) {
                $(this).html(event.strftime(before + '%D' + text + 'Dias</div></div>' + before + '%H' + text + 'Horas</div></div>' + before + '%M' + text + 'Minutos</div></div>' + before + '%S' + text + 'Segundos</div>'));
                });
            }         
    };

  	// Dom Ready
      $(function() {
        countDown();
         });
  })(jQuery);


  