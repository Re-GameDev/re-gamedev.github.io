import React from 'react';
import Page from '../Page.js';
import SponsorsBanner from '../sponsors/SponsorsBanner.js';
import redDevs from './red devs.jpg';
import {EVENT_FULL_NAME} from '../datas';
import './HomePage.css';

export default function HomePage() {
  return (
    <Page className="HomePage">
      <SponsorsBanner />

      <article>
        <h1>
          Welcome to the first {EVENT_FULL_NAME}!
        </h1>

        <p>
          This is a game creation event taking place at the DigiPen campus in Redmond, WA, on March 13th, 2020. If you're not familiar with game jams, these are fun events in which hobbyist, student, and professional game developers alike get together for a weekend to create awesome video games together.
        </p>

        <p>
          If you are a programmer, artist, sound designer, writer, gamer enthusiast, or have nothing to do on March 13th, you’re more than welcome to join us!
        </p>
      
        <img src={redDevs} />


      </article>

    </Page>
  );
}
