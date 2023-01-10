import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

const FooterMenu = () => {
  const { wpMenu } = useStaticQuery(
    graphql`
      query WpFooterMenu {
        wpMenu(name: {eq: "soames-footer-menu"}) {
          id
          name
          menuItems {
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
      }
    `
  )

  return (
    <div className="soames-footer-content">
      <ul>
      {wpMenu.menuItems.nodes.map(item => (
        item.parentDatabaseId === 0 && (
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
        )
      ))}
      </ul>
    </div>
  )
}
  
export default FooterMenu;