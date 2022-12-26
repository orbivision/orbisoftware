import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

const MainMenu = () => {
  const { wpMenu } = useStaticQuery(
    graphql`
      query WpMenu {
        wpMenu(name: {eq: "Main Menu"}) {
          id
          name
          menuItems {
            nodes {
              id
              label
              title
              path
              parentId
              uri
            }
          }
        }
      }
    `
  )

  return (
    <div>
      {wpMenu.menuItems.nodes.map(item => (
        <Link to={item.uri} key={item.label}>
          {item.label}
        </Link>
      ))}
    </div>
  )
}

export default MainMenu;
