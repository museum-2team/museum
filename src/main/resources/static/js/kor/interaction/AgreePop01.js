/**
 * @author cassmee
 */

var AgreePop01 = (
	
	function($){
		
		$(document).ready(setI);
		
		function setI(){
			setAgreeList();
		}
		
		function setAgreeList(){
			var n = $('.agree-list ul').first().children('li').length;
			$('.agree-list .see_all a').click(viewAllI);
			$('.agree-list .clfix a').click(viewI);
			function viewAllI(e){
				$('.agree-txt-cont').children('li').show();
				$('.scroll-content').jScrollPane();
				e.preventDefault();
			}
			function viewI(e){
				var i = $(this).parents('ul').index();
				var ii = $(this).parent().index();
				$('.agree-txt-cont').children('li').hide();
				$('.agree-txt-cont').children('li').eq(i*n+ii).show();
				$('.scroll-content').jScrollPane();
				e.preventDefault();
			}
		}
		
	}
	
)(jQuery);
