	// curious as to how this works, yes?
	// var discord_id = "YOUR_ID";
	// Credits: Azariel#0004 & Roka#1337
	// also replace #spotify with Class ID
	// Documentation: https://github.com/phineas/lanyard

	var discord_id = "786902185178955776";

    function updateStats() {
                    $.getJSON("https://api.lanyard.rest/v1/users/" + discord_id, (data) => {
                        data = data.data;
                        if (data.listening_to_spotify) {
                            $("#spotify").html(`<a class="noAStyle" target="_blank" href="https://open.spotify.com/track/${data.spotify.track_id}"><b>${data.spotify.song}</b> \n by <i>${data.spotify.artist}</i></a>`);
                        } else {
                            $("#spotify").html("Not listening to anything.")
                        }
            })
    }
    updateStats();
    setInterval(updateStats, 30000);