import React, { Component } from "react";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";
import PasswordGesture from "react-native-gesture-password";

class SetPassword extends Component {
    static propTypes = {
        password: PropTypes.string.isRequired,
        setPassword: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            password: this.props.password,
            message: "Please set your password",
            status: "normal"
        };
    }

    _onEnd(password) {
        if (this.state.password === "") {
            this.state.password = password;
            this.setState({
                status: "normal",
                message: "Please input your password secondly."
            });
        } else {
            if (password === this.state.password) {
                this.setState({
                    status: "right",
                    message: "Your password is set"
                });
                this.props.setPassword(password);
            } else {
                this.setState({
                    status: "wrong",
                    message: "Not the same, try again."
                });
            }
        }
    }

    _onStart() {
        if (this.state.password === "") {
            this.setState({
                message: "Please set your password."
            });
        } else {
            this.setState({
                message: "Please input your password secondly."
            });
        }
    }

    render() {
        return (
            <PasswordGesture
                style={styles.setPg}
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

export default SetPassword;

const styles = StyleSheet.create({
    setPg: {
        backgroundColor: "#012642"
    }
});
