import React from "react";

class PlaylistProfile extends React.Component {
    constructor(props) {
        super(props);
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
