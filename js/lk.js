function authToggle(){$("#auth_tabs").toggle(),$("#auth_tabs").is(":visible")?$(".logindata").hide():$(".logindata").show()}$(document).ready((function(){if($("#agree_personaldata").length)$("#agree_personaldata").closest("form").find('button[type="submit"], input[type="submit"]').prop("disabled","disabled");$("#agree_personaldata").change((function(){var e=$(this).closest("form").find('button[type="submit"], input[type="submit"]');this.checked?e.removeAttr("disabled",!1):e.prop("disabled","disabled")}));var e=(new Date).getFullYear();$.datepicker.regional.fin={yearRange:e-10+":"+e,closeText:"Sulje",prevText:"&#xAB;Edellinen",nextText:"Seuraava&#xBB;",currentText:"Tänään",monthNames:["Tammikuu","Helmikuu","Maaliskuu","Huhtikuu","Toukokuu","Kesäkuu","Heinäkuu","Elokuu","Syyskuu","Lokakuu","Marraskuu","Joulukuu"],monthNamesShort:["Tammi","Helmi","Maalis","Huhti","Touko","Kesä","Heinä","Elo","Syys","Loka","Marras","Joulu"],dayNamesShort:["Su","Ma","Ti","Ke","To","Pe","La"],dayNames:["Sunnuntai","Maanantai","Tiistai","Keskiviikko","Torstai","Perjantai","Lauantai"],dayNamesMin:["Su","Ma","Ti","Ke","To","Pe","La"],weekHeader:"Vk",dateFormat:"d.m.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:"",changeMonth:!0,changeYear:!0},$.datepicker.regional.swe={yearRange:e-10+":"+e,closeText:"Stäng",prevText:"&#xAB;Förra",nextText:"Nästa&#xBB;",currentText:"Idag",monthNames:["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"],monthNamesShort:["jan.","feb.","mars","apr.","maj","juni","juli","aug.","sep.","okt.","nov.","dec."],dayNamesShort:["sön","mån","tis","ons","tor","fre","lör"],dayNames:["söndag","måndag","tisdag","onsdag","torsdag","fredag","lördag"],dayNamesMin:["sö","må","ti","on","to","fr","lö"],weekHeader:"Ve",dateFormat:"yy-mm-dd",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:"",changeMonth:!0,changeYear:!0},$.datepicker.regional.rus={yearRange:e-10+":"+e,closeText:"Закрыть",prevText:"&#x3c;Пред",nextText:"След&#x3e;",currentText:"Сегодня",monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthNamesShort:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],dayNames:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],dayNamesShort:["вск","пнд","втр","срд","чтв","птн","сбт"],dayNamesMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],weekHeader:"Нед",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:"",changeMonth:!0,changeYear:!0},$.datepicker.regional.cz={yearRange:e-10+":"+e,closeText:"Zavřít",prevText:"Předchozí",nextText:"Další",currentText:"Hoy",monthNames:["Leden","Únor","Březen","Duben","Květen","Červen","Červenec","Srpen","Září","Říjen","Listopad","Prosinec"],monthNamesShort:["Le","Ún","Bř","Du","Kv","Čn","Čc","Sr","Zá","Ří","Li","Pr"],dayNames:["Neděle","Pondělí","Úterý","Středa","Čtvrtek","Pátek","Sobota"],dayNamesShort:["Ne","Po","Út","St","Čt","Pá","So"],dayNamesMin:["Ne","Po","Út","St","Čt","Pá","So"],weekHeader:"Sm",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},$.datepicker.regional.eng={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:"",changeMonth:!0,changeYear:!0},$("#login_form").submit((function(e){window.grecaptcha&&!grecaptcha.getResponse()&&(e.preventDefault(),grecaptcha.execute())})),onCompleted=function(){$("#login_form").submit()},$("a.modalwindow").click((function(e){void 0!==$(this).attr("title")?$(".w3-modal-content header p").text($(this).attr("title")):$(".w3-modal-content header p").html($(this).text()),$("#modalwindow").css("display","block"),$("#modalwindow .modal-content").html('<div class="w3-center w3-padding-32"><i class="fa fa-spinner w3-xxlarge w3-text-gray" aria-hidden="true"></i></div>'),$("html").css("overflow-y","hidden"),$("html").css("height",$("html").height()+"px"),$.get($(this).attr("href"),(function(e){$("#modalwindow .modal-content").html(e)})),e.preventDefault()}))})),window.onbeforeunload=function(e){e?($(".w3-main, .w3-container, .w3-top, .w3-large, .w3-bar-block, .w3-row").css("opacity","0.1"),$(".loader").fadeIn()):$(".loader").hide()};