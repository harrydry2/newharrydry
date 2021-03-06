import React, { Component } from "react";
import Image from "../../Image";
import Video from "../../Video";
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
          non starter. It’s too complex. I find a Jewish Dating site called J
          Date which looks promising. They are displaying all user profiles on
          one long infinite scroll page. A few months earlier I did Wes Bos’
          “Learn Node” course where he does a similar thing with restaurants. I
          start merging J Date with some lessons from Wes’ course and I'm up and
          running.
        </p>
        <Image img={"wesbos"} alt={"Connecting Things"} />
        <p>
          At this point there isn’t much too tell you. There’s no secret
          ingredient. Just long days in the lab laying bricks. It's like I'm
          doing my dissertation all over again. Except this time I actually
          care.
        </p>
        <p>
          10 months ago I hadn’t wrote a line of code before and I thought it
          was too hard. One week into Yeezy Dating it’s still too hard. Webpack
          is fucking me and I don’t know how to save geoJSON data. Boo-hoo.
          Nobody cares. I don’t care. Find a way. Figure it out. Everyone else
          figured it out.
        </p>
        <p>
          I write I AM HARRY DRY on a sheet of paper. I buy some blutac and pin
          it to my wall. Every time I doubt myself I look at the words and
          snarl. No buddy buddy shit. I'm battling now. Coding like Diego Costa
          plays football. No technique. No{" "}
          <span className="italic">Barcelona academy</span>. Charging from
          obstacle to obstacle.
        </p>
        <Video poster="degoposter.png" video="diego" />
        <p>
          When I get stuck, I figure it out. I'm coding like the end is near.
          I'm so fucking clueless. Problem after Problem. Forum after forum. I'm
          the most hatest man on Stack Overflow. And I'm not going anywhere. I'm
          United in 99". Corner after corner after corner. Keep believing. Find
          a way.
        </p>
        <Image img={"false"} alt={"Coding Questions"} />
        <p />
      </div>
    );
  }
}

export default Coding;
