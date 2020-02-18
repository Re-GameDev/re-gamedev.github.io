import React from 'react';
import Page from '../Page.js';
import {
  EVENT_COST,
  EVENT_DATES,
  EVENT_HOST,
} from '../datas.js';
import {SignUpLink, EmailUsLink} from '../links.js';

import './FaqPage.css';

function FAQ({q, children}) {
  return (
    <div className="FAQ">
      <b>{q}</b>
      <div className="FAQResponse">
        {children}
      </div>
    </div>
  );
}

export default function FaqPage() {
  return (
    <Page className="FaqPage">
      <article>
        <h1>
          Frequently Asked Questions
        </h1>

        <FAQ q="Is there an entry fee?">
          <p>
            The entry fee is {EVENT_COST}.
          </p>
        </FAQ>

        <FAQ q="When is the RED JAM?">
          <p>
            {EVENT_DATES}. This includes overnights.
          </p>
        </FAQ>

        <FAQ q="Will food be provided?">
          <p>
            TBD
          </p>
        </FAQ>

        <FAQ q="Where will this be?">
          <p>
            Our gracious host is <EVENT_HOST.Link>{EVENT_HOST.fullName}</EVENT_HOST.Link>:
          </p>

          <p>
            <EVENT_HOST.AddressLink />
          </p>
        </FAQ>

        <FAQ q="What do I need to bring?">
          <p>
            Bring:
          </p>
          <ul>
            <li>
              Your computer
            </li>
            <li>
              Your friends
            </li>
            <li>
              If you're planning on staying overnight, blankets and changes
              of clothing
            </li>
          </ul>
        </FAQ>

        <FAQ q="I'd like to attend. Where do I sign up?">
          <p>
            <SignUpLink>Sign up here!</SignUpLink>
          </p>
        </FAQ>

        <FAQ q="I'd like to help sponsor RED JAM. Who do I contact?">
          <p>
            <EmailUsLink>Email us to sponsor!</EmailUsLink>
          </p>
        </FAQ>

        <FAQ q="I'd like to volunteer to be a worker at RED JAM. Who do I contact?">
          <p>
            <EmailUsLink>Email us to volunteer!</EmailUsLink>
          </p>
        </FAQ>

        <FAQ q="My question isn't answered here? What do I do???">
          <p>
            <EmailUsLink>Please email us with your question!</EmailUsLink>
          </p>
        </FAQ>

      </article>
    </Page>
  );
}
