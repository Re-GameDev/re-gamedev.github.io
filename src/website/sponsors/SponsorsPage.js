import React from 'react';
import Page from '../Page.js';
import sponsorDatas from './sponsorDatas.js';
import {ContactUsLink} from '../links.js';
import './SponsorsPage.css';

function Sponsor({ sponsor }) {
  return (
    <article className="Sponsor">
      <h1>
        <sponsor.Link>
          {sponsor.fullName}
        </sponsor.Link>
      </h1>
      {sponsor.logo && (
        <img src={sponsor.logo} height="100" alt={sponsor.fullName} />
      )}
      {sponsor.blurb}
    </article>);
}

export default function SponsorsPage() {
  return (
    <Page className="SponsorsPage">
      <article>
        <h1>
          RED JAM Sponsors
        </h1>

        <p>
          We love our sponsors! Thank you for being part of this event with us.
        </p>

        <p>
          If you would like to be a sponsor, please <ContactUsLink>contact us</ContactUsLink>.
        </p>

        {sponsorDatas.map(sponsor => {
          return <Sponsor key={sponsor.name} sponsor={sponsor} />;
        })}
      </article>
    </Page>
  );
}
