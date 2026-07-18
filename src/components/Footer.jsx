import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <p>
          More ways to shop:{" "}
          <a
            href="https://www.apple.com/in/retail/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline transition-all duration-300"
          >
            Find an Apple Store
          </a>{" "}
          or other retailer near you.Or call 000800 040 1966.
        </p>
        <img src="/logo.svg" alt="Apple logo" />
      </div>

      <hr />

      <div className="links">
        <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
        <ul>
          {footerLinks.map(({ label, link }) => (
            <li key={label}>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
