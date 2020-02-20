import React from 'react';
import Page from '../Page.js';
import {
  EVENT_COST,
  EVENT_DATES,
  EVENT_HOST,
} from '../datas.js';
import {SignUpLink, EmailUsLink, VolunteerLink} from '../links.js';

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
            The entry fee is {EVENT_COST}. This fee covers the cost of snacks and coffee.
          </p>

          <p>
            You can optionally sign up for meals for an additional $30. This will cover lunch and dinner on Saturday, and breakfast and lunch on Sunday. For more information, check the schedule.
          </p>
        </FAQ>

        <FAQ q="When is the RED JAM?">
          <p>
            {EVENT_DATES}. This includes an overnight from Saturday to Sunday (but not Friday to Saturday).
          </p>
        </FAQ>

        <FAQ q="Will food be provided?">
          <p>
            You can optionally sign up for meals for an additional $30. This will cover lunch and dinner on Saturday, and breakfast and lunch on Sunday. For more information, check the schedule.
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

        <FAQ q="I'm under 18. Can I still participate?">
          <p>
            Yes, but participants 17 years of age or younger must be accompanied by an adult parent or guardian. The parent or guardian will also count as a participant
              and will need to pay the applicable fees.
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

        <FAQ q="I'd like to volunteer at RED JAM. What do I do?">
          <p>
            <VolunteerLink />
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
