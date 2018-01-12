(function(){
  function AlbumCtrl(Fixtures){
    this.albumData = Fixtures.getAblum();
    for (var i=0; i < 12; i++){
      this.albumData.push(angular.copy(albumPicasso));
  }

  angular
    .module('blocJams')
    .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
})();
