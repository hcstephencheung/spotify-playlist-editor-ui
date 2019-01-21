import React from "react";
export const Playlists = props => {
    return (
        <div>
            <h1>Playlist Name: {props.name}</h1>
            <p>Number of songss: {props.total}</p>
        </div>
    );
};
