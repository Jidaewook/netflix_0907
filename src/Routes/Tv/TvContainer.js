import React, {Component} from 'react';
import TvPresenter from "./TvPresenter";

export default class extends Component{
    state = {
        topRated: null,
        popular: null,
        airingToday: null,
        error: null,
        loading: true
    };

    render (){
        const {topRated, popular, airingToday, error, loading} = this.state;
        return(
            <TvPresenter />
        );
    }
}