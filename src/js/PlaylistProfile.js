import React from "react";

const ENDPOINT = "http://localhost:8888/playlist/";
const FETCH_OPTIONS = {
  credentials: "include"
};

const fetchData = async trackId => {
  let responseData = await fetch(ENDPOINT + trackId, FETCH_OPTIONS);
  let playlistData = await responseData.json();
  console.log(playlistData);
  return playlistData;
};
class PlaylistProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      tracks: []
    };
  }

  async componentDidMount() {
    let playlist = await fetchData(this.props.id);

    this.setState({
      tracks: playlist
    });
  }

  render() {
    const { id } = this.props;
    const { tracks } = this.state;

    return (
      <div className="profile-page">
        <h1> This is a playlist details page </h1>
        <p> Name of playlist: {id} </p>
        {tracks.length &&
          tracks.map(trackItem => {
            const { track } = trackItem;
            const { name } = track;
            return (
              <div>
                <h3>{track.name}</h3>
              </div>
            );
          })}
      </div>
    );
  }
}

export default PlaylistProfile;
