import React from "react";
import * as queryString from "query-string";
import * as Cookies from "js-cookie";
import { Redirect } from "@reach/router";

const ENDPOINT = "http://localhost:8888/appCallback";
const FETCH_OPTIONS = {
    credentials: "include"
  };

class Token extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            code: '',
            state: '',
            redirectReady: false
        }
    }

    async redirectWithAccess () {
        const queryParams = queryString.parse(this.props.location.search);
        const { code, state } = queryParams;

        let data = await fetch(ENDPOINT + `?code=${code}&state=${state}`, FETCH_OPTIONS);
        const { ac, acKey } = data;
        Cookies.set(acKey, ac);

        this.setState({
            redirectReady: true
        });
    }

    async componentDidMount() {
        this.redirectWithAccess();
    }

    render() {
        if (this.state.redirectReady) {
            return <Redirect to="/playlists" />
        } else {
            return (
                <div className="token-page">
                    <h1>Redirecting...</h1>
                </div>
            )
        }
        
    }
}

export default Token