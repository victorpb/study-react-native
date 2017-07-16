import React, { Component } from 'react';
import { Navigator } from 'react-native-deprecated-custom-components'

import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';

export default class InitRouter extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Navigator
                initialRoute={{ name: 'Home', title: 'Home Page' }}
                renderScene = {this.renderScene}
            />
        );
    }

    renderScene(router, navigator) {
        if (router.name == 'Home') {
            return (
                <HomePage
                    navigator={navigator} 
                    {...router.passProps}
                    title='Home'/>

            );
        }

        if (router.name == 'About') {
            return (
                <AboutPage
                    navigator={navigator}
                    {...router.passProps} 
                    title='About'/>

            );
        }
    }
}