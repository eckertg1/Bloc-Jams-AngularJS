(function (){
  function SongPlayer(Fixtures){
    /**
    *@desc Song Player set to an object
    *@type {object}
    */
    var SongPlayer = {};

    /**
    *@desc Currently used Album
    *@type {object}
    */
    var currentAlbum = Fixtures.getAblum();

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
        SongPlayer.currentSong.playing = null;
      }
      currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
      });

      SongPlayer.currentSong = song;
    };
    /**
    *@function getSongIndex
    *@desc retrieves the current song index number
    *@param {object} song
    */
    var getSongIndex = function(song){
      return currentAlbum.songs.indexOf(song);
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

    /**
    *@desc Active song object audio file
    *@type {object}
    */
    SongPlayer.currentSong = null;

    /**
    * @function play
    * @desc changes the song from paused to playing
    * @param {Object} song
    */
    SongPlayer.play = function(song){
      song = song || SongPlayer.currentSong;
      if (SongPlayer.currentSong !== song){
        setSong(song);
        playSong(song);
      } else if (SongPlayer.currentSong === song){
        if (currentBuzzObject.isPaused()){
          playSong(song);
        }
      }
    };

    /**
    * @function pause
    * @desc changes the song from playing to paused
    * @param {Object} song
    */
    Songplayer.pause = function(song){
      song = song || SongPlayer.currentSong;
      currentBuzzObject.pause();
      song.playing = false;
    };
    /**
    * @function stopSong
    * @desc Stops the music and sets .playing to null
    */
    var stopSong = function(){
      currentBuzzObject.stop();
      SongPlayer.currentSong.playing = null;
    }

    /**
    * @function previous
    * @desc changes the current song to the previous index
    */
    SongPlayer.previous = function(){
      var currentSongIndex = getSongIndex(SongPlayer.currentSong);
      currentSongIndex--;

      if (currentSongIndex < 0){
        stopSong();
      } else {
        var song = currentAblum.songs[currentSongIndex];
        setSong(song);
        playSong(song);
      }
    };

    /**
    * @function next
    * @desc changes the current song to the next index
    */
    SongPlayer.next = function(){
      var currentSongIndex = getSongIndex(SongPlayer.currentSong);
      currentSongIndex++;

      if (currentSongIndex > currentAlbum.songs.length){
        stopSong();
      } else {
        var song = currentAblum.songs[currentSongIndex];
        setSong(song);
        playSong(song);
      }
    };

    return Songplayer;
  }

  angular
    .module('blocJams')
    .factory('SongPlayer', ['Fixtures', SongPlayer]);

})();
