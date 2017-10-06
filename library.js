var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function () {
  var playlists = this.playlists;
  for (var playlistID in playlists) {
    //console.log('playlistID: ', playlistID);
    var playlist = playlists[playlistID]
    //console.log(playlist);
    this.printPlaylist(playlist);
}},
  printPlaylist: function (playlists) {
  var tracks = this.tracks
  var output = playlists.id + ':' + ' ' + playlists.name + ' ' + '-' + ' ' + playlists.tracks.length + ' tracks'
  console.log(output);
  for (trackID of playlists.tracks) {
    var track = tracks[trackID];
    this.printTrack(track);
}},
  printTracks: function () {
  var tracks = this.tracks;
  for (var trackID in tracks) {
  // console.log('trackID: ', trackID)
    var track = tracks[trackID]
    // console.log(track);
    this.printTrack(track);
}},
  printTrack: function (track) {
    var output = track.id + ': ' + track.name + ' by ' + track.artist + '(' + track.album + ')'
    console.log(output);
},
  addTrackToPlaylist: function (trackId, playlistId) {
  var playlist = this.playlists[playlistId]
  if (playlist == undefined) {
    return 'Invalid Playlist ID!';
  } else {
  this.playlists[playlistId].tracks.push(trackID)
}},
  uid: function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
},
  addTrack: function (name, artist, album) {
  var newKey = uid()
  this.tracks[newKey] = {
    Name: name,
    Artists: artist,
    Album: album
  }
},
  addPlaylist: function (name) {
  var newKey = this.uid()
  this.playlists[newKey] = {
    Name: name,
  }
},
  printSearchResults: function(query) {
  var tracks = this.tracks
  var emptyArr = []
  for (trackID in tracks) {
    var track_element = tracks[trackID];
    for (trackInfo in track_element)  {
     if (track_element[trackInfo].search(query) === -1) {
      continue;
    } else {
      emptyArr.push(track_element);
    }
  }
}
return emptyArr;
},
}
