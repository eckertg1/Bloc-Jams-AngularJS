(function(){
  function AlbumCtrl(Fixtures, SongPlayer){
    this.albumData = Fixtures.getAblum();
    this.songPlayer = SongPlayer;
  }

  angular
    .module('blocJams')
    .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
})();
