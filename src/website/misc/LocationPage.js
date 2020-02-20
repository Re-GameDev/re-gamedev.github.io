import React from 'react';
import Page from '../Page.js';
import {EVENT_HOST} from '../datas.js';

function Restaurant({ name, url, children }) {
  return (
    <section className="Restaurant">
      <h1>
        <a href={url} target="restaurants">{name}</a>
      </h1>
      {children}
    </section>
  );
}

export default function LocationPage() {
  return (
    <Page>

      <EVENT_HOST.AddressLink />

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.773529027132!2d-122.15031499999998!3d47.688818000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54900d5c18080447%3A0x4551538696d51d8e!2s9931%20Willows%20Rd%2C%20Redmond%2C%20WA%2098052!5e0!3m2!1sen!2sus!4v1582066918077!5m2!1sen!2sus"
        title={EVENT_HOST.fullName}
        width="600" height="450"
        frameBorder="0"
        style={{border:0}}
        allowFullScreen="true"
      ></iframe>

      <article>
        <h1>Nearby Restaurants</h1>

        <p>
          For an additional cost of $30, we will be providing several meals throughout the
          event (for details, please see the schedule). If you prefer to eat out nearby,
          there are a number of great restaurants in the area.
        </p>

        <Restaurant name="The Stone House Redmond" url="https://www.stonehouseredmond.co/">
          <p>
            Tucked away in a turn of the century bungalow in Downtown Redmond you will find The Stone House.   An old world gem serving creative twists on American foods influenced by Northwest Seasonal Ingredients.  Join us for some culinary extravagance in a casual and comforting environment designed to make you feel at home.
          </p>
        </Restaurant>

        <Restaurant name="Sages Restaurant" url="http://www.sagesrestaurant.com/">
          <p>
            ​Consistently popular since opening in ​January 2001, ​Owner/Chef Bart ​along 
            with his wife Jerri have ​created ​an intimate ​Redmond treasure. ​
          </p>
        </Restaurant>

        <Restaurant name="The Matador" url="https://matadorrestaurants.com/locations/redmond">
          <p>
            ​Located in the heart of Old Town near the Redmond Town Center, the Matador
            is a staple of bustling downtown Redmond. The restaurant and bar is located
            in the historic Bill Brown building, which was originally a wood-frame saloon
            before being rebuilt as a classic two-story brick structure. And it's always
            been a gathering spot. From 1915 to 1927, it even served as Redmond's city
            hall, where Bill Brown himself presided over meetings with Redmond's mayor.
            Today, meetings here center on delicious food and drinks, impeccable service,
            and fun interactions between people.
          </p>
        </Restaurant>

        <p>
          There are many more restaurants in the area.&nbsp;
          <a href="https://www.google.com/maps/search/restaurant/@47.6888086,-122.1678246,14z/data=!3m1!4b1!4m8!2m7!3m6!1srestaurant!2sDigiPen+Institute+of+Technology,+9931+Willows+Rd,+Redmond,+WA+98052!3s0x54900d5c18a2fb13:0x2ea0971d7e01af72!4m2!1d-122.150315!2d47.688818" target="restaurants">
            view in Google Maps
          </a>
        </p>

      </article>

    </Page>
  );
}
