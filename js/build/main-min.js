function navigate(a,e){function t(){if(/iP(hone|od|ad)/.test(navigator.platform)){var a=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);return[parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3]||0,10)]}}if(-1!==navigator.platform.indexOf("iPhone")||-1!==navigator.platform.indexOf("iPod")){var n=t()||[0];n[0]>=6?protocol="maps://":protocol="http://",window.location=protocol+"maps.apple.com/maps?daddr="+a+","+e+"&amp;ll="}else window.open("http://maps.google.com?daddr="+a+","+e+"&amp;ll=")}$(document).ready(function(){var a=$("#js-mobile-menu").unbind();$("#js-navigation-menu").removeClass("show"),a.on("click",function(a){a.preventDefault(),$("#js-navigation-menu").slideToggle(function(){$("#js-navigation-menu").is(":hidden")&&$("#js-navigation-menu").removeAttr("style")})})}),$(".main-gallery-filter a").click(function(a){$(".main-gallery-filter a").removeClass("active"),$(this).addClass("active")}),jQuery(function(a){a(document).ready(function(){a(".fancybox").fancybox({openEffect:"elastic",closeEffect:"elastic",helpers:{overlay:{locked:!1},title:{type:"inside"}}})}),a(".filter").on("click",function(){var e=a(this);if(!e.hasClass("active-tab")){a(".filter").removeClass("active-tab"),e.addClass("active-tab");var t=e.data("rel");"all"==t?a(".fancybox").attr("data-fancybox-group","gallery").not(":visible").fadeIn():a(".fancybox").fadeOut(0).filter(function(){return a(this).data("filter")==t}).attr("data-fancybox-group",t).fadeIn(1e3)}})});var bittersMap=function(){var a=new google.maps.LatLng(-34.5775491,-58.483561099999974),e=new google.maps.LatLng(-34.5775491,-58.483561099999974),t=document.getElementById("map_canvas"),n={center:e,zoom:13,scrollwheel:!1,draggable:!0,disableDefaultUI:!0,mapTypeId:google.maps.MapTypeId.ROADMAP},o=new google.maps.Map(t,n),i='<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading">Racha</h1><div id="bodyContent"<p>Ávalos 2080</p></div></div>',l=new google.maps.InfoWindow({content:i,maxWidth:300}),s=new google.maps.Marker({position:a,map:o,title:"Racha (Argentina), Avalos 2080"});return{init:function(){o.set("styles",[{featureType:"landscape",elementType:"geometry",stylers:[{hue:"#ffff00"},{saturation:30},{lightness:10}]}]),google.maps.event.addListener(s,"click",function(){l.open(o,s)})}}}();bittersMap.init();