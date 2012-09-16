// Created by iWeb 3.0.4 local-build-20120916

function createMediaStream_id1()
{return IWCreatePhotocast("http://jackattack.com/JacksonPhotography/Lines_files/rss.xml",true);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://jackattack.com/JacksonPhotography',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://jackattack.com/JacksonPhotography',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(3,new IWSize(180,180),new IWSize(180,30),new IWSize(216,225),27,27,0,new IWSize(6,6)),new IWPhotoFrame([IWCreateImage('Lines_files/comic-1_01.png'),IWCreateImage('Lines_files/comic-1_02.png'),IWCreateImage('Lines_files/comic-1_03.png'),IWCreateImage('Lines_files/comic-1_06.png'),IWCreateImage('Lines_files/comic-1_09.png'),IWCreateImage('Lines_files/comic-1_08.png'),IWCreateImage('Lines_files/comic-1_07.png'),IWCreateImage('Lines_files/comic-1_04.png')],null,0,1.000000,4.000000,4.000000,1.000000,1.000000,5.000000,5.000000,6.000000,6.000000,71.000000,115.000000,71.000000,115.000000,null,null,null,0.500000),imageStream,range,null,null,0.900000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_2:new IWShadow({blurRadius:1,offset:new IWPoint(4.2426,4.2426),color:'#2b2b2a',opacity:0.900000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,73),url:'Lines_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Lines_files/stroke_1.png'},{rect:new IWRect(1,-1,658,2),url:'Lines_files/stroke_2.png'},{rect:new IWRect(659,-1,2,2),url:'Lines_files/stroke_3.png'},{rect:new IWRect(659,1,2,73),url:'Lines_files/stroke_4.png'},{rect:new IWRect(659,74,2,2),url:'Lines_files/stroke_5.png'},{rect:new IWRect(1,74,658,2),url:'Lines_files/stroke_6.png'},{rect:new IWRect(-1,74,2,2),url:'Lines_files/stroke_7.png'}],new IWSize(660,75)),shadow_1:new IWShadow({blurRadius:1,offset:new IWPoint(2.1213,2.1213),color:'#000000',opacity:0.700000}),shadow_0:new IWShadow({blurRadius:1,offset:new IWPoint(4.2426,4.2426),color:'#2b2b2a',opacity:0.900000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Lines_files/LinesMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()
initializeMediaStream_id1()}
function onPageUnload()
{Widget.onunload();}
