onmessage=function (ev){// 接收数据
	console.time('执行时间');
	var e=ev||window.event;
	if (e.data=='sum') {
		var a=0;
		for (var i = 0; i < 90000001; i++) {
			a+=Math.sqrt(i);
		};
		postMessage(a);//向页面发送数据
		console.timeEnd('执行时间');
	};
}