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


/* FAQ */

//FAQ
function toggleList(tabContainer) {
	var tabContainer=document.getElementById(tabContainer)
	var triggers = tabContainer.getElementsByTagName("a");

	for(i = 0; i < triggers.length; i++) {
		if (triggers.item(i).href.split("#")[1])
			triggers.item(i).targetEl = document.getElementById(triggers.item(i).href.split("#")[1]);
	
		if (!triggers.item(i).targetEl)
			continue;
	
		triggers.item(i).targetEl.style.display = "none";
		triggers.item(i).className="";
		triggers.item(i).onclick = function () {
			if (tabContainer.current == this) {
				this.targetEl.style.display = "none";
				this.className="";
				tabContainer.current = null;
			} else {
				if (tabContainer.current) {
					tabContainer.current.targetEl.style.display = "none";
					tabContainer.current.className="";
				}
				this.targetEl.style.display = "block";
				this.className="on";
				tabContainer.current = this;
			}
			return false;
		}
	}
//triggers.item(0).targetEl.style.display = "block";
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

	
/* 갤러리 팝업  - 탭 */
function maintab(dotabid, num){
		var inum=parseInt(num)-1;
		var linkTab=dEI(dotabid).getElementsByTagName("h2");
		for (i=0;i<linkTab.length;i++) {
			var tabimg = linkTab.item(i).getElementsByTagName("img").item(0);
			var  tabContents= dEI(dotabid+(1+i));
			if (i==inum) {
				if(tabContents.style.display!="block"){
					tabimg.src=tabimg.src.replace(".gif", "on.gif");
					tabContents.style.display="block";
				}
		}else{
			tabimg.src=tabimg.src.replace("on.gif", ".gif");
			tabContents.style.display="none";
		}
	}
}
