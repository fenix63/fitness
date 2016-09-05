
        var hwSlideSpeed = 700;
        var hwTimeOut = 3000;
        var hwNeedLinks = true;
         
        $(document).ready(function(e) {
            $('.slide').css(
                {"position" : "absolute",
                 "top":'0', "left": '0'}).hide().eq(0).show();
            var slideNum = 0;
            var slideTime;
            slideCount = $("header + .slider #slider .slide").size();//������ ��� �������� ��������
			slideCount2 = $(".reviews #slider .slide").size();//��� ������� ��������
			
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
                clearTimeout(slideTime);
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
				//���� ���� ���� ��� ������� ������ �� ������ �������
				
                 var $linkArrow = $('<a id="prewbutton" href="#"></a><a id="nextbutton" href="#"></a>')
                     .prependTo('.reviews #slider');      
                     
				    $('#nextbutton').click(function(){
                         animSlide("next") 
                        })
                     $('#prewbutton').click(function(){
                         animSlide("prew");
                         })
                }
                    var $adderSpan = '';
                    $('.slide').each(function(index) {
                            $adderSpan += '<span class = "control-slide">' + index + '</span>';
                        });

                    //���������� ������ ���������
                    //$('<div class ="sli-links">' + $adderSpan +'</div>').appendTo('#slider-wrap');
                    
                    $(".control-slide:first").addClass("active");
                     
                    $('.control-slide').click(function(){
                    var goToNum = parseFloat($(this).text());
                    animSlide(goToNum);
                    });
                    var pause = false;
                    var rotator = function(){
                    if(!pause){slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);}
                            }
                    $('#slider-wrap').hover(    
                        function(){clearTimeout(slideTime); pause = true;},
                        function(){pause = false; rotator();
                        });
                    rotator();
					
					
					
					
					//���� ��������
					$('.items .item').hover(function(){
						$(this).children('.layer').css('display','block');
						$(this).children('.about').children('button').css({'color':'#9dc02e'},{'background-color':'#fff'});
					}, function(){
						$(this).children('.layer').css('display','none');
						$(this).children('.about').children('button').css('color','#fff');
					});
					
					
					//����� ��� ��������
					$(function(){
					  $("input[name='phone']").mask("+7(999) 999-99-99");
					});
					
					
                });


	

		$(document).ready(function() { // ��� �a��� �o��� �a������ ���a����
			$('.social button').click( function(event){ // �o��� ���� �o ������ � id="go"
				event.preventDefault(); // ������a�� ��a��a����� �o�� �������a
				$('#overlay').fadeIn(400, // ��a�a�a ��a��o �o�a���a�� ������ �o��o���
					function(){ // �o��� ���o������ ����������� a���a���
						$('#modal_form') 
							.css('display', 'block') // ����a�� � �o�a���o�o o��a display: none;
							.animate({opacity: 1, top: '50%'}, 200); // ��a��o ����a����� ��o��a��o��� o��o�������o �o �����a���� ����
				});
			});
			
			/* �a������ �o�a���o�o o��a, ��� ���a�� �o �� �a�o� �o � o��a��o� �o����� */
			$('#modal_close, #overlay').click( function(){ // �o��� ���� �o �������� ��� �o��o���
				$('#modal_form, .msg_ok, .tren, .prepod_modal, .raspisanie_modal')
					.animate({opacity: 0, top: '45%'}, 200,  // ��a��o ������ ��o��a��o��� �a 0 � o��o�������o ����a�� o��o �����
						function(){ // �o��� a���a���
							$(this).css('display', 'none'); // ���a�� ��� display: none;
							$('#overlay').fadeOut(400); // �����a�� �o��o���
						}
					);
			});
			
			//���� ����� �������� �����
			//��������� ����� ����� ��� �������
			//� � ����������� �� ������
			//������� ���������� � �������
			//�������� ������
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
							.css('display', 'none') // ����a�� � �o�a���o�o o��a display: none;
							.animate({opacity: 0, top: '50%'}, 200); // ��a��o ����a����� ��o��a��o��� o��o�������o �o �����a���� ����
							
							$('.msg_ok').css('display','block').animate({opacity:1, top:'50%'},200);
							//alert('error!');
						}
					}
				});
				return false;
			});
			
			//����������� ���
			$('.programms .items button').click( function(event){ // �o��� ���� �o ������ � id="go"
				event.preventDefault(); // ������a�� ��a��a����� �o�� �������a
				$('#overlay').fadeIn(400, // ��a�a�a ��a��o �o�a���a�� ������ �o��o���
					function(){ // �o��� ���o������ ����������� a���a���
						$('.tren') 
							.css('display', 'block') // ����a�� � �o�a���o�o o��a display: none;
							.animate({opacity: 1, top: '25%'}, 200); // ��a��o ����a����� ��o��a��o��� o��o�������o �o �����a���� ����
				});
			});
			
			//�������������
			$('.humans .avatar').click( function(event){ // �o��� ���� �o ������ � id="go"
				event.preventDefault(); // ������a�� ��a��a����� �o�� �������a
				$('#overlay').fadeIn(400, // ��a�a�a ��a��o �o�a���a�� ������ �o��o���
					function(){ // �o��� ���o������ ����������� a���a���
						$('.prepod_modal') 
							.css('display', 'block') // ����a�� � �o�a���o�o o��a display: none;
							.animate({opacity: 1, top: '25%'}, 200); // ��a��o ����a����� ��o��a��o��� o��o�������o �o �����a���� ����
				});
			});
			
			
			//���������� �������
			$('.time_table .table button').click( function(event){ // �o��� ���� �o ������ � id="go"
				event.preventDefault(); // ������a�� ��a��a����� �o�� �������a
				$('#overlay').fadeIn(400, // ��a�a�a ��a��o �o�a���a�� ������ �o��o���
					function(){ // �o��� ���o������ ����������� a���a���
						$('.raspisanie_modal') 
							.css('display', 'block') // ����a�� � �o�a���o�o o��a display: none;
							.animate({opacity: 1, top: '25%'}, 200); // ��a��o ����a����� ��o��a��o��� o��o�������o �o �����a���� ����
				});
			});
			
			
			$('.time_table .questions button').click( function(event){ // �o��� ���� �o ������ � id="go"
				event.preventDefault(); // ������a�� ��a��a����� �o�� �������a
				$('#overlay').fadeIn(400, // ��a�a�a ��a��o �o�a���a�� ������ �o��o���
					function(){ // �o��� ���o������ ����������� a���a���
						$('#modal_form') 
							.css('display', 'block') // ����a�� � �o�a���o�o o��a display: none;
							.animate({opacity: 1, top: '50%'}, 200); // ��a��o ����a����� ��o��a��o��� o��o�������o �o �����a���� ����
				});
			});
			
		});
