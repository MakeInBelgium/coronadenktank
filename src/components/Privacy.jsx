import React from "react";
import { css } from "glamor";

const textHeavyHolder = css({
  "> h2": {
    fontSize: "1.4em",
    fontWeight: "bold"
  },
  "> ul": {},
  "@media(min-width: 600px)": {
    maxWidth: "600px",
    float: "left",
    position: "relative",
    top: "0px",
    left: "calc(50% - 300px)"
  }
});

const list = css({
  display: "block",
  width: "100%",
  boxSizing: "border-box",
  float: "left",
  // listStyle: `square inside url(${bullet})`,
  ">li": {
    padding: "0px 0px 0px 30px",
    margin: "10px 0px"
  }
});

const ctaBox = css({
  width: "100%",
  textAlign: "center",
  "> a": {
    margin: "10px"
  }
});

const Privacy = () => {
  return (
    <>
      <div className="container" {...textHeavyHolder}>
        <h1>Privacy Policy</h1>
        <h2> Data collected on the basis of consent</h2>
        <p>
          Upon your request and expression of consent, we collect the following
          data for the purpose of providing services to you. Your data is not
          used for any other purposes or shared with third parties. It is
          removed upon your withdrawal of consent or your request to terminate
          theses services.
        </p>
        <h2> Comments</h2>
        <p>
          <strong>Name, email address, content of the comment:</strong> this
          data is collected when you leave a comment and displayed on the
          Website.
        </p>
        <p>
          If you leave a comment on the Website, your name and email address
          will also be saved in cookies. These are for your convenience so that
          you do not have to fill in your details again when you leave another
          comment. These cookies will be saved on your computer until you delete
          them.
        </p>
        <p>
          <strong>IP and browser user agent string:</strong> this data is
          collected when you leave a comment.
        </p>
        <p>
          <strong>Retention period:</strong> the aforementioned data is retained
          indefinitely so we can recognize and approve any follow-up comments
          automatically instead of holding them in a moderation queue.
        </p>
        <h2>Data collected on the basis of legitimate interest</h2>
        <p>
          Based on our legitimate interests, we collect the following data for
          the purpose of running this website. Your data is not used for any
          other purposes or shared with third parties. It is removed upon your
          request.
        </p>
        <h2>Statistics</h2>
        <p>
          The website uses a minimal build of Google Analytics, a service which
          transmits website traffic data to Google servers in the United States
          and allows us to notice trends to improve the user experience on our
          website. This minimal build processes personal data such as: the
          unique User ID set by Google Analytics, the date and time, the title
          of the page being viewed, the URL of the page being viewed, the URL of
          the page that was viewed prior to the current page, the screen
          resolution, the time in local timezone, the files that were clicked on
          and downloaded, the links clicked on to an outside domain, the type of
          device, and the country, region, and city.
        </p>
        <p>
          You may opt out of this tracking at any time by activating the “Do Not
          Track” setting in your browser.
        </p>
        <h2>Embedded content from other websites </h2>
        <p>
          Articles on the Website may include embedded content (e.g. videos,
          charts, etc.). Embedded content from other websites behaves in the
          exact same way as if the visitor had visited the other website.
        </p>
        <p>
          These websites may collect data about you, use cookies, embed
          additional third-party tracking, and monitor your interaction with
          that embedded content, including tracing your interaction with the
          embedded content if you have an account and are logged in to that
          website.
        </p>
        <h2>Your rights pertaining your data</h2>
        <p>
          If you have left comments on the Website, you can request to receive
          an exported file of the personal data we hold about you, including any
          data you have provided to us. You can also request that we rectify or
          erase any personal data we hold about you. Please send your request to{" "}
          <a href="mailto:legal@innovatrix.be">legal@innovatrix.be</a>
        </p>
        <ul {...list}>
          <li>The right to withdraw consent </li>
          <li>The right of access </li>
          <li>The right to erasure </li>
          <li>The right to rectification </li>
          <li>The right to data portability </li>
          <li>The right to object </li>
          <li>Notification of data breaches</li>
          <li>The right to lodge a complaint with a supervisory authority</li>
        </ul>
      </div>
      ;
    </>
  );
};

export default Privacy;
