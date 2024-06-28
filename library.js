const library = {
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
                  }
     };
     /////////////////////////////
     // FUNCTIONS TO IMPLEMENT:
     /////////////////////////////
     
     //helper function to display playlist info
     const displayPlaylist = function(playlistId) {
            let allPlaylists = library['playlists'];
            for (let playlist in allPlaylists) {
                   if (allPlaylists[playlist]['id'] === playlistId) {
                          return `${playlist}: ${allPlaylists[playlist]['name']} - ${allPlaylists[playlist]['tracks'].length} tracks`;
                   }
            }
     };
     
     //helper function to display tracks
     const displayTracks = function(trackId) {
            let allTracks = library['tracks'];
            for (let track in allTracks) {
                   if (allTracks[track]['id'] === trackId) {
                          return `${track}: ${allTracks[track]['name']} (${allTracks[track]['album']})`;
                   }
            }
     };
     
     // prints a list of all playlists, in the form:
     // p01: Coding Music - 2 tracks
     // p02: Other Playlist - 1 tracks
     //Q, do I need to sort the object first?; otherwise DONE
     const printPlaylists = function() {
            let playlists = library['playlists'];
            let playlistsIds = Object.keys(playlists);
            playlistsIds.sort();
            for (let playlist of playlistsIds) {
                   console.log(displayPlaylist(playlist));
            }
     };
     
     // prints a list of all tracks, using the following format:
     // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
     // t02: Model View Controller by James Dempsey (WWDC 2003)
     // t03: Four Thirty-Three by John Cage (Woodstock 1952)
     const printTracks = function() {
            let tracks = library['tracks'];
            for (let track in tracks) {
                   console.log(displayTracks(track));
            }
     };
     
     
     // prints a list of tracks for a given playlist, using the following format:
     //printPlaylist('p01')
     // p01: Coding Music - 2 tracks
     // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
     // t02: Model View Controller by James Dempsey (WWDC 2003)
     
     //Helper function to get the id of the playlist
     
     //helper function to find tracks
     const findTracksInPlaylist = function(playlist) {
            let playlistTrackIds = library['playlists'][playlist]['tracks'];
            let playlistTracks = '';
            for (let track in playlistTrackIds) {
                   if (track !== playlistTrackIds.length - 1) {
                          playlistTracks += displayTracks(playlistTrackIds[track]) + '\n';
                   } else {
                          playlistTracks += displayTracks(playlistTrackIds[track]);
                   }
            }
            return playlistTracks;
     };
     //console.log(findTracksInPlaylist('p01'));
     
     const printPlaylist = function(playlistId) {
            let playlist = library['playlists'][playlistId];
            console.log(displayPlaylist(playlist['id'])); //good
            console.log(findTracksInPlaylist(playlistId)); //good, ask about this function, i get an extra line on the bottom
     };
     
     
     // adds an existing track to an existing playlist - works
     const addTrackToPlaylist = function(trackId, playlistId) {
            library['playlists'][playlistId]['tracks'].push(trackId);
     };
     
     // generates a unique id
     // (already implemented: use this for addTrack and addPlaylist)
     const generateUid = function() {
       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
     };
     
     // adds a track to the library
     const addTrack = function(name, artist, album) {
            let tracks = library['tracks'];
            let newTrackId = generateUid();
            tracks[newTrackId] = {
                   'id': newTrackId,
                   'name': name,
                   'artist': artist,
                   'album': album,
            };
     };
     
     // adds a playlist to the library
     const addPlaylist = function(name) {
            let playlists = library['playlists'];
            let newPlaylistId = generateUid();
            playlists[newPlaylistId] = {
                   'id': newPlaylistId,
                   'name': name,
                   'tracks': [],
            }
     };
     
     // STRETCH:
     // given a query string string, prints a list of tracks
     // where the name, artist or album contains the query string (case insensitive)
     // tip: use "string".search("tri") 
     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
     const printSearchResults = function(query) {
     
     };