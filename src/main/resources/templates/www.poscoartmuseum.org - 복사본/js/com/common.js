function flash(fid,fnm,wid,hei,fvs,bgc,wmd) {
	var flash_tag = "";
	flash_tag = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="'+wid+'" height="'+hei+'" id="'+fid+'" align="middle">';
	flash_tag +='<param name="allowScriptAccess" value="always" />';
	flash_tag +='<param name="allowFullScreen" value="false" />';
	flash_tag +='<param name="movie" value="'+fnm+'" />';
	flash_tag +='<param name="FlashVars" value="'+fvs+'" />';
	flash_tag +='<param name="quality" value="high" />';
	flash_tag +='<param name="bgcolor" value="'+bgc+'" />';
	flash_tag +='<param name="wmode" value="'+wmd+'" />';
	flash_tag +='<embed src="'+fnm+'" quality="high" bgcolor="'+bgc+'" FlashVars="'+fvs+'" wmode="'+wmd+'" width="'+wid+'" height="'+hei+'" name="'+fid+'" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />';
	flash_tag +='</object>';
	
	document.write(flash_tag);
}

function setPng24(obj) {
    obj.width=obj.height=1;
    obj.className=obj.className.replace(/\bpng24\b/i,'');
    obj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ obj.src +"',sizingMethod='image');"
    obj.src='/';
    return '';
}

function imageOver(imgs) {
	imgs.src = imgs.src.replace("off.gif", "on.gif");
}

function imageOut(imgs) {
	imgs.src = imgs.src.replace("on.gif", "off.gif");
}

// 링크 점선 테두리 한번에 없애기
function pageOnTop() {
	window.location='#top';
}

function bluring()
{
	if (event.srcElement.tagName == "a" || event.srcElement.tagName == "img")	document.body.focus();
}
//document.onfocusin = bluring;

function SetNum(obj){
val=obj.value;
re=/[^0-9]/gi;
obj.value=val.replace(re,"");
}

// Trim
function Trim(obj1){
	obj1 = obj1.replace(/^(\s+)|(\s+)$/g, "")
	return obj1;
}

// Input String null checking
function validFieldText(objInput, msgStr){
	if(Trim(objInput.value) == "") {
		alert(msgStr);
		objInput.focus();
		return false;
	}
	
	return true;
}

function validFieldTextNoMsg(objInput){
	if(Trim(objInput.value) == "") {
		return false;
	}

	return true;
}

// Input String null checking (for English)
function validFieldTextEng(objInput, msgStr){
	if(Trim(objInput.value) == "") {
		alert("Please enter a " + msgStr + "");
		objInput.focus();
		return false;
	}

	return true;
}

function validFieldSelect(objInput, msgStr)
{
	if(Trim(objInput.value) == "") 
	{
		alert(msgStr);
		objInput.focus();
		return false;
	}

	return true;
}

// Input Webedit null checking
function validFieldWebEdit(objInput, msgStr){
	if(objInput == false) {
		alert("\n" + msgStr);
		return false;
	}

	return true;
}

// 포맷 체크
function isValidFormat(input, format) {
    if (input.value.search(format) != -1) {
        return true;
    }
    return false;
}

//숫자입력 체크(onblur)
function  number_validate(theForm, firstNum) {
	if (theForm.value != "") {
		var str=theForm.value;
		for (var i = 0; i< str.length; i++) {
			var ch = str.substring(i, i + 1);

			if ( (ch<"0" || ch>"9") ) {
				alert(firstNum+" 숫자만 입력해주세요.");
				theForm.readonly = false;
				theForm.value="";
				theForm.focus();
				return false;
			}
		}
	}

	return true;
}


//숫자입력 체크(onblur) with message
function  number_validate_msg(theForm, firstNum, mymsg) {
	if (theForm.value != "") {
		var str=theForm.value;
		for (var i = 0; i< str.length; i++) {
			var ch = str.substring(i, i + 1);

			if ( (ch<"0" || ch>"9") ) {
				alert(mymsg+" 항목은 숫자만 입력해주세요.");
				theForm.readonly = false;
				//theForm.value="";
				theForm.focus();
				return false;
			}
		}
	}

	return true;
}

//숫자만 입력가능하게 (onKeyPress)
function onlyNumber()
{
	if((event.keyCode > 31) && (event.keyCode < 45) || (event.keyCode > 57)) 
	{
		event.returnValue = false;
	}
}

function onlynum(objtext1){
	var inText = objtext1.value;
	var ret;

	for (var i = 0; i < inText.length; i++) {
    ret = inText.charCodeAt(i);

		if (!((ret > 47) && (ret < 58)))  {
			alert("숫자만 입력해주세요.");
			objtext1.value = "";
			objtext1.focus();
			return false;
		}
	}
	return true;
}

function numEngCheck(str){
	lowerStr = str.toLowerCase();
	for(i=0; i<lowerStr.length; i++){
		ch = lowerStr.charAt(i);
		if ("abcdefghijklmnopqrstuvwxyz0123456789".indexOf(ch) == -1){
			return false;
		}
	}
	return true;
}

// 이메일 형식 체크
function CheckEmail(strEmail){
	var format = /^((\w|[\-\.])+)\.([A-Za-z]+)$/;
    	return isValidFormat(strEmail, format);
}

function emailCheck ( str ) {
	if( str == '' || str == null){
		alert('정확한 형식의 E-mail 주소를 입력 하시기 바랍니다.' + '\n' + '\n' + 'ex)posco@poscoway.net');
		return false;
	}
	
	if ( str.match(/[^a-zA-Z0-9_\@\.]/g) ){
		alert('한글 혹은 특수문자로 구성된 E-mail주소는 올바르지 않습니다.');
		return false;
	}else if ( str.indexOf('@') == -1) {
		alert('@가 빠져있는 E-mail주소는 올바르지 않습니다.' + '\n' + '\n' + 'ex)posco@poscoway.net')
		return false;
	}else if ( str.indexOf(".") == -1 ){
		alert(".가 없는 E-mail주소는 올바르지 않습니다."+ '\n' + '\n' + 'ex)posco@poscoway.net');
		return false;
	}else if ( str.indexOf('@') != str.lastIndexOf('@') ){
		alert("@가 2회 이상 들어간 E-mail주소는 올바르지 않습니다." + '\n' + '\n' + 'ex)posco@poscoway.net')
		return false;
	}else if (str.match(/[^\@\.].*@.*/g) == null){
		alert('정확한 형식의 E-mail 주소를 입력 하시기 바랍니다.' + '\n' + '\n' + 'ex)posco@poscoway.net');
		return false;
	}
	return true;

}

function WindowOpen(Url, popName, popwidth, popheight){
	var height = screen.height;
	var width = screen.width;
	var left = 0;
	var top = 0;
	popheight = popheight + 27;
	window.open(Url, popName, "width="+popwidth+",height="+popheight+",scrollbars=no,toolbar=no,left="+left+",top="+top+"")
}

function WindowOpenCenter(Url, popName, popwidth, popheight){
	var LeftPosition = (screen.width) ? (screen.width-popwidth)/2 : 0;
	var TopPosition = (screen.height) ? (screen.height-popheight)/2 : 0;
	var settings = 'height='+popheight+',width='+popwidth+',top='+TopPosition+',left='+LeftPosition+',status=no,toolbar=no,menubar=no,location=no,fullscreen=no,resizable=no,scrollbars=no';
	win = window.open(Url,popName,settings)
}

function WindowOpenCenterSizable(Url, popName, popwidth, popheight){
	var LeftPosition = (screen.width) ? (screen.width-popwidth)/2 : 0;
	var TopPosition = (screen.height) ? (screen.height-popheight)/2 : 0;
	var settings = 'height='+popheight+',width='+popwidth+',top='+TopPosition+',left='+LeftPosition+',status=no,toolbar=no,menubar=no,location=no,fullscreen=no,resizable=yes,scrollbars=yes';
	win = window.open(Url,popName,settings)
}

function WindowOpenNomargin(Url, popName, popwidth, popheight){
	var height = screen.height;
	var width = screen.width;
	popheight = popheight + 27;
	window.open(Url, popName, "width="+popwidth+",height="+popheight+",scrollbars=no,toolbar=no,left=0,top=0")
}

function flashMovie(fid,src,wid,hei,fvs,wmd) {
  this.fPrint = '';
  this.Id = document.getElementById(fid);
  this.Src = src;
  if(wid == 0){
    this.Width = '100%';
  }
  else{
    this.Width = wid;
  }
  if(hei == 0){
    this.Height = '100%';
  }
  else{
    this.Height = hei;
  }
  this.FlashVars = (fvs != undefined)? fvs :'';
  this.Wmod = (wmd != undefined)? wmd :'';
  if(isObject(Id)) {
    fPrint = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0"';
    fPrint += ' width="'+Width+'"';
    fPrint += ' height="'+Height+'">';
    fPrint += '<param name="allowScriptAccess" value="always">';
    fPrint += '<param name="movie" value="'+Src+'">';
    fPrint += '<param name="menu" value="false" />';
    fPrint += '<param name="quality" value="high">';
    fPrint += (FlashVars != null) ? '<param name="FlashVars" value="'+FlashVars+'">' : '';
    fPrint += '<param name="wmode" value="'+Wmod+'">';
    fPrint += '<embed';
    fPrint += ' src="'+Src+'"';
    fPrint += (FlashVars != null) ? ' FlashVars="'+FlashVars+'"' : '';
    fPrint += ' wmode="'+Wmod+'"' ;
    fPrint += ' quality="high"';
    fPrint += ' allowScriptAccess="always"';
    fPrint += ' pluginspage="http://www.macromedia.com/go/getflashplayer"';
    fPrint += ' type="application/x-shockwave-flash"';
    fPrint += ' width="'+Width+'"';
    fPrint += ' height="'+Height+'"';
    fPrint += '></embed>';
    fPrint += '</object>';
    Id.innerHTML = fPrint;
  }
}

function isObject(a) {
    return (a && typeof a == 'object');
}

//display설정 변경
function changeTb(tbName, tbCount, tbNum) {
	var a;
	for(i=1;i<=tbCount;i++){

		a = eval("document.all."+tbName+i);

		if(i != tbNum) {
			a.style.display = 'none';
		}
		else {
			a.style.display = 'block';
		}
	}
}

//--아이프레임 자동 길이 조절 스크립트-----------------------------------------------------------------------------
function resizeFrame(iframeObj){
 //var divIframeHeight;
 //divIframeHeight = document.getElementById("ifrmDiv").offsetHeight;
//		alert(divIframeHeight);
        var innerBody = iframeObj.contentWindow.document.body;
        oldEvent = innerBody.onclick;
        innerBody.onclick = function(){ resizeFrame(iframeObj, 1);oldEvent; };
        var innerHeight = innerBody.scrollHeight + (innerBody.offsetHeight - innerBody.clientHeight) + 5;
        iframeObj.style.height = innerHeight;
        var innerWidth = innerBody.scrollWidth + (innerBody.offsetWidth - innerBody.clientWidth);
        iframeObj.style.width = innerWidth;
        if( !arguments[1] )        /* 특정 이벤트로 인한 호출시 스크롤을 그냥 둔다. */
                this.scrollTo(1,1);
}

function isEng(str)
{

	for(var i=0; i < str.length; i++){
		 achar = str.charCodeAt(i);
		if(achar > 255){
			return false;
		}
	}
	return true;
}

function MoviePlayer(movieurl){
	document.write("<object classid='clsid:22D6F312-B0F6-11D0-94AB-0080C74C7E95' id='MediaPlayer1' width='400' height='300' border='0'>");
	document.write("<param name='Filename' value='"+ movieurl +"'>");
	document.write("<param name='loop' value='1'>");
	document.write("<param name='mute' value='0'>");
	document.write("<param name='AutoStart' value='0'>");
	document.write("<param name='AutoSize' value='0'>");
	document.write("<param name='AutoResize' value='0'>");
	document.write("<param name='TransparentAtStart' value='1'>");
	document.write("<param name='AutoRewind' value='1'>");
	document.write("<param name='ShowDisplay' value='0'>");
	document.write("<param name='ClickToPlay' value='1'>");
	document.write("<param name='EnableContextMenu' value='0'>");
	document.write("<param name='ShowPositionControls' value='1'>");
	document.write("<param name='ShowStatusBar' value='0'>");
	document.write("<param name='ShowControls' value='1'>");
	document.write("<param name='EnableTracker' value='1'>");
	document.write("<param name='Volume' value='0'>");
	document.write("</object>");
}

function MoviePlayer2(movieurl, mwidth, mheight){
	document.write("<object classid='CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6' codebase='http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=6,4,5,715' width='"+mwidth+"' height='"+mheight+"' id='MediaPlayer1' type='application/x-oleobject' standby='Loading Microsoft Windows Media Player components...'>");
	document.write("<param name='URL' value='"+movieurl+"'>");
	document.write("<param name='AutoStart' value='0'>");
	document.write("<param name='TransparentAtStart' value='1'>");
	document.write("<param name='DisplaySize' value='4'>");
	document.write("<param name='PlayCount' value='1'>");
	document.write("<param name='ShowDisplay' value='0'>");
	document.write("</object>");
}

function ShowFlash(name,Width,Height) {
  document.writeln("<object name=flashgame id=FG classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0' width='" + Width + "' height='" + Height + "'>");
  document.writeln("<param name='movie' value='"+name+"'>");
  document.writeln("<param name='quality' value='high' />");
  document.writeln("<param name='WMode' value='Transparent' />");
  document.writeln("<embed src='"+name+".swf' quality='high' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' width='" + Width + "'  height='" + Height + "'>");
  document.writeln("</object>");
}

function mail_check(str) {
	emailEx1 = /[^@]+@[A-Za-z0-9_\-]+\.[A-Za-z]+/;
	emailEx2 = /[^@]+@[A-Za-z0-9_\-]+\.[A-Za-z0-9_\-]+\.[A-Za-z]+/;
	emailEx3 = /[^@]+@[A-Za-z0-9_\-]+\.[A-Za-z0-9_\-]+\.[A-Za-z0-9_\-]+\.[A-Za-z]+/;
	if(emailEx1.test(str)){ return true; };
	if(emailEx2.test(str)){ return true; };
	if(emailEx3.test(str)){ return true; };
	return false;
}

// 금지어 체크
// by ywkwon 2007.4.11
function fnCheckAbuse(str){
 var fucks;
 var fuck;
 fuck = abuseword;
 fucks = fuck.toLowerCase();
 fucks = fucks.split(",");
 str = str.toLowerCase();
 var strTempString = ' ' + str;

 for(var i=0; i <fucks.length; i++)
 {
  if(strTempString.indexOf(fucks[i]) > 0)
  {
   return false;
  }
 }
 return true;
}

// 글자수 바이트로 제한
function ChkByte(objname,maxlength) {
 var objstr = objname.value; // 입력된 문자열을 담을 변수
 var objstrlen = objstr.length; // 전체길이

 // 변수초기화
 var maxlen = maxlength; // 제한할 글자수 최대크기
 var i = 0; // for문에 사용
 var bytesize = 0; // 바이트크기
 var strlen = 0; // 입력된 문자열의 크기
 var onechar = ""; // char단위로 추출시 필요한 변수
 var objstr2 = ""; // 허용된 글자수까지만 포함한 최종문자열

 // 입력된 문자열의 총바이트수 구하기
 for(i=0; i< objstrlen; i++) {
  // 한글자추출
  onechar = objstr.charAt(i);

  if (escape(onechar).length > 4) {
   bytesize += 2;     // 한글이면 2를 더한다.
  } else {
   bytesize++;      // 그밗의 경우는 1을 더한다.
  }

  if(bytesize <= maxlen)  {   // 전체 크기가 maxlen를 넘지않으면
   strlen = i + 1;     // 1씩 증가
  }
 }

 // 총바이트수가 허용된 문자열의 최대값을 초과하면
 if(bytesize > maxlen) {
  objstr2 = objstr.substr(0, strlen);
  objname.value = '';
  return true;
 }
 return false;
}

// 글자수 바이트로 제한2 #글자수제한을 넘으면 자동으로 잘림
function ChkByte2(objname,maxlength) {
 var objstr = objname.value; // 입력된 문자열을 담을 변수
 var objstrlen = objstr.length; // 전체길이

 // 변수초기화
 var maxlen = maxlength; // 제한할 글자수 최대크기
 var i = 0; // for문에 사용
 var bytesize = 0; // 바이트크기
 var strlen = 0; // 입력된 문자열의 크기
 var onechar = ""; // char단위로 추출시 필요한 변수
 var objstr2 = ""; // 허용된 글자수까지만 포함한 최종문자열

 // 입력된 문자열의 총바이트수 구하기
 for(i=0; i< objstrlen; i++) {
  // 한글자추출
  onechar = objstr.charAt(i);

  if (escape(onechar).length > 4) {
   bytesize += 2;     // 한글이면 2를 더한다.
  } else {
   bytesize++;      // 그밗의 경우는 1을 더한다.
  }

  if(bytesize <= maxlen)  {   // 전체 크기가 maxlen를 넘지않으면
   strlen = i + 1;     // 1씩 증가
  }
 }

 // 총바이트수가 허용된 문자열의 최대값을 초과하면
 if(bytesize > maxlen) {
  objstr2 = objstr.substr(0, strlen-1);
  objname.value = objstr2; 
 }
}

// 모두 선택 해제
// CheckAll( 폼이름, 개체이름, true/false )
var checkAllFlag = true;

function CheckAll(A,B,C){
var X=eval("document.forms."+A+"."+B)
for (c=0;c<X.length;c++)
	X[c].checked=checkAllFlag;
checkAllFlag = !checkAllFlag;
}

// Alphabet 필드
function IsAlphabet(str)
{
	var vStr = str.toUpperCase();
	for(var i = 0; i < vStr.length; i++){
		if(vStr.charAt(i) < 'A' || vStr.charAt(i) > 'Z'){
			return false;
		}
	}
	return true;
}

// Alphabet + Number 필드
function IsAlphaDigit( obj, str )
{
	var strTemp = obj.value.toUpperCase();
	for(var i = 0; i < strTemp.length; i++){
		if(strTemp.charAt(i) < '0' || (strTemp.charAt(i) > '9' && strTemp.charAt(i) < 'A') ||  strTemp.charAt(i) > 'Z') {
		    alert( str + " 입력해 주세요.  " );
		   //obj.value = "";
			obj.focus();
			return false;
		}
	}
	return true;
}

// Number 필드
function comFuncIsDigit(obj, str)
{
	for (i=0; i < obj.value.length; i++)
	{
		if (obj.value.charAt(i) < '0' || obj.value.charAt(i) > '9')
		{
			alert( str + " 숫자만 입력해 주세요.   " );
			//obj.value = "";
			obj.focus();
			return false;
		}
	}
	return true;
}

// 필드 Length
function CheckLength( obj, min, max, str )
{
	var iLength = obj.value.length;
	if( iLength < min || iLength > max ) {
		alert( str + " " + min + "자 이상 " + max + "자 이내로 입력해 주세요.   " );
		obj.focus();
		return false;
	}
	else return true;
}

// 필드 Length
function CheckLength1( obj, strNum, str )
{
	var iLength = obj.value.length;
	if( iLength < strNum || iLength > strNum ) {
		alert( str + " " + strNum + "자로 입력해 주세요.   " );
		obj.focus();
		return false;
	}
	else return true;
}

//트랙백 복사하기
function SelectCopy(s){
    var doc = document.body.createTextRange();
    doc.moveToElementText(document.all(s));
    doc.select();
    doc.execCommand('copy');
    alert('주소가 복사되었습니다.\n\n주소창에 Ctrl + V 를 눌러주세요.');
}

//레이어처리 스크립트
var previd = null;

function displaysub(subid) {

	if (previd != null) {
		if (previd != subid) {
			previd.style.display = "none";
		}
	}

	if (subid.style.display == "none") {
		subid.style.display = "block";
	} else {
		subid.style.display = "none";
	}
	previd = subid;
}

/*한글 글자수 제어*/
function char_count(obj, max_char) {
	if (max_char == "")
	{
		max_char = 0;
	}
	var str_character;
	var int_char_count, rast_char;
	var int_contents_length;
	var max_ovar = ""

	int_char_count = 0;
	rast_char = 0;
	int_contents_length = eval(obj).value.length;

	for (k=0; k < int_contents_length; k++)
	{
		str_character = eval(obj).value.charAt(k);

		if (escape(str_character).length > 4)
		{
			int_char_count += 2;
		} else
		{
			int_char_count++;
		}

		if (int_char_count > Number(max_char))
		{
			alert(max_char+"바이트 이상은 입력 하실수 없습니다.\r\n초과된 부분은 자동으로 삭제됩니다.");
			var str = eval(obj).value.substr(0, k);
			eval(obj).value = str;
			max_ovar = "yes"
			break;
		}
	}
	return;
}

function getFileSize(filePath) {
	var len = 0;

	if ( navigator.appName.indexOf("Netscape") != -1) {
		try {
			netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
		} catch(e) {
			alert("Please, set up 'signed.applets.codebase_principal_support' \n"+e);
			return -1;
		}
		try {
			var file = Components.classes["@mozilla.org/file/local;1"]
								 .createInstance(Components.interfaces.nsILocalFile);
			file.initWithPath ( filePath );

			len = file.fileSize;
		} catch(e) {
			alert("Error:"+e);
		}
	} else if (navigator.appName.indexOf('Microsoft') != -1) {
		var img = new Image();
		img.dynsrc = filePath;
		len = img.fileSize;
	}
	return len;
}

function FileTypeChk(file,ft) {
	var fileExt = '';
	try {
		fileExt =file.substring(file.lastIndexOf('.')+1)
	}catch(e) { }
	arrYFile = new Array (["JPG","GIF","PNG","BMP"],["MP3","WMV","WAV"]);
	// 확장자 체크

	for (i=0;i<arrYFile[ft].length ;i++ )
	{
		if(fileExt.toUpperCase() == arrYFile[ft][i])
			return true;

	}
	return false;

}

function fileUpload(thefrm) {	////// 파일 업로드 체크 <--- 공통file Upload
//	thefrm = this.form;

	str		= thefrm.filename;
	fSize	= thefrm.fileSize.value;
	fType	= thefrm.fileType.value;

	if (fSize == "" ) fSize = 1;
	if (fType == "" ) fType = 0;//1:동영상,0:이미지

	//if(NullCheck(str.value)== "")
	//{
	//	alert("파일을 등록해주세요");
	//	str.focus();
	//	return;
	//}
	MaxLen	= 1024 * 1024 * fSize ;
	var len = getFileSize(str.value);
	if (str.value != "")
	{
		if (len > MaxLen) {
			alert("파일 업로드 최대 용량은 "+fSize+"MB로 제한 되어 있습니다.!!");
			str.focus();
			return;
		}

		if(!FileTypeChk(str.value,fType))
		{
			str = new Array ("JPG,GIF,PNG,BMP","MP3,WMV,WAV")
			alert(str[fType]+" 파일 이외에는 등록 할 수 없습니다.");
			str.focus();
			return;
		}
	}
}

function NullCheck(bgValue) {
	if (trim(bgValue) == "") bgValue = trim(bgValue);
	return bgValue;
}

//////////////////////////////////////////////////
/// 이미지 리사이즈
/// resizeBoardImage(imageWidth):imageWidth(줄이고자하는 이미지 사이즈
function resizeBoardImage(imageWidth) {
	var content = document.getElementById("writeContents");

	if (content) {
		var imgsrc = content.getElementsByTagName("img");
		if (imgsrc) {
			var imageHeight = 0;

			for(i=0; i<imgsrc.length; i++) {
				imgsrc[i].tmpWidth  = imgsrc[i].width;
				imgsrc[i].tmpHeight = imgsrc[i].height;

				// 이미지 폭이 테이블 폭보다 크다면 테이블폭에 맞춘다
				if(imgsrc[i].width > imageWidth) {
					imageHeight = parseFloat(imgsrc[i].width / imgsrc[i].height)
					imgsrc[i].width = imageWidth;
					imgsrc[i].height = parseInt(imageWidth / imageHeight);

					// 스타일에 적용된 이미지의 폭과 높이를 삭제한다
					imgsrc[i].style.width = '';
					imgsrc[i].style.height = '';
				}
			}
		}
	}
}

function flashWriter(fid,fnm,wid,hei,fvs,bgc,wmd) {
	var flash_tag = "";
	flash_tag = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="'+wid+'" height="'+hei+'" id="'+fid+'" align="middle">';
	flash_tag +='<param name="allowScriptAccess" value="always" />';
	flash_tag +='<param name="allowFullScreen" value="false" />';
	flash_tag +='<param name="movie" value="'+fnm+'" />';
	flash_tag +='<param name="FlashVars" value="'+fvs+'" />';
	flash_tag +='<param name="quality" value="high" />';
	flash_tag +='<param name="bgcolor" value="'+bgc+'" />';
	flash_tag +='<param name="wmode" value="'+wmd+'" />';
	flash_tag +='<param name="base" value="." />';
	flash_tag +='<embed base="." src="'+fnm+'" quality="high" bgcolor="'+bgc+'" FlashVars="'+fvs+'" wmode="'+wmd+'" width="'+wid+'" height="'+hei+'" name="'+fid+'" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />';
	flash_tag +='</object>';
	
	document.write(flash_tag);
}

// 페이지 인쇄 기능 시작
var tempHtmlContent; 

function printDiv () { 
	if (document.all && window.print) { 
	   window.onbeforeprint = beforeDivs; 
	   window.onafterprint = afterDivs; 
	   window.print(); 
	} 
} 
function beforeDivs () { 
	if (document.all) { 
	   body_holder.style.display = 'none'; 
	   objSelection.innerHTML = "<div class='body_holder'><div class='container'>"+ document.all['container'].innerHTML + "</div></div>"; 
	} 
} 
function afterDivs () { 
	if (document.all) { 
	   body_holder.style.display = 'block'; 
	   objSelection.innerHTML = ""; 
	} 
} 

// 페이지 인쇄 기능 끝


// faq view..
var old_menu = '';
function menuClick(submenu) {
	if( old_menu != submenu ) {
		if( old_menu !='' ) {
			old_menu.style.display = 'none';
		}
		submenu.style.display = 'block';
		old_menu = submenu;
	} else {
		submenu.style.display = 'none';
		old_menu = '';
	}
}

// imgWidth   : 설정 이미지 폭값
// imgHeight  : 설정 이미지 높이값
function imgcheck(imgObj, bool, imgWidth, imgHeight)
{
	if(bool) //** 이미지가 로딩이 다 되었을경우
	{
		var O_Width = imgObj.width; //** 이미지의 실제 폭
		var O_Height = imgObj.height; //** 이미지의 실제 높이
		var ReWidth = O_Width; //** 변화된 폭 저장 변수
		var ReHeight = O_Height; //** 변화된 높이 저장 변수

		if(ReWidth > imgWidth)
		{
			ReWidth = imgWidth;
			ReHeight = (O_Height * ReWidth) / O_Width;
		}

		if(ReHeight > imgHeight)
		{
			ReWidth = (ReWidth * imgHeight) / ReHeight;
			ReHeight = imgHeight;
		}

		//** 처리
		imgObj.width = ReWidth;
		imgObj.height = ReHeight;
		imgObj.alt = ReWidth +','+ ReHeight;
	}
	else //** 이미지가 해당 경로에 없어 로딩 에러가 생겼을경우
	{
		//** 안보이게 스타일 시트로 처리
		imgObj.style.display = 'none';
	}
}

//flash(출력영역ID및NAME,플래시파일경로,WIDTH,HEIGHT,FLASHVARS,BackgroundColor,WMOD)

function flash(fid,fnm,wid,hei,fvs,bgc,wmd2,wmd) {
	var flash_tag = "";
	flash_tag = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="'+wid+'" height="'+hei+'" id="'+fid+'" align="middle">';
	flash_tag +='<param name="allowScriptAccess" value="always" />';
	flash_tag +='<param name="allowFullScreen" value="false" />';
	flash_tag +='<param name="movie" value="'+fnm+'" />';
	flash_tag +='<param name="FlashVars" value="'+fvs+'" />';
	flash_tag +='<param name="quality" value="high" />';
	flash_tag +='<param name="bgcolor" value="'+bgc+'" />';
	flash_tag +='<param name="wmode" value="'+wmd+'" />';
	flash_tag +='<param name="wmode" value="'+wmd2+'" />';
	flash_tag +='<embed src="'+fnm+'" quality="high" bgcolor="'+bgc+'" FlashVars="'+fvs+'" wmode="'+wmd+'" wmode="'+wmd2+'" width="'+wid+'" height="'+hei+'" name="'+fid+'" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />';
	flash_tag +='</object>';
	
	document.write(flash_tag);
}

/**
 * 작성자 : CKJ
 * 작성일 : 2008-02-01
 *
 * 필수입력갑 체크
 * 파라메터 : obj -> 오브젝트
 *          txt -> 오브젝트 명
 *          ad  -> 조사 (을/를)
 *          isfocus -> 경고창이후 포커스 여부 (true/false)
 *
 * 예) if( ! validCheck(formObj.bbs_title,"제목","을",true) ) return false;
 *
 */ //20090622 이종환 수정
function validCheck(obj,txt,isfocus) {

	if( obj.value == "" ) {
		if(isfocus)	obj.focus();
		alert(txt);
		return false;
	}
	return true;
}


/*
*20090616 
* 파라메터 msg1, msg2 (다국어 적용으로 인해 추가)
*/

function chkMsgLength(intMax, objMsg, msg1, msg2){
	
	//var length = objMsg.value.length;
	var obj =  document.getElementById(objMsg);
	var length = obj.value.length;
	//var length = lengthMsg(objMsg.value);

 	document.getElementById("comCountNum").innerHTML = length;//현재 byte수를 넣는다
 if (length > intMax) {
  	alert(msg1 + intMax + msg2 + "\n");
  		obj.innerHTML = obj.value.substring(0,intMax);
  		document.getElementById("comCountNum").innerHTML = intMax;//현재 수를 넣는다
  		
  //alert("최대 " + intMax + "byte이므로 초과된 글자수는 자동으로 삭제됩니다.\n");
  //objMsg.value = objMsg.value.replace(/\r\n$/, "");
  //objMsg.value = assertMsg(intMax,objMsg.value,comCountNum);
 }
}


function lengthMsg(objMsg) {
	var nbytes = 0;
	for (i=0; i<objMsg.length; i++) {
		var ch = objMsg.charAt(i);
		
		if(escape(ch).length > 4) {
			nbytes += 2;
		} else if (ch == '\n') {
			if (objMsg.charAt(i-1) != '\r') {
				nbytes += 1;
			}
		} else if (ch == '<' || ch == '>') {
			nbytes += 4;
		} else {
			nbytes += 1;
		}
	}
	return nbytes;
}

function assertMsg(intMax,objMsg) {
 var inc = 0;
 var nbytes = 0;
 var msg = "";

 var msglen = objMsg.length;
 for (i=0; i<msglen; i++) {
  var ch = objMsg.charAt(i);
  if (escape(ch).length > 4) {
  inc = 2;
  } else if (ch == '\n') {
   if (objMsg.charAt(i-1) != '\r') {
   inc = 1;
   }
  } else if (ch == '<' || ch == '>') {
   inc = 4;
  } else {
   inc = 1;
  }
  if ((nbytes + inc) > intMax) {
   break;
  }
  nbytes += inc;
  msg += ch;
 }
 document.getElementById("comCountNum").innerHTML = nbytes; //현재 byte수를 넣는다
 return msg;
}



// Map 객체 사용하기
function Map(Delimitor) {
  this.Delimitor = (Delimitor == null ? "||" : Delimitor);
  this._MapClass = new ActiveXObject("Scripting.Dictionary");

  this.get = function(key) { return this._MapClass.exists(key) ? this._MapClass.item(key) : null; }
  this.getKey = function (value) {
    var keys = this.keys();
    var values = this.values();
    for (var i in values) {
       if (value == values[i]) return keys[i];
     }
    return "";
  }
  this.put = function(key, value) {
      var oldValue = this._MapClass.item(key);
      this._MapClass.item(key) = value;
      return value;
  }
  this.size = function() { return this._MapClass.count; }
  this.remove = function(key) {
    var value = this._MapClass.item(key);
    this._MapClass.remove(key);
    return value;
  }
  this.clear = function() {
    this._MapClass.removeAll();
  }
  this.keys = function() {
    return this._MapClass.keys().toArray();
  }
  this.values = function() {
    return this._MapClass.items().toArray();
  }
  this.containsKey = function(key) {
    return this._MapClass.exists(key);
  }
  this.containsValue = function(value) {
    var values = this.values();
    for (var i in values) {
      if (value == values[i]) {
        return true;
      }
    }
    return false;
  }
  this.isEmpty = function() { return this.size() <= 0;}
  this.putAll = function(map) {
    if (!(map instanceof Map)) {
      throw new Error(0, "Map.putAll(Map) method?? Map type?? parameter?? ??????????.");
    }
    var keys = map.keys();
    for (var i in keys) {
      this.put(keys[i], map.get(keys[i]));
    }
    return this;
  }

  this.toString = function(separator) {
    var keys = this.keys();
    var result = "";
    separator = separator == null ? "&" : separator;
    for (var i in keys) {
      result += (keys[i] + this.Delimitor + this._MapClass.item(keys[i]));
      if (i < this.size() - 1) {
        result += separator;
      }
    }
    return result;
  }
}


/**
 * 사용법 *
 * 1. html작성

<div id="test" style="position:absolute; left:141px; top:234px; z-index:1; visibility: hidden;">
  <table border="0" cellpadding="1" cellspacing="1" bgcolor="#000000">
    <tr>
      <td bgcolor="#FFFFE1">
        <div id="test1"></div>
        <div id="test2"></div>
      </td>
    </tr>
  </table>
</div>


 * 2. event호출

<a href="#" onMouseOver="showLayer('test','test1','test1_content','test2','test2_content')" onMouseOut="hideLayer('test')">마우스온</a>
<input type="hidden" name="test1_content" value="a">
<input type="hidden" name="test2_content" value="b">


 * 설명 :	"마우스온"이라는 글자에 마우스포인터를 올리면 'test'레이어가 보여지고, 마우스포인터를 치우면 'test'레이어가 사라진다
 *			이때 레이어안에서 경우에 따라 다르게 보여지고 싶은 부분을 두개의 레이어(test1,test2)로 지정하고
			셋팅되어지는 값을 hidden형태로 지정한 다음
			showLayer function을 호출한다. 호출할때에는 매개변수의 맨처음은 가장상위 레이어아이디이고
			순서대로 하위 레이어아이디와 그 값에 해당하는 hidden객체의 이름을 넣는다
			이때 레이어아이디, hidden객체이름은 제한없이 셋팅가능하다.
 */
function MM_showHideLayers() { //v6.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
	if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
	obj.visibility=v; }
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
	d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function showLayer(){
	var args = showLayer.arguments;
	var num = (args.length-1) / 2;
	//정보 셋팅하기
	for(var i=0;i<num;i++){
		document.getElementById(args[(i+1)*2-1]).innerText = document.getElementById(args[(i+1)*2]).value;
	}
	//위치조정
	viewMenu(args[0]);
	//레이어 보여주기
	MM_showHideLayers(args[0],'','show');
}

function hideLayer(div_name){
	MM_showHideLayers(div_name,'','hide');
}

// 이미지 파일 확장명 체크
function checkImageFileType(objInput, strMsg){
	pathpoint = objInput.value.lastIndexOf('.');
	filepoint = objInput.value.substring(pathpoint+1,objInput.value.length);
	filetype = filepoint.toLowerCase();
	if (filetype == 'gif'|| filetype == 'jpg' || filetype == 'jpeg' || filetype == 'png' || filetype == 'bmp'){
       return true; 
	}else{
		alert(strMsg);
		objInput.focus();
		return false; 
	}
}

// 플래시 파일 체크
function checkFlashFileType(objInput){
	pathpoint = objInput.value.lastIndexOf('.');
	filepoint = objInput.value.substring(pathpoint+1,objInput.value.length);
	filetype = filepoint.toLowerCase();
	if (filetype == 'swf'){
       	return true; 
	}else{
		return false; 
	}
} 


// SelectBox
function opt(n, v) {
	for(var i = 0 ; i < n.length ; i++) {
		if(n.options[i].value == v) {
			n.options[i].selected;
		}
	}
}

function chk(n, v) {
	for(var i = 0 ; i < n.length ; i++) {
		if(n[i].value == v) {
			n[i].checked = "checked";
		}
	}
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