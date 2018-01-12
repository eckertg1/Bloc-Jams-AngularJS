(function (){
  function SongPlayer(){
    /**
    *@desc Song Player set to an object
    *@type {object}
    */
    var SongPlayer = {};

    /**
    *@desc Song object audio file
    *@type {object}
    */
    var currentSong = null;

    /**
    *@desc Buzz object audio file
    *@type {object}
    */
    var currentBuzzObject = null;

    /**
    * @function setSong
    * @desc Stops currently playing song and loads new audio file as currentBuzzObject
    * @param {Object} song
    */
    var setSong = function (song){
      if (currentBuzzObject){
        currentBuzzObject.stop();
        currentSong.playing = null;
      }
      currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
      });

      currentSong = song;
    };

    /**
    * @function playSong
    * @desc playes the current audio file and sets playing in the song to True
    * @param {Object} song
    */
    var playSong = function (song){
      currentBuzzObject.play();
      song.playing = true;
    }
    SongPlayer.play = function(song){
      if (currentSong !== song){
        setSong(song);
        playSong(song);
      } else if (currentSong === song){
        if (currentBuzzObject.isPaused()){
          playSong(song);
        }
      }
    };
    Songplayer.pause = function(song){
      currentBuzzObject.pause();
      song.playing = false;
    };
    return Songplayer;
  }

  angular
    .module('blocJams')
    .factory('SongPlayer', SongPlayer);

})();
