import React from "react";
import "./Footer.scss";

const Footer = () => {
  const socialMedias = [
    {
      id: 1,
      url: "https://github.com/akshaypithadiya",
      icon_name: "logo-github",
    },
    {
      id: 2,
      url: "http://linkedin.com/in/akshaypithadiya",
      icon_name: "logo-linkedin",
    },
    {
      id: 3,
      url: "https://twitter.com/akshaypithadiya",
      icon_name: "logo-twitter",
    },
    {
      id: 4,
      url: "#",
      icon_name: "mail",
    },
  ];

  return (
    <div className="Footer">
      {socialMedias.map((social) => {
        return (
          <a href={social.url} key={social.id} target="_blank">
            <ion-icon name={social.icon_name}></ion-icon>
          </a>
        );
      })}
    </div>
  );
};

export default Footer;
