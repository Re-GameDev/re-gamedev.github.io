import React from 'react';
import Page from '../Page.js';
import {EVENT_NAME} from '../datas.js';

function ScheduleItem({ time, children }) {
  return (
    <div className="ScheduleItem">
      @{time} - {children}
    </div>
  );
}

export default function SchedulePage() {
  return (
    <Page>

      <article>
        <h1>
          {EVENT_NAME} Schedule
        </h1>

        <section>
          <h1>Friday, March 13th</h1>

          <ScheduleItem time="19:00">
            Doors open! Come sign in.
          </ScheduleItem>
          <ScheduleItem time="20:00">
            We announce the theme. Participants form their groups
          </ScheduleItem>
        </section>

        <section>
          <h1>Saturday, March 14th</h1>
  
          <ScheduleItem time="8:00">
            Volunteers arrive for briefing. Sponsors arrival
          </ScheduleItem>
          <ScheduleItem time="9:00">
            Doors open
          </ScheduleItem>
          <ScheduleItem time="11:30">
            Lunch! Sponsor talks
          </ScheduleItem>
          <ScheduleItem time="18:00">
            Dinner
          </ScheduleItem>
          <ScheduleItem time="22:00">
            Doors close, but people staying overnight stick around
          </ScheduleItem>

          <p>
            * staying overnight *
          </p>
        </section>

        <section>
          <h1>Sunday, March 15th</h1>

          <ScheduleItem time="7:00">
            Doors open. Breakfast
          </ScheduleItem>
          <ScheduleItem time="11:30">
            Lunch
          </ScheduleItem>
          <ScheduleItem time="16:00">
            Showcases
          </ScheduleItem>
          <ScheduleItem time="19:00">
            Clean up
          </ScheduleItem>
        </section>
      </article>

    </Page>
  );
}
