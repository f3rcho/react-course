import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
// import { Redirect } from 'react-router-dom'
import NotFound from '../containers/NotFound';
import '../assets/styles/components/Player.scss';

const Player = props => {
    const { id } = props.match.params
    const hasPlaying = Object.keys(props.playing).length > 0
    console.log(hasPlaying);
    console.log(id);

    //transmimt the action effectt using hooks
    useEffect(()=> {
        props.getVideoSource(id);
    }, []);

    return hasPlaying ? (
        <div className="Player">
            <video controls autoPlay>
                <source src={props.playing.source} type="video/mp4"/>
            </video>
            <div className="Player-back">
                <button type="button" onClick={() => props.history.goBack()} >
                    Back
                </button>
            </div>
        </div>
    ) : <NotFound />
}
const mapStateToProps = state => {
    return {
        playing: state.playing,
    }
}

const mapDisPatchToProps = {
    getVideoSource,
}
export default connect(mapStateToProps, mapDisPatchToProps)(Player);