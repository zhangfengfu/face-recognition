addEventListener('message',function(e){
    // e.data-->'hello girls'
    var data = "you say:" + e.data;
    postMessage(data);
},false);
