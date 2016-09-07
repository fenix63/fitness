
        var hwSlideSpeed = 700;
        var hwTimeOut = 3000;
        var hwNeedLinks = true;
         
        $(document).ready(function(e) {
            $('.slide').css(
                {"position" : "absolute",
                 "top":'0', "left": '0'}).hide().eq(0).show();
            var slideNum = 0;
            var slideTime;
			var slideTime2;
            slideCount = $("header + .slider #slider .slide").size();//òîëüêî äëÿ âåðõíåãî ñëàéäåðà
			slideCount2 = $(".reviews #slider .slide").size();//Äëÿ íèæíåãî ñëàéäåðà
			
            var animSlide = function(arrow){
                clearTimeout(slideTime);
                $('header + .slider #slider .slide').eq(slideNum).fadeOut(hwSlideSpeed);
                if(arrow == "next"){
                    if(slideNum == (slideCount-1)){slideNum=0;}
                    else{slideNum++}
                    }
                else if(arrow == "prew")
                {
                    if(slideNum == 0){slideNum=slideCount-1;}
                    else{slideNum-=1}
                }
                else{
                    slideNum = arrow;
                    }
					
					$('.slide').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
					$(".control-slide.active").removeClass("active");
					$('.control-slide').eq(slideNum).addClass('active');
            }
			
			var animSlide2 = function(arrow){
                clearTimeout(slideTime2);
                $('.reviews .slide').eq(slideNum).fadeOut(hwSlideSpeed);
                if(arrow == "next"){
                    if(slideNum == (slideCount2-1)){slideNum=0;}
                    else{slideNum++}
                    }
                else if(arrow == "prew")
                {
                    if(slideNum == 0){slideNum=slideCount-1;}
                    else{slideNum-=1}
                }
                else{
                    slideNum = arrow;
                    }
					
					$('.reviews .slide').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
					$(".reviews .control-slide.active").removeClass("active");
					$('.reviews .control-slide').eq(slideNum).addClass('active');
            }
			
			
                if(hwNeedLinks){
				//Íàäî ÷òîá ýòîò êîä ðàáîòàë òîëüêî íà íèæíèé ñëàéäåð
				
                 //var $linkArrow = $('<a id="prewbutton"></a><a id="nextbutton" ></a>')
                   //  .prependTo('.reviews #slider');      
				   var $linkArrow = $('<a id="prewbutton"></a><a id="nextbutton" ></a>')
                     .appendTo('.reviews #slider');
                     
				    $('#nextbutton').click(function(){
                         animSlide2("next") 
                        })
                     $('#prewbutton').click(function(){
                         animSlide2("prew");
                         })
                }
                    var $adderSpan = '';
                    $('.slide').each(function(index) {
                            $adderSpan += '<span class = "control-slide">' + index + '</span>';
                        });

                    //Äîáàâëåíèå êíîïîê íàâèãàöèè
                    //$('<div class ="sli-links">' + $adderSpan +'</div>').appendTo('#slider-wrap');
                    
                    $(".control-slide:first").addClass("active");
                     
                    $('.control-slide').click(function(){
                    var goToNum = parseFloat($(this).text());
                    animSlide(goToNum);
                    });
                    var pause = false;
                    var rotator = function(){
                    if(!pause){
						slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);
						slideTime2 = setTimeout(function(){animSlide2('next')}, hwTimeOut);
						}
                    }
                    $('#slider-wrap').hover(    
                        function(){clearTimeout(slideTime); clearTimeout(slideTime2)   ; pause = true;},
                        function(){pause = false; rotator();
                        });
                    rotator();
					
					
					
					
					//Íàäî äîäåëàòü
					$('.items .item').hover(function(){
						$(this).children('.layer').css('display','block');
						$(this).children('.about').children('button').css({'color':'#9dc02e','background-color':'#fff'});
					}, function(){
						$(this).children('.layer').css('display','none');
						$(this).children('.about').children('button').css({'color':'#fff','background-color':'transparent'});
					});
					
					
					//Ìàñêà äëÿ òåëåôîíà
					$(function(){
					  $("input[name='phone']").mask("+7(999) 999-99-99");
					});
					
					
                });


	

		$(document).ready(function() { // âñÿ ìaãèÿ ïoñëå çaãðóçêè ñòðaíèöû
			$('.social button').click( function(event){ // ëoâèì êëèê ïo ññûëêè ñ id="go"
				event.preventDefault(); // âûêëþ÷aåì ñòaíäaðòíóþ ðoëü ýëåìåíòa
				$('#overlay').fadeIn(400, // ñía÷aëa ïëaâío ïoêaçûâaåì òåìíóþ ïoäëoæêó
					function(){ // ïoñëå âûïoëíåíèÿ ïðåäúèäóùåé aíèìaöèè
						$('#modal_form') 
							.css('display', 'block') // óáèðaåì ó ìoäaëüíoão oêía display: none;
							.animate({opacity: 1, top: '50%'}, 200); // ïëaâío ïðèáaâëÿåì ïðoçða÷íoñòü oäíoâðåìåíío ño ñúåçæaíèåì âíèç
				});
			});
			
			/* Çaêðûòèå ìoäaëüíoão oêía, òóò äåëaåì òo æå ñaìoå ío â oáðaòíoì ïoðÿäêå */
			$('#modal_close, #overlay').click( function(){ // ëoâèì êëèê ïo êðåñòèêó èëè ïoäëoæêå
				$('#modal_form, .msg_ok, .tren, .prepod_modal, .raspisanie_modal')
					.animate({opacity: 0, top: '45%'}, 200,  // ïëaâío ìåíÿåì ïðoçða÷íoñòü ía 0 è oäíoâðåìåíío äâèãaåì oêío ââåðõ
						function(){ // ïoñëå aíèìaöèè
							$(this).css('display', 'none'); // äåëaåì åìó display: none;
							$('#overlay').fadeOut(400); // ñêðûâaåì ïoäëoæêó
						}
					);
			});
			
			//àÿêñ ôîðìà îáðàòíîé ñâÿçè
			//ïðîâåðÿåò êàêîé îòâåò áûë ïîëó÷åí
			//è â çàâèñèìîñòè îò îòâåòà
			//âûâîäèò èíôîðìàöèþ î ñòàòóñå
			//îòïðàâêè ïèñüìà
			$("#modal_form form").submit(function() {
				var str = $(this).serialize();
				$.ajax({
					type: "POST",
					//url: "js/callback.js",
					data: str,
					success: function(msg) {
						if(msg == 'ok') {
							alert('Ok');
						}
						else {
							$('#modal_form') 
							.css('display', 'none') // óáèðaåì ó ìoäaëüíoão oêía display: none;
							.animate({opacity: 0, top: '50%'}, 200); // ïëaâío ïðèáaâëÿåì ïðoçða÷íoñòü oäíoâðåìåíío ño ñúåçæaíèåì âíèç
							
							$('.msg_ok').css('display','block').animate({opacity:1, top:'50%'},200);
							//alert('error!');
						}
					}
				});
				return false;
			});
			
			//Òðåíàæåðíûé çàë
			$('.programms .items button').click( function(event){ // ëoâèì êëèê ïo ññûëêè ñ id="go"
				event.preventDefault(); // âûêëþ÷aåì ñòaíäaðòíóþ ðoëü ýëåìåíòa
				$('#overlay').fadeIn(400, // ñía÷aëa ïëaâío ïoêaçûâaåì òåìíóþ ïoäëoæêó
					function(){ // ïoñëå âûïoëíåíèÿ ïðåäúèäóùåé aíèìaöèè
						$('.tren') 
							.css('display', 'block') // óáèðaåì ó ìoäaëüíoão oêía display: none;
							.animate({opacity: 1, top: '25%'}, 200); // ïëaâío ïðèáaâëÿåì ïðoçða÷íoñòü oäíoâðåìåíío ño ñúåçæaíèåì âíèç
				});
			});
			
			//Ïðåïîäàâàòåëè
			$('.humans .avatar').click( function(event){ // ëoâèì êëèê ïo ññûëêè ñ id="go"
				event.preventDefault(); // âûêëþ÷aåì ñòaíäaðòíóþ ðoëü ýëåìåíòa
				$('#overlay').fadeIn(400, // ñía÷aëa ïëaâío ïoêaçûâaåì òåìíóþ ïoäëoæêó
					function(){ // ïoñëå âûïoëíåíèÿ ïðåäúèäóùåé aíèìaöèè
						$('.prepod_modal') 
							.css('display', 'block') // óáèðaåì ó ìoäaëüíoão oêía display: none;
							.animate({opacity: 1, top: '25%'}, 200); // ïëaâío ïðèáaâëÿåì ïðoçða÷íoñòü oäíoâðåìåíío ño ñúåçæaíèåì âíèç
				});
			});
			
			
			//Ðàñïèñàíèå çàíÿòèé
			$('.time_table .table button').click( function(event){ // ëoâèì êëèê ïo ññûëêè ñ id="go"
				event.preventDefault(); // âûêëþ÷aåì ñòaíäaðòíóþ ðoëü ýëåìåíòa
				$('#overlay').fadeIn(400, // ñía÷aëa ïëaâío ïoêaçûâaåì òåìíóþ ïoäëoæêó
					function(){ // ïoñëå âûïoëíåíèÿ ïðåäúèäóùåé aíèìaöèè
						$('.raspisanie_modal') 
							.css('display', 'block') // óáèðaåì ó ìoäaëüíoão oêía display: none;
							.animate({opacity: 1, top: '25%'}, 200); // ïëaâío ïðèáaâëÿåì ïðoçða÷íoñòü oäíoâðåìåíío ño ñúåçæaíèåì âíèç
				});
			});
			
			
			$('.time_table .questions button').click( function(event){ // ëoâèì êëèê ïo ññûëêè ñ id="go"
				event.preventDefault(); // âûêëþ÷aåì ñòaíäaðòíóþ ðoëü ýëåìåíòa
				$('#overlay').fadeIn(400, // ñía÷aëa ïëaâío ïoêaçûâaåì òåìíóþ ïoäëoæêó
					function(){ // ïoñëå âûïoëíåíèÿ ïðåäúèäóùåé aíèìaöèè
						$('#modal_form') 
							.css('display', 'block') // óáèðaåì ó ìoäaëüíoão oêía display: none;
							.animate({opacity: 1, top: '50%'}, 200); // ïëaâío ïðèáaâëÿåì ïðoçða÷íoñòü oäíoâðåìåíío ño ñúåçæaíèåì âíèç
				});
			});

            //Раздел цены, кнопка купить
            $('.card button').click( function(event){ // ëoâèì êëèê ïo ññûëêè ñ id="go"
                event.preventDefault(); // âûêëþ÷aåì ñòaíäaðòíóþ ðoëü ýëåìåíòa
                $('#overlay').fadeIn(400, // ñía÷aëa ïëaâío ïoêaçûâaåì òåìíóþ ïoäëoæêó
                    function(){ // ïoñëå âûïoëíåíèÿ ïðåäúèäóùåé aíèìaöèè
                        $('#modal_form') 
                            .css('display', 'block') // óáèðaåì ó ìoäaëüíoão oêía display: none;
                            .animate({opacity: 1, top: '50%'}, 200); // ïëaâío ïðèáaâëÿåì ïðoçða÷íoñòü oäíoâðåìåíío ño ñúåçæaíèåì âíèç
                });
            });


            //Лупа при наведении
            $('.photos .photo-item').hover(
                function(){
                    $(this).css('cursor','pointer');
                    $(this).children('.layer').css({
                        'display':'block',
                         'position':'absolute',
                         'top':'0',
                         'left':'0'
                    });
                },
                function(){
                    $(this).css('cursor','default');
                    $(this).children('.layer').css('display','none');  
                }
            );

			
		});
