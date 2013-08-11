$(document).ready(function() {

    var log = $('.log');

    var count = 0;

    function w(str) {
        count++;
        log.append(count + '.' + str + '\n');
    }

    function onPlay() {
        w(' No.' + this._n + " Play");
    }

    function onPause() {
        w(' No.' + this._n + " Pause");
    }

    function onEnd() {
        w(' No.' + this._n + " End");
    }

    function videohtml(vobj) {
        var html = '';
        html += '<video id="' + vobj.id + '" class="video-js vjs-default-skin" preload="auto" ' + (vobj.controls ? 'controls' : '');
        html += '    width="400" height="200" poster="' + vobj.poster + '">';
        html += '    <source src="' + vobj.src + '" type="video/mp4" />';
        html += '</video>';
        return html;
    }


    var vlist = [
    // ---------
    {
        id: 'tv1',
        src: 'video/1.m4v',
        poster: 'video/1.jpeg"',
        controls: true,
        lt: 20
    },
    // ---------
    {
        id: 'tv2',
        src: 'video/2.m4v',
        poster: 'video/2.jpeg"',
        controls: true,
        lt: 150
    },
    // ---------
    {
        id: 'tv3',
        src: 'video/3.m4v',
        poster: 'video/3.jpeg"',
        controls: false,
        lt: 20
    }];

    var lt = $('.lt');

    var vc = $('.video_list');
    var ci = 0;
    var cv = vlist[0];

    ci++;

    vc.append(videohtml(cv));

    lt.html(cv.lt);



    _V_(cv.id).ready(function() {
        var v1 = this;
        v1._n = 1;
        v1.addEvent('ended', function() {
            onEnd.call(this);
            // 显示第二个
        });
        v1.addEvent('play', function() {
            onPlay.call(this);
            var ltnum = cv.lt;
            var ctfun = function() {
                    if (ltnum > 0) {
                        ltnum--;
                        lt.html(ltnum);
                    } else {
                        clearInterval(clt);

                        vc.empty();
                        cv = vlist[ci]

                        vc.append(videohtml(cv));

                        _V_(cv.id).ready(function() {
                            var v2 = this;
                            v2._n = 2;
                            v2.addEvent('play', function() {
                                onPlay.call(this);
                            });
                        });
                    }
                };
            var clt = setInterval(ctfun, 1000);
        });
        // v1.play();
        var cvjq = document.getElementById(cv.id + '_html5_api');
        // cvjq.play();
    });


});