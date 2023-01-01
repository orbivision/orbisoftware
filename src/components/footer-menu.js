import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

const FooterMenu = () => {
  const { allWpMenuItem } = useStaticQuery(
    graphql`
      query WpFooterMenu {
        allWpMenuItem(
          filter: {locations: {eq: GATSBY_FOOTER_MENU}, parentDatabaseId: {eq: 0}}
          ,sort: {order: ASC}) {
          nodes {
            id
            label
            parentDatabaseId
            locations
            path
            uri
            order
          }
        }
      }
    `
  )

  return (
    <p className="soames-text">
      {allWpMenuItem.nodes.map(item => (
        item.uri.includes('http') ? (
          <>
            <a href={item.uri} target="_blank" rel="noreferrer">
              {item.label}
            </a><br/>
          </>
        ) : (
          <>
            <Link to={item.uri}>
              {item.label}
            </Link><br/>
          </>
        )
      ))}
    </p>
  )
}
  
export default FooterMenu;