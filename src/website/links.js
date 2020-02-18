import React from "react";

export function SignUpLink({ children = "Sign Up for Red Jam" }) {
  return (
    <a href="http://google.com" target="signup">
      {children}
    </a>
  );
}

export function EmailUsLink({ children = "Email the Red Jam Team" }) {
  return (
    <a href="mailto:contact@regamedev.com" target="signup">
      {children}
    </a>
  );
}

export function ContactUsLink({ children = "Contact the Red Jam Team" }) {
  return (<EmailUsLink>{children}</EmailUsLink>);
}
