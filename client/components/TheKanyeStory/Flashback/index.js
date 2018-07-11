import React, { Component } from "react";
import Image from "../../Image/index";

class Flashback extends Component {
  render() {
    return (
      <div className="text">
        <h1>Flashback</h1>
        <p>
          Flashback eight months to my first ever gig as an Indie Maker. A
          friend and I started a company selling canvas prints. It's the
          familiar novice story:
        </p>
        <li>1) Spend months in a hole perfecting and perfecting a website</li>
        <li>2) Never speak to any potential customers</li>
        <li>3) Never check to see if anyone actually wants the product</li>
        <li>
          4) Realise you have no idea who your customer is or where they hang
          out
        </li>
        <li>5) Realise you aren't solving any real problems</li>
        <li>
          7) Savour this moment. Savour the time when no one cared. Because it
          won't always be like this
        </li>
        <Image img={"140canvas"} alt={"140 Canvas"} />
        <p>
          So, what went wrong? Well, Marc Kholbrugge summarised the problem with
          my approach far better than I ever could.
        </p>
        <Image img={"marck"} alt={"WIP Chat"} />
        <p>
          It sounds so simple when you read it but nearly every Indie Maker
          makes this mistake. This time around it’s going to be different. I'm
          starting to learn. The old me would have build a whole dating site,
          crossed my fingers and hoped. But the new me is sharper, more
          thoughtful. I need to figure out if there's demand for this thing. and
          then I'll make it. I need to test the waters first.
        </p>
      </div>
    );
  }
}

export default Flashback;
