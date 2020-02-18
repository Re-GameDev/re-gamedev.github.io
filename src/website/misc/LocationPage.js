import React from 'react';
import Page from '../Page.js';
import {EVENT_HOST} from '../datas.js';

export default function LocationPage() {
  return (
    <Page>

      <EVENT_HOST.AddressLink />

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.773529027132!2d-122.15031499999998!3d47.688818000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54900d5c18080447%3A0x4551538696d51d8e!2s9931%20Willows%20Rd%2C%20Redmond%2C%20WA%2098052!5e0!3m2!1sen!2sus!4v1582066918077!5m2!1sen!2sus" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen=""></iframe>

    </Page>
  );
}
