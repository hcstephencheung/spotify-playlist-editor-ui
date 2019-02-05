import React from "react";
import Redirect from "@reach/router";
import * as Cookies from "js-cookie";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: Cookies.get('spotify-ac-key')
        }
    }

    render() {
        if (this.state.isLoggedIn) {
            return <Redirect to="/playlists" />
        } else {
            return <Redirect to="/login" />
        }
    }
}

export default Home;