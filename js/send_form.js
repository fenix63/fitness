$(document).ready(function(){
    //àÿêñ ôîðìà îáðàòíîé ñâÿçè
            //ïðîâåðÿåò êàêîé îòâåò áûë ïîëó÷åí
            //è â çàâèñèìîñòè îò îòâåòà
            //âûâîäèò èíôîðìàöèþ î ñòàòóñå
            //îòïðàâêè ïèñüìà
            $("#modal_form form").submit(function() {
                var str = $(this).serialize();
                


                $.ajax({
                    type: "POST",
                    url: "mail.php",
                    data: str,
                    success: function(msg) {
                            //alert('Ok');
                        
                        //else {
                            //alert('error');
                            $('#modal_form') 
                            .css('display', 'none') // Прячем основную форму
                            .animate({opacity: 0, top: '50%'}, 200); // ïëaâío ïðèáaâëÿåì ïðoçða÷íoñòü oäíoâðåìåíío ño ñúåçæaíèåì âíèç
                            
                            //и отображаем форму с сообщением о том, что сообщение отправлено
                            $('.msg_ok').css('display','block').animate({opacity:1, top:'50%'},200); 
                            //alert('error!');
                        //}
                    },
                    error: function(jqXHR, text, error){
                        $(this).html(error);
                    }
                });
                return false;
            });


});