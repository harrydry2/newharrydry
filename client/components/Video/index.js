import React, { Component } from "react";
import "./style.sass";

class Video extends Component {
  render() {
    const { video, poster } = this.props;
    return (
      <div className="full">
        <video
          src={`https://s3.amazonaws.com/harrydry/${video}.mp4`}
          playsInline
          preload="none"
          className="full__video"
          poster={`https://s3.amazonaws.com/harrydry/${poster}`}
          ref={e => {
            this.video1 = e;
          }}
          onClick={() =>
            this.video1.paused ? this.video1.play() : this.video1.pause()
          }
        />
      </div>
    );
  }
}

export default Video;
