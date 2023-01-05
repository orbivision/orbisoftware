import React from "react";
import parse from "html-react-parser";

import RemoveContentAreaPadding from "../../components/@wordpress/shortcodes/remove-content-area-padding";

// Util function to handle the shortcode find/replace.
const handleShortcodes = (node) => {
  // It seems all shortcodes are P tags.
  // So we check that the node has a type, and that that type
  // is a tag.
  if (node.type && node.type === "tag") {
    // If this tag has children, and it is the first child.
    // This may cause issues, but I have not had issues with it.
    // The first array is usually a shortcode is the first and
    // only child of a tag node.
    const shortcode = node.children[0]?.data;

    // If we find the shortcode string, replace it with
    // our component.
    if (shortcode === "[soames-remove-content-area-padding]") {
      return <RemoveContentAreaPadding />;
    }
  }

  // If nothing then return original node
  return node;
};

export const Shortcodes = ({ children }) => {
  const reactElements = parse(children || "", {
    replace: handleShortcodes,
  });

  return <div>{reactElements}</div>;
};
