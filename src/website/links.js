import React from "react";
import {EVENT_NAME, EVENT_EMAIL, EVENT_SIGNUP_URL, VOLUNTEER_SIGNUP_URL} from './datas.js';

export function SignUpLink({ children = `Sign Up for ${EVENT_NAME}` }) {
  return (
    <a href={EVENT_SIGNUP_URL} target="signup">
      {children}
    </a>
  );
}

export function EmailUsLink({ children = `Email the ${EVENT_NAME} Team` }) {
  return (
    <a href={`mailto:${EVENT_EMAIL}`} target="emailus">
      {children}
    </a>
  );
}

export function ContactUsLink({ children = `Contact the ${EVENT_NAME} Team` }) {
  return (<EmailUsLink>{children}</EmailUsLink>);
}

export function VolunteerLink({ children = `Apply to volunteer at ${EVENT_NAME}!` }) {
  return (
    <a href={VOLUNTEER_SIGNUP_URL} target="volunteerSignup">
      {children}
    </a>
  );
}