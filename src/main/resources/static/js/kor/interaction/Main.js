/**
 * @author cassmee
 */

var Main = (
	
	function($){
		
		$(document).ready(setI);
		
		function setI(){
			setDocument();
			setWindow();
			setPopupOpener();
			setPopup();
		}
		
		function setDocument(){
			$(document).scroll(aligning);
			function aligning(){
				var i;
				for(i=1;i<=2;i++){
					$('#main-layerpop0'+i).css({left:$(document).scrollLeft()});
				}
			}
		}
		
		function setWindow(){
			$(window).resize(aligning);
			$(window).resize();
			function aligning(){
				var i;
				for(i=1;i<=2;i++){
					$('#main-layerpop0'+i).css({left:$(window).width()/2-$('#main-layerpop0'+i).width()/2,top:$('#header').height()});
					$('#main-layerpop0'+i).width($(window).width());
					$('#main-layerpop0'+i).height($('#footer').position().top-$('#header').height());
					alignPopupContent(i);
				}
				$(document).scroll();
			}
		}
		
		function setPopupOpener(){
			$('.main-img').children('div').children('a').click(openPopup);
			function openPopup(e){
				var n = $(this).parent().index();
				$('#main-layerpop0'+n).show();
				alignPopupContent(n);
				TweenMax.to($('#main-layerpop0'+n),0.4,{alpha:1});
				e.preventDefault();
			}
		}
		
		function setPopup(){
			var i;
			$('.popup-close').click(closeI);
			for(i=1;i<=2;i++){
				$('#main-layerpop0'+i).hide();
				TweenMax.to($('#main-layerpop0'+i),0,{alpha:0});
			}
			function closeI(e){
				TweenMax.to($(this).parents('div').eq(1),0.2,{alpha:0,onComplete:hideI,onCompleteParams:[$(this).parents('div').eq(1)]});
				e.preventDefault();
			}
			function hideI(target){
				target.hide();
			}
		}
		
		function alignPopupContent(index){
			$('#main-layerpop0'+index).children('.mini-info').css({marginTop:$('#main-layerpop0'+index).height()/2-$('#main-layerpop0'+index).children('.mini-info').height()/2-60});
		}
		
	} 
	
)(jQuery);
