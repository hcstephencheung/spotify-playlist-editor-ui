import React from "react";
import { render } from "react-dom";
import { Playlists } from "./Playlists";

class App extends React.Component {
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
