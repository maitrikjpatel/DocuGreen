!function($){var t=$("input#username").val(),e=$("input#password").val();console.log(t),console.log(e);var a=$("#envelope").text(),o=$("#signature").text(),n=$("#pages").text();$("#pages").text(n);var i=Math.round(.6*o);$("#trees").text(i);var r=Math.round(6.35169119*o*5);$("#co2").text(r);var l=Math.round(6.35169119*o*5/13.6860625);$("#vex").text(l);var s=Math.round(10*o*5);$("#water").text(s);var x=Math.round(2.2*o*5);$("#waste").text(x);var d=Math.round(1.29*o);$("#time").text(d);var u=Math.round(27.18*o);$("#money").text(u);var m=Math.round(27.18*o/7.2);$("#employees").text(m),$(".count").each(function(){$(this).prop("Counter",0).animate({Counter:$(this).text()},{duration:4e3,easing:"swing",step:function(t){$(this).text(Math.ceil(t))}})}),skel.breakpoints({xlarge:"(max-width: 1680px)",large:"(max-width: 1140px)",medium:"(max-width: 980px)",small:"(max-width: 736px)",xsmall:"(max-width: 480px)",xxsmall:"(max-width: 320px)"}),$(function(){var t=$(window),e=$("body");e.addClass("is-loading"),t.on("load",function(){window.setTimeout(function(){e.removeClass("is-loading")},250)}),$("form").placeholder(),skel.on("+mobile -mobile",function(){$.prioritize(".important\\28 mobile\\29",skel.breakpoint("mobile").active)}),$(".scrolly").scrolly()})}(jQuery);