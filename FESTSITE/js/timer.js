$(function(){function a(a){function d(a){return a<10?"0"+a:a}var c={endDate:"2050-02-21 10:00",timeZone:"Asia/Calcutta",hours:$("#hours"),minutes:$("#minutes"),seconds:$("#seconds"),newSubMessage:"and should be back online in a few minutes..."};$.extend(!0,c,a||{});var e=moment(),f=moment.tz(c.endDate,c.timeZone),g=f.valueOf()-e.valueOf(),h=moment.duration(g,"milliseconds"),i=h.days(),j=1e3,k=$(".sub-message"),l=$(".clock");if(g<0)return void b(k,c.newSubMessage,l);i>0&&($("#days").text(d(i)),$(".days").css("display","inline-block"));var m=setInterval(function(){h=moment.duration(h-j,"milliseconds");var a=h.hours(),e=h.minutes(),f=h.seconds();i=h.days(),a<=0&&e<=0&&f<=0&&i<=0&&(clearInterval(m),b(k,c.newSubMessage,l),window.location.reload()),0===i&&$(".days").hide(),$("#days").text(d(i)),c.hours.text(d(a)),c.minutes.text(d(e)),c.seconds.text(d(f))},j)}function b(a,b,c){a.text(b),c.hide()}a()});