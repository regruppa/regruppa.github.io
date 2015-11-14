// Nav
navWe = new Image();navWe.src = stylesheet_directory + "/images/nav/we_.gif";
navWe_ = new Image();navWe_.src = stylesheet_directory + "/images/nav/we.gif";

navMedia = new Image();navMedia.src = stylesheet_directory + "/images/nav/media_.gif";
navMedia_ = new Image();navMedia_.src = stylesheet_directory + "/images/nav/media.gif";

navChronicle = new Image();navChronicle.src = stylesheet_directory + "/images/nav/chronicle_.gif";
navChronicle_ = new Image();navChronicle_.src = stylesheet_directory + "/images/nav/chronicle.gif";

navFiles = new Image();navFiles.src = stylesheet_directory + "/images/nav/files_.gif";
navFiles_ = new Image();navFiles_.src = stylesheet_directory + "/images/nav/files.gif";

navEtc = new Image();navEtc.src = stylesheet_directory + "/images/nav/etc_.gif";
navEtc_ = new Image();navEtc_.src = stylesheet_directory + "/images/nav/etc.gif";

function mOver(name)
{
	if(document.images)
	{
		flName = eval(name);
		document[name].src = flName.src;
	}
}
function mOut(name)
{
	if(document.images)
	{
		flName=eval(name + "_");
		if(flName.complete)
			document[name].src = flName.src;
	}
}

// Nifty
function NiftyCheck(){
if(!document.getElementById || !document.createElement)
    return(false);
var b=navigator.userAgent.toLowerCase();
if(b.indexOf("msie 5")>0 && b.indexOf("opera")==-1)
    return(false);
return(true);
}

function Rounded(selector,bk,color,size){
var i;
var v=getElementsBySelector(selector);
var l=v.length;
for(i=0;i<l;i++){
    AddTop(v[i],bk,color,size);
    AddBottom(v[i],bk,color,size);
    }
}

function RoundedTop(selector,bk,color,size){
var i;
var v=getElementsBySelector(selector);
for(i=0;i<v.length;i++)
    AddTop(v[i],bk,color,size);
}

function RoundedBottom(selector,bk,color,size){
var i;
var v=getElementsBySelector(selector);
for(i=0;i<v.length;i++)
    AddBottom(v[i],bk,color,size);
}

function AddTop(el,bk,color,size){
var i;
var d=document.createElement("b");
var cn="r";
var lim=4;
if(size && size=="small"){ cn="rs"; lim=2}
d.className="rtop";
d.style.backgroundColor=bk;
for(i=1;i<=lim;i++){
    var x=document.createElement("b");
    x.className=cn + i;
    x.style.backgroundColor=color;
    d.appendChild(x);
    }
el.insertBefore(d,el.firstChild);
}

function AddBottom(el,bk,color,size){
var i;
var d=document.createElement("b");
var cn="r";
var lim=4;
if(size && size=="small"){ cn="rs"; lim=2}
d.className="rbottom";
d.style.backgroundColor=bk;
for(i=lim;i>0;i--){
    var x=document.createElement("b");
    x.className=cn + i;
    x.style.backgroundColor=color;
    d.appendChild(x);
    }
el.appendChild(d,el.firstChild);
}

function getElementsBySelector(selector){
var i;
var s=[];
var selid="";
var selclass="";
var tag=selector;
var objlist=[];
if(selector.indexOf(" ")>0){  //descendant selector like "tag#id tag"
    s=selector.split(" ");
    var fs=s[0].split("#");
    if(fs.length==1) return(objlist);
    return(document.getElementById(fs[1]).getElementsByTagName(s[1]));
    }
if(selector.indexOf("#")>0){ //id selector like "tag#id"
    s=selector.split("#");
    tag=s[0];
    selid=s[1];
    }
if(selid!=""){
    objlist.push(document.getElementById(selid));
    return(objlist);
    }
if(selector.indexOf(".")>0){  //class selector like "tag.class"
    s=selector.split(".");
    tag=s[0];
    selclass=s[1];
    }
var v=document.getElementsByTagName(tag);  // tag selector like "tag"
if(selclass=="")
    return(v);
for(i=0;i<v.length;i++){
    if(v[i].className==selclass){
        objlist.push(v[i]);
        }
    }
return(objlist);
}

// NiftyFinal
window.onload=function(){
if(!NiftyCheck())
    return;

Rounded("div.text","white","#E4E7F2");
Rounded("div#minipics li","#FFF","#D6DEC5");
}