import React from "react";

const ENDPOINT = "http://localhost:8888/playlists/";
const FETCH_OPTIONS = {
  credentials: "include"
};

const fetchData = async () => {
  let response = await fetch(ENDPOINT, FETCH_OPTIONS);
  let playlistsData = await response.json();

  return playlistsData;
};
class PlaylistProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    async componentDidMount() {
        let playlist = await fetchData();
    }

    render() {
        const { id } = this.props;

        return (
            <div className="profile-page">
                <h1> This is a playlist details page </h1>
                <p> Name of playlist: {id} </p>
            </div>
        )
    }
};

export default PlaylistProfile;
