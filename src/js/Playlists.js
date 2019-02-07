import React from "react";
import Playlist from "./Playlist";
import { navigate } from "@reach/router";

const ENDPOINT = "http://localhost:8888/playlists";
const FETCH_OPTIONS = {
  credentials: "include"
};

const fetchData = async () => {
  let response = await fetch(ENDPOINT, FETCH_OPTIONS);
  if (response.status === 401) {
    navigate("/login");
    return;
  }
  let playlistsData = await response.json();

  return playlistsData;
};

class Playlists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      playlists: []
    };
  }

  async componentDidMount() {
    let playlists = await fetchData();

    this.setState({
      playlists,
      loading: false
    });
  }

  render() {
    const { loading, playlists } = this.state;
    if (!!loading) {
      return (
        <div>
          <h1>Playlist Editor</h1>
          <div> Loading... </div>
        </div>
      );
    }

    return (
      <div>
        {playlists &&
          playlists.map(playlist => {
            return (
              <Playlist
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
    );
  }
}

export default Playlists;
