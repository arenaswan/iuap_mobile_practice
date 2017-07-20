

summerready = function(){
    // here is your code...	
    var top = $summer.offset($summer.byId('header')).h;
	var bottom = $summer.offset($summer.byId('footer')).h;
    summer.openFrame({
        id: 'list',
        url: 'html/list.html',
        bounces: true,
        position: {
            top: top,
			bottom: bottom,
            left: 0,
            right: 0
        }
    });
}