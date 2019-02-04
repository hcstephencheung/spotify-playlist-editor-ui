import React from "react";
import { Link } from "@reach/router";
class Playlists extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        const { name, id } = this.props;
        return (
            <Link to={`/playlist/${id}`} className="playlists">
                <h1>Playlist Name: {name}</h1>
                <p>Playlist id: {id}</p>
            </Link>
        );
    }
}

export default Playlists;
