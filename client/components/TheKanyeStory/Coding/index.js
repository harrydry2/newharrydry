import React, { Component } from "react";
import Image from "../../Image/index";
// import "./style.sass";

class Coding extends Component {
  render() {
    return (
      <div className="text">
        <h1>Coding</h1>
        <p>
          I wake up and head straight to the lab. It’s time to build a dating
          site. First things first I scout other dating sites just looking for
          something I can rip off. The whole Tinder / Bumble swiping thing is a
          non starter. It’s too complex. Soon I find a Jewish Dating site called
          J Date which looks quite promising. They are displaying all user
          profiles on one long infinite scroll page. A few months earlier I did
          Wes Bos’ “Learn Node” course where he does a similar thing with
          restaurants. I start merging the structure of J Date with some lessons
          from Wes’ course and I'm up and running.
        </p>
        <p>
          At this point there isn’t much too tell you. There’s no secret
          ingredient. Just long days in the lab laying bricks. It felt like I
          was doing my dissertation all over again, except this time I actually
          care.
        </p>
        <p>
          10 months ago I hadn’t wrote a line of code before and I thought it
          was too hard. And a week into Yeezy Dating it’s still hard. Webpack is
          fucking me and I don’t know how to save geoJSON data. Boo-hoo. Nobody
          cares. I don’t care. Find a way. Figure it out. Everyone else figured
          it out. I write out I AM HARRY DRY on a sheet and I start battling
          through problems, coding like Diego Costa plays football. No
          technique, No <span className="italic">Barcelona academy</span> I'm
          charging from obstacle to obstacle. And when I get stuck, I figure it
          out. And when I can’t figure it out I ask for help. And that happens a
          lot ...
        </p>
        <div className="full">
          <video
            src="https://s3.amazonaws.com/harrydry/diego.mp4"
            playsInline
            preload="none"
            className="full__video"
            poster="https://s3.amazonaws.com/harrydry/degoposter.png"
            ref={e => {
              this.video1 = e;
            }}
            onClick={() =>
              this.video1.paused ? this.video1.play() : this.video1.pause()
            }
          />
        </div>
        <Image img={"false"} alt={"Coding Questions"} />
        <p>
          It’s 7:40am the next day and I get a text from my pal saying, “Tune
          into BBC Radio 1. They’re talking about Yeezy Dating right now and
          they want to speak to you”. Guess where I am? On a two hour train from
          Chichester to London for another day of meetings. I try and dial into
          Radio 1 but there’s no signal on the train. I’m cooped up on this
          train and I’m stressing out. The database has over 10,000 emails now.
          I’ve told the media the dating site is “Coming This March”, its now
          17th March and I haven’t wrote a line of code. And to top it all off,
          I’ve got no idea how to make a dating site. I can’t go on like this. I
          get back that evening, call my boss tell him that I’m going to be out
          of action for a month. He wishes me luck and that’s that. I'm a free
          man.
        </p>
      </div>
    );
  }
}

export default Coding;
