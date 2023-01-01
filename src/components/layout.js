import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

import Header from "./header";
import Footer from "./footer";

import { GlobalStyle } from "./styles/global-styles";

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
    wpMediaItem
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
      wpMediaItem(title: {eq: "favicon" }) {
        title
        guid
      }
    }
  `)

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <Helmet>
        {wpMediaItem && (
          <link rel="icon" href={wpMediaItem.guid} alt={wpMediaItem.title} type="image/png" />
        )}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap" />
      </Helmet>
      <GlobalStyle />

      <main>
        <Header title={title} isHomePage={isHomePage} />
          {children}
        <Footer title={title} />
      </main>

    </div>
  )
}

export default Layout
