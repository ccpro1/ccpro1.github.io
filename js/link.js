<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script>link = {
    init: function () {
        var that = this;
        //linklist.json 文件路径
        $.getJSON("/links/linklist.json",

            function (data) {
                that.render(data);
            });
    },
    render: function (data) {
        var html, nickname, avatar, site, li = "";
        for (var i = 0; i < data.length; i++) {
            nickname = data[i].nickname;
            avatar = data[i].avatar;
            site = data[i].site;
            li += '<div class="card">' + '<a href="' + site + '" target="_blank">' + '<div class="thumb" style="background: url( ' + avatar + ');">' + '</div>' + '</a>' + '<div class="card-header">' + '<div><a href="' + site + '" target="_blank">' + nickname + '</a></div>' + '</div>' + '</div>';

        }
        $(".link-navigation").append(li);
    }
}
link.init();