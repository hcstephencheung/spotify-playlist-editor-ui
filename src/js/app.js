import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Playlists from "./Playlists";
import PlaylistProfile from "./PlaylistProfile";
import Login from "./Login";
import Token from "./Token";

class App extends React.Component {

  render() {
    return (
      <div>
        <header>
          <Link to={`/playlists`}>Spotify Playlist Editor</Link>
        </header>

        <Router>
          <Login path="/login" />
          <Token path="/token" />
          <Playlists path="/playlists" />
          <PlaylistProfile path="/playlist/:id" />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
