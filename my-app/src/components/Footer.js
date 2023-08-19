import React from "react";
import { FaTwitter, FaFacebookF, FaGithub } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="container__footer">
      <div className="container__social">
        <a
          href="https://twitter.com/revoli1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://github.com/Rev0li"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      <div className="container__footer__text">
        <p>© 2023 - All rights reserved</p>
      </div>
    </div>
  );
}
