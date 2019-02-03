import React from "react";
import { render } from "react-dom";
import { Playlists } from "./Playlists";

const ENDPOINT = "http://localhost:8888/playlists";
const FETCH_OPTIONS = {
  credentials: "include"
};

const fetchData = async () => {
  let response = await fetch(ENDPOINT, FETCH_OPTIONS);
  let playlistsData = await response.json();

  return playlistsData;
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      playlists: []
    };
  }

  async componentDidMount() {
    let playlists = await fetchData();
    console.log("fetched data", playlists);

    this.setState({
      playlists,
      loading: false
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <div>
          <h1>Playlist Editor</h1>
          <div> Loading... </div>
        </div>
      );
    }

    return (
      <div>
        <h1>Playlist Editor</h1>

        <div>
          {this.state.playlists.map(playlist => {
            return (
              <Playlists
                key={playlist.id}
                name={playlist.name}
                id={playlist.id}
              />
            );
          })}

          <pre>
            <code>{JSON.stringify(this.state)}</code>
          </pre>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
