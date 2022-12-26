import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";

const MainMenu = () => (
  <StaticQuery query={graphql`
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
  `} render={props => (
    <div>
      {props.wpMenu.menuItems.nodes.map(item => (
        <Link to={item.uri} key={item.label}>
          {item.label}
        </Link>
      ))}
    </div>
  )} />
)

export default MainMenu;
