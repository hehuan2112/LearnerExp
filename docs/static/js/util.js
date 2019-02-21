String.prototype.format = String.prototype.f = function() {
    var s = this,
        i = arguments.length;

    while (i--) {
        s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
    }
    return s;
};


Date.prototype.format = function(fmt) {
    var o = {
        "M+" : this.getMonth()+1,
        "d+" : this.getDate(),
        "h+" : this.getHours(),
        "m+" : this.getMinutes(),
        "s+" : this.getSeconds(),
        "q+" : Math.floor((this.getMonth()+3)/3),
        "S"  : this.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) {
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    for(var k in o) {
        if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
    }
    return fmt;
} 

var util = {

    months: [
        ["January", "Jan."],
        ["February ", "Feb."], 
        ["March ", "Mar."],
        ["April ", "Apr."],
        ["May ", "May."],
        ["June ", "Jun."],
        ["July ", "Jul."],
        ["August ", "Aug."], 
        ["September ", "Sep."],
        ["October ", "Oct."],
        ["November ", "Nov."],
        ["December ", "Dec."]
    ],

    sec2display: function(sec) {
        if (sec == null) {
            return '00:00:00';
        }
        return this.pad(parseInt(sec / 3600), 2) + ':' +
            this.pad(parseInt((sec % 3600) / 60), 2) + ':' +
            this.pad(sec % 60, 2);
    },

    pad: function(num, n) {  
        var len = num.toString().length;  
        while(len < n) {  
            num = "0" + num;  
            len++;  
        }  
        return num;  
    },

    randID(num){
        var returnStr = "",       
            charStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; 
        for(var i=0; i<num; i++){
            var index = Math.round(Math.random() * (charStr.length-1));
            returnStr += charStr.substring(index,index+1);
        }
        return returnStr;
    }
};

function dbg(msg) {
    console.log('* ' + msg);
}