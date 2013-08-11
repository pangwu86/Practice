    _V_('tv2').ready(function() {
        mp2 = this;
        mp2._n = 2;
        mp2.addEvent('ended', play3);
        mp2.addEvent('play', onPlay);
        mp2.addEvent('pause', onPause);
    });
    _V_('tv3').ready(function() {
        mp3 = this;
        mp3._n = 3;
        mp3.addEvent('play', onPlay);
        mp3.addEvent('pause', onPause);
    });
    _V_('tv1').ready(function() {
        mp1 = this;
        mp1._n = 1;
        mp1.addEvent('ended', play2);
        mp1.addEvent('play', onPlay);
        mp1.addEvent('pause', onPause);

        mp1.play();

    });