import React from "react";
import { Redirect } from "@reach/router";
import * as Cookies from "js-cookie";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: Cookies.get("spotify-ac-key")
    };
  }

  render() {
    if (this.state.isLoggedIn) {
      return <Redirect noThrow from="" to="/playlists" />;
    } else {
      return <Redirect noThrow from="" to="/login" />;
    }
  }
}

export default Home;
