import React from 'react';
import Page from '../Page.js';
import {SignUpLink} from '../links.js';
import {EVENT_DATES, EVENT_HOST} from '../datas.js';

export default function AboutPage() {
  return (
    <Page>
      <article>
        <h1>
          About the Red Game Jam
        </h1>

        <dl>
          <dt>
            When:
          </dt>
          <dd>
            {EVENT_DATES}
          </dd>
          <dt>
            Where:
          </dt>
          <dd>
            <EVENT_HOST.AddressLink>
              <div>
                {EVENT_HOST.fullName}
              </div>
              <div>
                {EVENT_HOST.address}
              </div>
            </EVENT_HOST.AddressLink>
          </dd>
        </dl>

        <p>
          The Red Game Jam is a game creation event taking place in Redmond, WA,
          at the DigiPen campus, on March 13th, 2020. If you're not familiar with
          game jams, these are fun events in which hobbyist, student, and professional
          game developers alike get together for a weekend to create awesome video
          games together.
        </p>

        <p>
          <SignUpLink />
        </p>

      </article>
    </Page>
  );
}
