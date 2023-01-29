import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Logo = ({ title }) => {
  const { wpMediaItem } = useStaticQuery(graphql`
    query LogoQuery {
      wpMediaItem(title: {eq: "logo" }) {
        title
        guid
      }
    }
  `)

  return (
    <div className="menu-logo">
      <div className="navbar-brand">
        <span className="navbar-caption-wrap">
          <a className="navbar-caption text-white display-5" href="/">
            {wpMediaItem ? (
              <img width="108" alt={wpMediaItem.title} src={wpMediaItem.guid} />
            ) : (
              <img width="108" alt="Orbi Software" src="https://orbivision.net/wp-content/uploads/2023/01/punch_card.png" />
            )}
            &nbsp;&nbsp;{title}
          </a>
        </span>
      </div>
    </div>
  )
}

export default Logo;
