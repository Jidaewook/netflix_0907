import React, {Component} from 'react';
import HomePresenter from "./HomePresenter";

export default class extends Component {
    state = {
        nowPlaying: null, 
        upComing: null,
        popular: null,
        error: null,
        loading: true
    };

    render() {
        const { nowPlayinh, upComing, popular, error, loading} = this.state;
        return(
            <HomePresenter />
        );
    };
} 