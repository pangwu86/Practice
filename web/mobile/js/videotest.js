// oadstart    Fired when the user agent begins looking for media data.
// loadedmetadata  Fired when the player has initial duration and dimension information.
// loadeddata  Fired when the player has downloaded data at the current playback position.
// loadedalldata   Fired when the player has finished downloading the source data.
// play    Fired whenever the media begins or resumes playback.
// pause   Fired whenever the media has been paused.
// timeupdate  Fired when the current playback position has changed. During playback this is fired every 15-250 milliseconds, depnding on the playback technology in use.
// ended   Fired when the end of the media resource is reached. currentTime == duration
// durationchange  Fired when the duration of the media resource is changed, or known for the first time.
// progress    Fired while the user agent is downloading media data.
// resize  Fired when the width and/or height of the video window changes.
// volumechange    Fired when the volume changes.
// error   Fired when there is an error in playback.
// fullscreenchange    Fired when the player switches in or out of fullscreen mode.
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

    // _V_("tv1").ready(function() {
    //     var myPlayer = this;
    //     myPlayer.addEvent("play", onPlay);
    //     myPlayer.addEvent("pause", onPause);
    //     myPlayer.addEvent("ended", onEnd);
    //     myPlayer.play();
    // });
    // ###################################################

    function play2() {
        onEnd.call(this);

        jq1.hide();
        jq2.show();
        // mp2.play();
        v2.play();
    }

    function play3() {
        onEnd.call(this);

        jq2.hide();
        jq3.show();
        // mp3.play();
        v3.play();
    }

    var mp1, mp2, mp3;
    var jq1, jq2, jq3;
    var v1, v2, v3;

    mp1 = _V_('tv1');
    mp2 = _V_('tv2');
    mp3 = _V_('tv3');
    mp1._n = 1;
    mp2._n = 2;
    mp3._n = 3;

    jq1 = $('#tv1');
    jq2 = $('#tv2');
    jq3 = $('#tv3');

    mp1.addEvent('ended', play2);
    mp2.addEvent('ended', play3);

    mp1.addEvent('play', onPlay);
    mp1.addEvent('pause', onPause);
    mp2.addEvent('play', onPlay);
    mp2.addEvent('pause', onPause);
    mp3.addEvent('play', onPlay);
    mp3.addEvent('pause', onPause);

    //jq2.hide();
    //jq3.hide();

    // mp1.play();

    v1 = document.getElementById("tv1_html5_api"); 
    v2 = document.getElementById("tv2_html5_api"); 
    v3 = document.getElementById("tv3_html5_api"); 
    v1.play();

});