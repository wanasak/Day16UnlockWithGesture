import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import SetPassword from "./src/SetPassword";
import EnterPassword from "./src/EnterPassword";

import Util from "./src/utils";

export default class extends Component {
    constructor() {
        super();
        this.state = {
            password: "",
            hasSet: false,
            enterApp: false
        };
    }

    _setPassword(password) {
        this.setState({
            password: password,
            hasSet: true
        });
    }

    _enterPassword() {
        this.setState({
            enterApp: true
        });
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.hasSet ? (
                    <View />
                ) : (
                    <SetPassword
                        setPassword={password => this._setPassword(password)}
                        password={this.state.password}
                    />
                )}
                {this.state.hasSet && !this.state.enterApp ? (
                    <EnterPassword
                        enterPassword={() => this._enterPassword()}
                        password={this.state.password}
                    />
                ) : (
                    <View />
                )}
                {this.state.enterApp ? (
                    <View style={styles.app}>
                        <Text style={styles.appText}>You are in the app!</Text>
                    </View>
                ) : (
                    <View />
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: Util.size.width,
        height: Util.size.height,
        backgroundColor: "transparent"
    },
    app: {
        backgroundColor: "#012642",
        height: Util.size.height,
        width: Util.size.width,
        alignItems: "center",
        justifyContent: "center"
    },
    appText: {
        color: "#fff",
        fontSize: 25
    }
});
