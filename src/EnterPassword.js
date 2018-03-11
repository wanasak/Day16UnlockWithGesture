import React, { Component } from "react";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";
import PasswordGesture from "react-native-gesture-password";

class EnterPassword extends Component {
    static propTypes = {
        password: PropTypes.string.isRequired,
        enterPassword: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            password: this.props.password,
            message: "Unlock with your password",
            status: "normal"
        };
    }

    _onEnd(password) {
        if (password == this.state.password) {
            this.setState({
                status: "right",
                message: "Password is right, success."
            });
            this.props.enterPassword();
        } else {
            this.setState({
                status: "wrong",
                message: "Password is wrong, try again."
            });
        }
    }

    _onStart() {
        this.setState({
            status: "normal",
            message: "Unlock your password."
        });
    }

    render() {
        return (
            <PasswordGesture
                ref="pg"
                status={this.state.status}
                message={this.state.message}
                onStart={() => this._onStart()}
                onEnd={password => this._onEnd(password)}
                allowCross
            />
        );
    }
}

export default EnterPassword;

const styles = StyleSheet.create({
    setPg: {}
});
