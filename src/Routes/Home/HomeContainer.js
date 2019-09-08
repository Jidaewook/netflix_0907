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
        const { nowPlaying, upComing, popular, error, loading} = this.state;
        return(
            <HomePresenter 
                nowPlaying={nowPlaying}
                upComing={upComing}
                popular={popular}
                error={error}
                loading={loading}
            />
        );
    };
} 