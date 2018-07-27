import React, { Component } from "react";
import Image from "../../Image";
import Video from "../../Video";
import InstagramEmbed from "react-instagram-embed";

class Launch extends Component {
  render() {
    return (
      <div className="text">
        <h1>Launch</h1>
        <p>
          22 days fly by and it’s April 11. I’m a couple of weeks late, but
          that’s ok. Today is the day. I ship the final feature from the lab at
          3pm and post on Instagram to build some hype.
        </p>
        <div className="gramContainer">
          <InstagramEmbed
            url="https://instagr.am/p/BhbtR9MgNeJ/"
            maxWidth={320}
            hideCaption={true}
            containerTagName="div"
            protocol=""
            injectScript
          />
        </div>
        <p>
          I cycle to town and walk into Vodafone. I tell the store manager I’m
          “just browsing” whilst I test the site on all their different devices.
          iPhone’s are zooming in on my input fields and it’s breaking my CSS.
          Fuck. I pitch up in Starbucks next door, grab a coissant, and start
          googling. Turns out my font size needs to be 16px on iOS to stop auto
          zoom. I head back into Vodafone, “more browsing” I tell the store
          manager, and the problems solved. Happy Days.
        </p>
        <p>
          The Telegram chat, still has a buzz about it. Several hundred messages
          a day. They’re like my army of ultra fans. My plan is to launch with
          them first to test the site works. I’m back at home, dotting I’s
          crossing T’s. Suddenly I have 10 mentions in Telegram. The ultras have
          found the site and have started making profiles.
        </p>
        <Image img={"launch"} alt={"Launch"} />
        <p>
          10 profiles are up. Now 20. Now 30. Shit. It’s happening. Beautiful
          photos popping up on my screen. This isn’t a dream any more. Real
          people are on the site. Real people are matching each other. Real
          people are messaging. And I’m beaming. It’s working. Look at me go. I
          made this. Fuck all of you. I made this.
        </p>
        <p>
          I post on Instagram saying that Yeezy.Dating is open for business.
          Suddenly 200 people flood to the site. Fire up the quattro.
        </p>
        <p>
          Legend says that the fisherman on shore only sees a tsunami a couple
          of seconds before it hits. Capow! Left, right, center, profile images
          are disappearing. 5 pictures vanishing every second. I refresh the
          page, images disappearing everywhere. We’re sinking like the Mary
          Rose. Time slows down. Panic takes over. I can’t think straight. 3
          minutes later the site is stripped bare. 250 profiles. No images. I
          load up Heroku. 6,700 critical errors. My Dad potters in from the
          kitchen to see how the big launch is going. Not great I tell him.
        </p>
        <Video poster="degoposter.png" video="blanks" />
        <p>
          I woke up Steve Jobs. I'm ending the day Steve Harvey. The sites
          properly crashed now. I’m trying to put out fires everywhere but it’s
          all too much. I can’t do this anymore. I apologise to my followers on
          Instagram. I apologise to the ultras on Telegram. And collapse into
          bed. For the first time I'm questioning myself. I’m feeling self
          doubt. Maybe the little boy from the little town, who rides his little
          bike to the little library can’t do it after all.
        </p>
        <Image img={"apologies"} alt={"Apologies"} />
        <p />
      </div>
    );
  }
}

export default Launch;
