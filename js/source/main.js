// Navbar
$(document).ready(function() {
  var menuToggle = $('#js-mobile-menu').unbind();
  $('#js-navigation-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-navigation-menu').slideToggle(function(){
      if($('#js-navigation-menu').is(':hidden')) {
        $('#js-navigation-menu').removeAttr('style');
      }
    });
  });
});

/* MixItUp
$(function(){
    $('.main').mixItUp({
			animation: {
        effects: 'fade',
				easing: 'ease',
        duration: 300,
				enable: false
    	},
//			load: {
//				filter: '.logos'
//			}
		});
});*/

/* Lightbox
lightbox.option({
	'resizeDuration': 200,
	'fadeDuration': 200,
	'alwaysShowNavOnTouchDevices': true,
	'fitImagesInViewport': true,
	'wrapAround': true
});*/

// Lazy Load
//$("img.main-item-img").lazyload(
	//{
  // effect : "fadeIn"
	//}
//);
//$(function() {
//    $("img.main-item-img").lazyload();
//});

// Active Class Filter
$('.main-gallery-filter a').click(function(e) {
    $('.main-gallery-filter a').removeClass('active');
    $(this).addClass('active');
});

// Scroll Top
/*function scrollNav() {
  $('.navigation a').click(function(){  
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 160
    }, 400);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();*/

// Filtro Custom + Fancybox
jQuery(function ($) {
    // fancybox
    $(document).ready(function() {
      $(".fancybox").fancybox({
        openEffect  : 'elastic',
        closeEffect : 'elastic',

        helpers : {
          overlay: {
            locked: false
          },
          title : {
            type : 'inside'
          }
        }
      });
    });
    // filter selector
    $(".filter").on("click", function () {
        var $this = $(this);
        // if we click the active tab, do nothing
        if ( !$this.hasClass("active-tab") ) {
            $(".filter").removeClass("active-tab");
            $this.addClass("active-tab"); // set the active tab
            // get the data-rel value from selected tab and set as filter
            var $filter = $this.data("rel"); 
            // if we select view all, return to initial settings and show all
            $filter == 'all' ? 
                $(".fancybox")
                .attr("data-fancybox-group", "gallery")
                .not(":visible")
                .fadeIn() 
            : // otherwise
                $(".fancybox")
                .fadeOut(0)
                .filter(function () {
                    // set data-filter value as the data-rel value of selected tab
                    return $(this).data("filter") == $filter; 
                })
                // set data-fancybox-group and show filtered elements
                .attr("data-fancybox-group", $filter)
                .fadeIn(1000); 
        } // if
    }); // on
}); // ready

// Maps Link
function navigate(lat, lng) {
    // If it's an iPhone..
    if ((navigator.platform.indexOf("iPhone") !== -1) || (navigator.platform.indexOf("iPod") !== -1)) {
      function iOSversion() {
        if (/iP(hone|od|ad)/.test(navigator.platform)) {
          // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
          var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
          return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
        }
      }
      var ver = iOSversion() || [0];

      if (ver[0] >= 6) {
        protocol = 'maps://';
      } else {
        protocol = 'http://';

      }
      window.location = protocol + 'maps.apple.com/maps?daddr=' + lat + ',' + lng + '&amp;ll=';
    }
    else {
      window.open('http://maps.google.com?daddr=' + lat + ',' + lng + '&amp;ll=');
    }
  }

// Maps Section

var bittersMap = (function () {
	var myLatlng = new google.maps.LatLng(-34.5775491, -58.483561099999974),
			mapCenter = new google.maps.LatLng(-34.5775491, -58.483561099999974),
			mapCanvas = document.getElementById('map_canvas'),
			mapOptions = {
				center: mapCenter,
				zoom: 13,
				scrollwheel: false,
				draggable: true,
				disableDefaultUI: true,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			},
			map = new google.maps.Map(mapCanvas, mapOptions),
			contentString =
				'<div id="content">'+
				'<div id="siteNotice">'+
				'</div>'+
				'<h1 id="firstHeading" class="firstHeading">Racha</h1>'+
				'<div id="bodyContent"'+
				'<p>Ávalos 2080</p>'+
				'</div>'+
				'</div>',
			infowindow = new google.maps.InfoWindow({
				content: contentString,
				maxWidth: 300
			}),
			marker = new google.maps.Marker({
				position: myLatlng,
				map: map,
				title: 'Racha (Argentina), Avalos 2080'
			});

	return {
		init: function () {
			map.set('styles', [{
				featureType: 'landscape',
				elementType: 'geometry',
				stylers: [
					{ hue: '#ffff00' },
					{ saturation: 30 },
					{ lightness: 10}
				]}
			]);

			google.maps.event.addListener(marker, 'click', function () {
				infowindow.open(map,marker);
			});
		}
	};
}());

bittersMap.init();