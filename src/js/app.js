import React from "react";
import { render } from "react-dom";
import { Playlists } from "./Playlists";

const ENDPOINT = "http://localhost:8888/playlists";

class App extends React.Component {
    componentDidMount() {
        let playlistsData = {};

        fetch(ENDPOINT)
            .then(response => {
                if (response.status !== 200) {
                    console.log("Could not fetch: ", response.status);
                    return;
                }

                response.json().then(data => {
                    playlistsData = data;
                    console.log("Fetched Data: ", playlistsData);
                });
            })
            .catch(err => {
                console.log("Fetch Error: ", err);
            });
    }

    render() {
        return (
            <div>
                <h1>Playlist Editor</h1>
                <Playlists name="test 1" total={1} />
                <Playlists name="test 2" total={50} />
                <Playlists name="test 3" total={23} />
            </div>
        );
    }
}

render(<App />, document.getElementById("root"));
