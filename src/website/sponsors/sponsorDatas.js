import React from "react";
import digiPenLogo from "./DigiPen_RGB_Black.png";
import keywordsLogo from "./keywords-logo-full.svg";

const sponsorDatas = [
  {
    name: "DigiPen",
    fullName: "DigiPen Insitute of Technology",
    url: "http://digipen.edu",
    address: "9931 Willows Rd, Redmond WA",
    logo: digiPenLogo,
    blurb: (
      <React.Fragment>
        <p>
          Located in Redmond, Washington, with campuses in Singapore
          and Bilbao, Spain, DigiPen offers undergraduate and graduate
          degrees in subjects relating to:
        </p>
        <ul>
          <li>Game design and development</li>
          <li>Computer science and engineering</li>
          <li>Digital art and animation</li>
          <li>Music and sound design</li>
        </ul>
        <p>
          DigiPen alumni have proven to be among the most soughtafter employees in the games industry and beyond. In addition
          to being credited on well over 1,000 popular video game
          titles over the last 20 years, they continue to advance the
          boundaries of what technology can accomplish.
        </p>
      </React.Fragment>
    )
  },
  {
    name: "Keywords Studios",
    fullName: "Keywords Studios",
    url: "https://www.keywordsstudios.com/",
    logo: keywordsLogo,
    blurb: (
      <React.Fragment>
        <p>
          The video games industry represents the pinnacle of interactive digital content. At Keywords, they are using our passion for games, technology and media to create a global services platform for video games and beyond. They aim to become the “go-to” provider of technical services.
        </p>
      </React.Fragment>
    )
  },
  {
    name: "Re: Game Dev",
    fullName: "Redmond/Eastside Game Developers",
    url: "https://join.slack.com/t/redmondgamedevelopers/shared_invite/enQtMzkwNTE3MDI2MTM1LWZlODE0NWNhYTcxMjE4MDc0YWI0ZGU3MWU4NDFmOTg3MWRhYzFlNzgwY2E4M2M3NzQ5NjQyY2EzNzJmNTI4Nzc",
    blurb: (
      <React.Fragment>
        <p>
          The Redmond/Eastside Game Developers meetup is a well-established group of
          professional, student, and hobbyist game developers. Meeting twice monthly
          in Redmond, the group attracts talent from all over the Eastside as well as
          Seattle.
        </p>
      </React.Fragment>
    )
  },
];

sponsorDatas.forEach(data => {
  data.Link = ({ children }) => {
    children = children || data.name;
    return (
      <a href={data.url} target="sponsors">
        {children}
      </a>
    );
  };

  if (data.address) {
    data.AddressLink = ({ children }) => {
      children = children || (
        <React.Fragment>
          <div>
            {data.fullName}
          </div>
          <div>
            {data.address}
          </div>
        </React.Fragment>
      );
      const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.address)}`;
      return (
        <address>
          <a href={url} target="sponsor_maps">
            {children}
          </a>
        </address>
      );
    }

  }
});

export default sponsorDatas;



export function getSponsorData(name) {
  return sponsorDatas.find(data => data.name === name);
}

const digipenData = getSponsorData("DigiPen");

export {
  digipenData
};

