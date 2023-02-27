///////////////////////////////////////////
// IE activeX patch
// author Jackie Lee (jackie72@korea.com)
// http://www.727406.com
// create date 2008.07.03
// version 2.0
// powered by Park Sung-Jin
// 배포시 위내용을 포함해 주시기 바랍니다
///////////////////////////////////////////

//flashObject(ID및NAME,플래시파일경로,가로픽셀,세로픽셀,변수,배경색,윈도우모드)
//가로, 세로 픽셀을 100%로 할 경우 '100%'로 쓰면 됩니다


function flashString(mID, mUrl, mWidth, mHeight, mParams, mBGcolor, mWmode) {
	var buff = [];
	buff.push("<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0' width='" + mWidth + "' height='" + mHeight + "' id='" + mID + "' align='middle'>");
	buff.push("<param name='allowScriptAccess' value='always' />");
	buff.push("<param name='allowFullScreen' value='true' />");
	buff.push("<param name='movie' value='" + mUrl + "' />");
	buff.push("<param name='FlashVars' value='" + mParams + "' />");
	buff.push("<param name='quality' value='high' />");
	buff.push("<param name='wmode' value='" + mWmode + "' />");
	buff.push("<param name='bgcolor' value='" + mBGcolor + "' />");
	buff.push("<embed src='" + mUrl + "' FlashVars='" + mParams + "' quality='high' wmode='" + mWmode + "' bgcolor='" + mBGcolor + "' width='" + mWidth + "' height='" + mHeight + "' name='" + mID + "' align='middle' allowScriptAccess='always' allowFullScreen='false' type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/go/getflashplayer' />");
	buff.push("</object>");
	
	return buff.join("");
}

function flashObject(mID, mUrl, mWidth, mHeight, mParam, mBGcolor, mWmode) {
	document.write(flashString(mID, mUrl, mWidth, mHeight, mParam, mBGcolor, mWmode));
}