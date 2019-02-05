import React from "react";
import * as Cookies from 'js-cookie';

const ENDPOINT = "http://localhost:8888/appLogin";

const fetchLogin = async () => {
  let response = await fetch(ENDPOINT);
  let loginData = await response.json();

  return loginData;
};

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loginUrl: ''
        }
    }

    async componentDidMount() {
        let { stateKey, stateValue, loginUrl } = await fetchLogin();
        Cookies.set(stateKey, stateValue);

        this.setState({
            stateKey,
            stateValue,
            loginUrl
        })
    }

    render() {
        const { loginUrl } = this.state;
        return (
            <div className="login-page">
                <h1>Login</h1>
                {!!loginUrl.length && <a href={loginUrl}>Redirect to Spotify</a>}
            </div>
        )
    }
}

export default Login