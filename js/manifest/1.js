window.onload=function(){
	window.applicationCache.update();
	window.applicationCache.addEventListener('updateready',function(){
	    window.applicationCache.swapCache();
	    alert('更新完成')
	},false);
	window.applicationCache.addEventListener('progress',function(){
	   alert(applicationCache.status);
	},false);

}