(function(){
  function PlayerBarCtrl(Fixtures, SongPlayer){
    this.albumData = Fixtures.getAblum();
    this.songPlayer = SongPlayer;
  }

  angular
    .module('blocJams')
    .controller('PlayerBarCtrl', ['Fixtures', 'SongPlayer', PlayerBarCtrl]);
});
