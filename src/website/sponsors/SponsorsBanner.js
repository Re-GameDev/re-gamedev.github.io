import React from 'react';
import sponsorDatas from './sponsorDatas.js';
import './SponsorsBanner.css';

function SponsorComponent({ sponsor, children }) {
  return (
    <li className="Sponsor">
      <sponsor.Link>
        {sponsor.logo ? (
          <img src={sponsor.logo} width="200" />
        ) : (
          sponsor.name
        )}
      </sponsor.Link>
    </li>
  );
}

export default function SponsorsBanner() {
  return (
    <aside className="SponsorsBanner">
      <h1>
        A Big Thanks to our Sponsors!
      </h1>
      <ul>
        {sponsorDatas.map((data) => <SponsorComponent key={data.name} sponsor={data} />)}
      </ul>
    </aside>
  );
}
