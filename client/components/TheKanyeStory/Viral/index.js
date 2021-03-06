import React, { Component } from "react";
import Image from "../../Image";
import "./style.sass";

class Viral extends Component {
  render() {
    return (
      <div className="text">
        <h1>How I went viral</h1>
        <p>
          Going viral is my validation. If I can't take this viral, there's not
          enough hype to justify building it.
        </p>
        <p>
          I wake up early and drive to the Chichester library. Today is the day
          i get shit done. It feels like the day before my wedding day. I want
          to set everything up to go viral and so I can press play tomorrow.
        </p>
        <p>
          I start building my journalist list. I don’t really know what i’m
          doing so I just start googling for “Culture Blogs” and jotting down
          names: NME, Slate Magazine, Hypebeast, MTV
        </p>
        <p>
          Each blog I visit I’m looking for two emails address’. Firstly there’s
          the standard press enquiry It’s usually something like
          <span className="italic"> tips@hypebeast.com</span>. Secondly I’m
          looking for “real people” . Real writers who I can email. I search for
          the culture / entertainment / music editor for the each blog and write
          down their name. Surprisingly 90% of blogs don’t give out their own
          writers email, so there’s still some digging to do. I track down each
          writers social media and look there and if that fails I’ll go to this
          website called{" "}
          <a href="https://hunter.io/" target="_blank" className="link">
            hunter.io
          </a>. You type the name of any company and it will tell you the
          correct email format which that company uses. For example if you
          search complex.com it will tell you that the email format is
          <span className="italic"> (first).(last)@complex.com</span>.
        </p>
        <Image img={"hunter"} alt={"Hunter"} />
        <p>
          I do this for a couple of hours but progress is slow. I’ve only
          managed about 20 names. There’s got to be a faster way. So I start
          googling again and 10 minutes later I find what I want: “Media and
          Influencer Targeting Software”. I compare the different products but
          the prices are ridicoulous: $299 / mo. I find this one called
          Buzzstream Discovery which comes with a free month trial. All I needs
          the free month so I sign up and cancel.
        </p>
        <p>
          How Buzzstream works is you enter a search term and it spits out names
          of all the journalists who have wrote stories about the search term.
          So I enter Kanye West and filter “within the last 30 days” and
          Buzzstream gives me a list of all 440 influencers who have written
          stories about Kanye West over the last month. These influencers are my
          perfect audience. It’s their job to pump out, simple, digestable
          stories about Kanye West and I’m about to spoon feed them a classic. I
          make it through the top 200 names on Buzzstream and shove the names in
          my excel document. For every “real” email I’ll also jot down the
          generic “press enquiry” email.
        </p>
        <Image img={"discovery"} alt={"Buzzstream Discovery"} />
        <p>
          At close of play I’m in good shape. 147 “generic” emails and 190 “real
          person” emails.
        </p>
        <p>
          I change my username on Instagram from @harrydry to @yeezydating and
          delete all my old posts. I upload a solitary picture with the caption
          “Yeezy.Dating — Coming this March”.
        </p>
        <Image img={"excelgram"} alt={"Excel Instagram"} />
        <p>
          I make a simple “Coming Soon” landing page with an email box and put
          it on the internet. It doesn’t look great but it does the job. I add
          the line “Taylor Swift fans are banned from this website 🐍. It’s a
          platonic gesture but it gives the media another clickbait headline to
          have some fun with. I’m trying to make their headline as easy as
          possible to write. It's another hook on my fishing line.
        </p>
        <p>
          I post on the Kanye West subreddit and the post gets 200 upvotes
          within the first hour. This gives me ammo to fire at the press with.
          I’m not longer just some guy emailing trying to shill his dating app.
          Reddit is my social proof that this is a movement. I’ve got the
          backing of the people.
        </p>
        <Image img={"test6"} alt={"Landing Page"} />
        <p>
          I write the following email: “Hey, There’s a new dating site for Kanye
          West fans which is trending majorly on reddit at the minute. Thought
          you might want to check it out ...” And bulk send to the 187 blackhole
          emails I've collected using Email Octopus. With my “real person”
          emails I take more care. I write two different templates. One for
          “clickbait” blogs and one for “thoughtful” blogs and start sending
          manually, customising to fit to the blogs feel.
        </p>
        <p>
          The next 10 hours are just brute force. I wack on my headphones, play
          through Kanye’s whole discography and sip coffee, whilst I send email
          after email after email after email after email. Go to sleep. Wake up
          and send email after email after email, then I’m back commuting into
          London for a days work.
        </p>
        <p>
          My phone rings during a meeting. I turn it to silent. It rings again.
          I turn it off. As soon as I get out of the meeting I check the
          database. 2100 email address’. My heart’s beating fast. I refresh the
          database. Now 2105 emails. I type Kanye West’s name into google. And
          it’s everywhere. I recognise most journalists names from my email
          list. I check analytics. There’s 150 people on my the site. I check my
          inbox. 45 unread. Lunch break is over and I’m being called back in for
          another meeting. Fuck being employed.
        </p>
        <Image img={"newmesh"} alt={"Yeezy Dating Press"} />
        <p>
          It’s 10pm when I arrive back from work. The press momentum is still
          rolling on. It feels good to know that my big plan worked. 25 news
          anchors coast to coast are discussing the implications of Yeezy.Dating
          and I’m just in my bedroom, in my pyjamas with an old Mac Book pro
          making the whole thing up as I go along.
        </p>
        <div className="full">
          <video
            src="https://s3.amazonaws.com/harrydry/abcVideo.mp4"
            playsInline
            preload="none"
            className="full__video"
            poster="https://s3.amazonaws.com/harrydry/poster2.png"
            ref={e => {
              this.video1 = e;
            }}
            onClick={() =>
              this.video1.paused ? this.video1.play() : this.video1.pause()
            }
          />
        </div>
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
        <div className="half">
          <img
            src="https://s3.amazonaws.com/harrydry/whatsapp.png"
            alt="Whats App"
            className="half__img"
          />
          <video
            src="https://s3.amazonaws.com/harrydry/radio1.mp4"
            playsInline
            preload="none"
            className="half__video"
            poster="https://s3.amazonaws.com/harrydry/poster1.png"
            ref={e => {
              this.video2 = e;
            }}
            onClick={() =>
              this.video2.paused ? this.video2.play() : this.video2.pause()
            }
          />
        </div>
      </div>
    );
  }
}

export default Viral;
