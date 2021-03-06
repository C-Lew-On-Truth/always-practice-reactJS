import React from 'react';
import '../styles/video-styles.css';
import ClubJams from '../videos/club-jammin.mp4';
import SpyVid from '../videos/SPOR_original.mp4';

class VideoPlayer extends React.Component {
    constructor() {
        super();
        this.state = {
            videoPlayer: null,
            videoPlayer2: null,
        }
    }

    onReady = (vidEvent) => {
        this.setState(
            {
                videoPlayer: vidEvent
            }
        )
    }

    onReady2 = (vidEvent2) => {
        this.setState(
            {
                videoPlayer2: vidEvent2
            }
        )
    }

    videoPlays = () => {  
        this.state.videoPlayer2.pause()
    };

    videoPlays2 = () => { 
        this.state.videoPlayer.pause()
    };

    render() {

        return (
            <div className="videoHolder">

                <div> 
                <video   
                    ref={this.onReady}
                    onPlay={this.videoPlays}
                    controls
                >
                    <source src={SpyVid} />
                </video>
                </div>

                <div>
                <video   
                    ref={this.onReady2}
                    onPlay={this.videoPlays2}
                    controls
                >
                    <source src={ClubJams} />
                </video>
                </div>

            </div>
        )
    }
}

export default VideoPlayer


//Other way to use refs with videos
/*
class VideoTest extends React.Component {
    constructor(props) {
        super(props)
        this.vid1 = React.createRef()
        this.vid2 = React.createRef()
        this.vid3 = React.createRef()
    }


    onlyVid1 = () => {
        if (this.vid1.current) {
            this.vid2.current.pause() || this.vid3.current.pause()
        }
    }

    onlyVid2 = () => {
        if (this.vid2.current) {
            this.vid1.current.pause() || this.vid3.current.pause()
        }
    }

    onlyVid3 = () => {
        if (this.vid3.current) {
            this.vid1.current.pause() || this.vid2.current.pause()
        }
    }

    render() {
        return (
            <div className="carousel">
            
                    <div>
                     
                        <video
                            onPlay={this.onlyVid1}
                            ref={this.vid1}
                            src={Vid1}
                            controls
                        />
                    </div>

                    <div>
                        <video
                            onPlay={this.onlyVid2}
                            ref={this.vid2}
                            src={Vid2}
                            controls
                        />
                    </div>

                    <div>
                        <video
                            onPlay={this.onlyVid3}
                            ref={this.vid3}
                            src={Vid3}
                            controls
                        />
                    </div>
         
            </div>

        )
    }
}
*/