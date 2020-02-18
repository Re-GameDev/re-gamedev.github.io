import React from 'react';
import Page from '../Page.js';
import {SignUpLink} from '../links.js';

export default function FourOhFourPage() {
  return (
    <Page>
      <h1>Yo Mario, I Think Your Princess Is In Another Castle?</h1>
      <p>
        404 Page Not Found. Maybe you want to <SignUpLink>sign up</SignUpLink>?
      </p>
    </Page>
  );
}
