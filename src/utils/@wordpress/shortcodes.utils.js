import React from "react";
import parse from "html-react-parser";

import RemoveContentAreaPadding from "../../components/@wordpress/shortcodes/remove-content-area-padding";
import SoamesTitle from "../../components/@wordpress/shortcodes/soames-title";
import SoamesTitleBar from "../../components/@wordpress/shortcodes/soames-title-bar";

// Util function to handle the shortcode find/replace.
const handleShortcodes = (node) => {
  // It seems all shortcodes are P tags.
  // So we check that the node has a type, and that that type
  // is a tag.
  if (node.type && node.type === "tag") {
    // The first array is usually a shortcode is the first and
    // only child of a tag node.
    const shortcode = node.children[0]?.data;

    // If we find the following shortcode strings, replace them with
    // our component (no attributes or content)
    if (shortcode === "[soames-remove-content-area-padding]") {
      return <RemoveContentAreaPadding />;
    }
    
    // The following shortcodes support attributes and/or
    // content, so they must be parsed using a regex
    if (shortcode) {
      const soamesTitleMatch = shortcode.match(/\[soames-title([^\]]*)\]([^\]]*)\[\/soames-title\]/);
      if (soamesTitleMatch && soamesTitleMatch[2]) {
        const title = soamesTitleMatch[2];
        return <SoamesTitle title={title} />;
      }
      const soamesTitleBarMatch = shortcode.match(/\[soames-title-bar([^\]]*)\]([^\]]*)\[\/soames-title-bar\]/);
      if (soamesTitleBarMatch && soamesTitleBarMatch[2]) {
        const title = soamesTitleBarMatch[2];
        return <SoamesTitleBar title={title} />;
      }
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
