import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Playlists from "./Playlists";
import PlaylistProfile from "./PlaylistProfile";

class App extends React.Component {

  render() {
    return (
      <div>
        <Link to={`/playlists`}>Spotify Playlist Editor</Link>
        <Router>
          <Playlists path="/playlists" />
          <PlaylistProfile path="/playlist/:id" />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
