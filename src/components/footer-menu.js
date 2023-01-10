import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

const FooterMenu = () => {
  const { allWpMenuItem } = useStaticQuery(
    graphql`
      query WpFooterMenu {
        allWpMenuItem(
          filter: {label: {eq: "gatsby-footer-menu"}, parentDatabaseId: {eq: 0}}
          ,sort: {order: ASC}) {
          nodes {
            id
            label
            parentDatabaseId
            path
            uri
            order
          }
        }
      }
    `
  )

  return (
    <div className="soames-footer-content">
      <ul>
      {allWpMenuItem.nodes.map(item => (
        item.uri.includes('http') ? (
          <li key={item.id}>
            <a href={item.uri} target="_blank" rel="noreferrer">
              {item.label}
            </a><br/>
          </li>
        ) : (
          <li key={item.id}>
            <Link to={item.uri}>
              {item.label}
            </Link><br/>
          </li>
        )
      ))}
      </ul>
    </div>
  )
}
  
export default FooterMenu;