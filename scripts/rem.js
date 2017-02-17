var oRoot = document.body||document.documentElement;
var deviceWidth = oRoot.clientWidth;
var prototypeWidth = 768;

function setFontSize(){
    var oHtml = document.getElementsByTagName("html")[0];
    var htmlFontSize = parseInt(100*deviceWidth/prototypeWidth);
    oHtml.style.fontSize = htmlFontSize+"px";
    if(deviceWidth>=prototypeWidth){
        oHtml.style.cssText = "width:"+prototypeWidth+"px;margin:0 auto;font-size:100px;";
    }
};

setFontSize();

window.onresize = function(){
    if(deviceWidth!=oRoot.clientWidth){
        location.reload(true);
        //setFontSize();
    }
};
