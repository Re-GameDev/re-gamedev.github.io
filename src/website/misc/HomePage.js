import React from 'react';
import Page from '../Page.js';
import SponsorsBanner from '../sponsors/SponsorsBanner.js';
import redDevs from './red devs.jpg';
import './HomePage.css';

export default function HomePage() {
  return (
    <Page className="HomePage">
      <SponsorsBanner />

      <img src={redDevs} />
    </Page>
  );
}
