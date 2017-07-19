import React, { Component } from 'react';
import { Navigator } from 'react-native-deprecated-custom-components'

import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import TaskList from '../components/TaskList';
import FetchPage from '../components/FetchPage';

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
        
        if (router.name == 'TaskList') {
            return (
                <TaskList
                    navigator={navigator}
                    {...router.passProps} 
                    title='My Task list'/>

            );
        }

        if (router.name == 'HTTP') {
            return (
                <FetchPage
                    navigator={navigator}
                    {...router.passProps} 
                    title='Fetch'/>

            );
        }
        
    }
}