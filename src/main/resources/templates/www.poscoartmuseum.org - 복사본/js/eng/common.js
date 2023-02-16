//Element ID 불러쓰기
function dEI(elementID){
	return document.getElementById(elementID);
}


//IE6 png패치
function setPng24(obj) {
	obj.width=obj.height=1;
	obj.className=obj.className.replace(/\bpng24\b/i,'');
	obj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ obj.src +"',sizingMethod='image');";
	obj.src='';
	return '';
}


//  팝업
function popUp(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}
//-->

/* 플래시 메뉴 사이즈 조절 */
	function larges(){ 
	document.getElementById("flashArea").style.height = "214px";
	} 
	function smalls(){ 
	 document.getElementById("flashArea").style.height = "108px";
	} 


