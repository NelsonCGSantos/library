const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three",
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003",
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952",
    },
  },
  playlists: {
    p01: { id: "p01", name: "Coding Music", tracks: ["t01", "t02"] },
    p02: { id: "p02", name: "Other Playlist", tracks: ["t03"] },
  },

  // Method to print all playlists
  printPlaylists: function () {
    let playlists = this.playlists;
    let playlistsIds = Object.keys(playlists);
    playlistsIds.sort();
    for (let playlist of playlistsIds) {
      console.log(this.displayPlaylist(playlist));
    }
  },

  // Method to print all tracks
  printTracks: function () {
    let tracks = this.tracks;
    for (let track in tracks) {
      console.log(this.displayTracks(track));
    }
  },

  // Method to print a playlist's details
  printPlaylist: function (playlistId) {
    console.log(this.displayPlaylist(playlistId));
    console.log(this.findTracksInPlaylist(playlistId));
  },

  // Helper function to display playlist info
  displayPlaylist: function (playlistId) {
    let playlist = this.playlists[playlistId];
    return `${playlist.id}: ${playlist.name} - ${playlist.tracks.length} track${
      playlist.tracks.length !== 1 ? "s" : ""
    }`;
  },

  // Helper function to display track info
  displayTracks: function (trackId) {
    let track = this.tracks[trackId];
    return `${track.id}: ${track.name} by ${track.artist} (${track.album})`;
  },

  // Helper function to find tracks in a playlist
  findTracksInPlaylist: function (playlistId) {
    let playlistTrackIds = this.playlists[playlistId].tracks;
    let playlistTracks = "";
    for (let track of playlistTrackIds) {
      playlistTracks += this.displayTracks(track) + "\n";
    }
    return playlistTracks.trim(); // Trim to remove extra newline at the end
  },

  // Method to add an existing track to an existing playlist
  addTrackToPlaylist: function (trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId);
  },

  // Method to generate a unique id
  generateUid: function () {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  },

  // Method to add a track to the library
  addTrack: function (name, artist, album) {
    let newTrackId = this.generateUid();
    this.tracks[newTrackId] = {
      id: newTrackId,
      name: name,
      artist: artist,
      album: album,
    };
  },

  // Method to add a playlist to the library
  addPlaylist: function (name) {
    let newPlaylistId = this.generateUid();
    this.playlists[newPlaylistId] = {
      id: newPlaylistId,
      name: name,
      tracks: [],
    };
  },

  // STRETCH: Method to print search results based on query string
  printSearchResults: function(query) {
    // Implement if needed
  },
};
