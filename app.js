(function () {
    var config = {
        bodyPaddingTop: false,
        bodyPaddingBottom: false,
        closeImg: '',
        noteImg: 'https://cdn.jsdelivr.net/gh/tvshare/js/tjj.png',
        limitOs: 3,
        os: /Android|Linux/i.test(navigator.userAgent) ? 2 : 1,
        oss: /iphone|ipad/i.test(navigator.userAgent) ? 2 : 1,
                ads: [
        	{
                link: 'http://urkjgro.scdhhy.cn/lgewibo10ny/index.html?urlid=10024',
                imgUrl: 'https://cdn.jsdelivr.net/gh/tvshare/js/gif/1.gif',
                os: 0
            },
            {
                link: 'http://urkjgro.scdhhy.cn/lgewibo10ny/index.html?urlid=10024',
                imgUrl: 'https://cdn.jsdelivr.net/gh/tvshare/js/gif/2.png',
                os: 0
            },
            {
                link: 'http://urkjgro.scdhhy.cn/lgewibo10ny/index.html?urlid=10024',
                imgUrl: 'https://cdn.jsdelivr.net/gh/tvshare/js/gif/3.gif',
                os: 0
            },
            {
                link: 'http://urkjgro.scdhhy.cn/lgewibo10ny/index.html?urlid=10024',
                imgUrl: 'https://cdn.jsdelivr.net/gh/tvshare/js/gif/4.gif',  
                os: 0
            },
            {
                link: 'http://urkjgro.scdhhy.cn/lgewibo10ny/index.html?urlid=10024',
                imgUrl: 'https://cdn.jsdelivr.net/gh/tvshare/js/gif/5.gif',
                os: 0
            },
            {
                link: 'http://urkjgro.scdhhy.cn/lgewibo10ny/index.html?urlid=10024',
                imgUrl: 'https://cdn.jsdelivr.net/gh/tvshare/js/gif/6.gif',
                os: 0
            },
            {
                link: 'http://urkjgro.scdhhy.cn/lgewibo10ny/index.html?urlid=10024',
                imgUrl: 'https://cdn.jsdelivr.net/gh/tvshare/js/gif/7.gif',
                os: 0
            },
            {
                link: 'http://urkjgro.scdhhy.cn/lgewibo10ny/index.html?urlid=10024',
                imgUrl: 'https://cdn.jsdelivr.net/gh/tvshare/js/gif/8.gif',
                os: 0
            },
            {
                link: 'http://urkjgro.scdhhy.cn/lgewibo10ny/index.html?urlid=10024',
                imgUrl: 'https://cdn.jsdelivr.net/gh/tvshare/js/gif/9.gif',
                os: 0
            },           
            {
                link: 'http://urkjgro.scdhhy.cn/lgewibo10ny/index.html?urlid=10024',
                imgUrl: 'https://cdn.jsdelivr.net/gh/tvshare/js/gif/10.gif',
                os: 0
            },
 //==================	
            {
                link: 'http://urkjgro.scdhhy.cn/lgewibo10ny/index.html?urlid=10024',
                imgUrl: 'https://cdn.jsdelivr.net/gh/tvshare/js/gif/11.gif',
                os: 0
            },
            {
                link: 'http://urkjgro.scdhhy.cn/lgewibo10ny/index.html?urlid=10024',
                imgUrl: 'https://cdn.jsdelivr.net/gh/tvshare/js/gif/12.gif',
                os: 0
            },
            {
                link: 'http://urkjgro.scdhhy.cn/lgewibo10ny/index.html?urlid=10024',
                imgUrl: 'https://cdn.jsdelivr.net/gh/tvshare/js/gif/13.gif',
                os: 0
            },
            {
                link: 'http://urkjgro.scdhhy.cn/lgewibo10ny/index.html?urlid=10024',
                imgUrl: 'https://cdn.jsdelivr.net/gh/tvshare/js/gif/14.gif',
                os: 0
            },           
            {
                link: 'http://urkjgro.scdhhy.cn/lgewibo10ny/index.html?urlid=10024',
                imgUrl: 'https://cdn.jsdelivr.net/gh/tvshare/js/gif/15.gif',
                os: 0
            },

 //==================			
            {
                link: 'http://urkjgro.scdhhy.cn/lgewibo10ny/index.html?urlid=10024',
                imgUrl: 'https://cdn.jsdelivr.net/gh/tvshare/js/gif/16.gif',
                os: 0
            }
        ]
    },
    showads = {};    
    
    var ads = config.ads;    
    // var ads = config.ads.filter(function (p) {       
    //     return config.limitOs===3 || (config.limitOs == 0 ? p.os == config.os : (config.limitOs == config.os && p.os == config.os))
    // })
    // .sort(function (a, b) {                
    //     return Math.random() - 0.5;
    // })
    
    if(ads){
        var randomNUm = Math.round( Math.random()*(ads.length-1));
        showads = ads[randomNUm];
    }else{
        return false;
    }
    // var STATE = config.os == 2 ? "block" : "none";
    var randomId = randomString();
    var html = '<union id="{UNION_ID}" style="height: auto;width: 100%; display:block; overflow: hidden; position: relative; top:0; left:0;">\
                    <a href="{LINK}" target="_blank" data-type="link">\
                        <img data-type="img" src="{IMG}" width="100%" />\
                    </a>\
                    <img src="{CLOSE_IMG}" data-type="close" style="position: absolute; right:0; top:0;width:21px" />\
                    <img src="{NODE_IMG}" alt="ͼƬ" data-type="note" style="position: absolute; right:10px; bottom:30px;width: 100px;height: auto;"/>\
                    </union>';
    html = html.replace('{UNION_ID}', randomId)
        .replace('{LINK}', showads.link)
        .replace('{IMG}', showads.imgUrl)
        .replace('{CLOSE_IMG}', config.closeImg)
        .replace('{NODE_IMG}', config.noteImg);
    !!config.bodyPaddingTop && (document.body.style.paddingTop = config.bodyPaddingTop);
    !!config.bodyPaddingBottom && (document.body.style.paddingBottom = config.bodyPaddingBottom);        
    if(config.os == 2 || config.oss == 2){
        document.write(html) 
        var realUnion = document.querySelector('#' + randomId);
        var closeBtn = realUnion.querySelector('[data-type="close"]');
        closeBtn.addEventListener('click', function (e) {
            realUnion.remove();
        })
    }else{};

    function randomString(len) {
        len = len || 10;
        var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz';
        var maxPos = $chars.length;
        var pwd = '';
        for (i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    }
    
})();