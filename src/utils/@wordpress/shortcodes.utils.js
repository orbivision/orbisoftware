import React from "react";
import parse from "html-react-parser";

import RemoveContentAreaPadding from "../../components/@wordpress/shortcodes/remove-content-area-padding";
import SoamesTitle from "../../components/@wordpress/shortcodes/soames-title";
import SoamesTitleBar from "../../components/@wordpress/shortcodes/soames-title-bar";
import SoamesTitleBarLg from "../../components/@wordpress/shortcodes/soames-title-bar-lg";

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
      const titleRegex = /\[soames-title([^\]]*)\]([^\]]*)\[\/soames-title\]/;
      const titleMatch = shortcode.match(titleRegex);
      if (titleMatch && titleMatch[2]) {
        const title = titleMatch[2];
        return <SoamesTitle title={title} />;
      }
      const titleBarRegex = /\[soames-title-bar([^\]]*)\]([^\]]*)\[\/soames-title-bar\]/;
      const titleBarMatch = shortcode.match(titleBarRegex);
      if (titleBarMatch && titleBarMatch[2]) {
        const title = titleBarMatch[2];
        return <SoamesTitleBar title={title} />;
      }
      const titleBarLgRegex = /\[soames-title-bar-lg([^\]]*)\]([^\]]*)\[\/soames-title-bar-lg\]/;
      const titleBarLgMatch = shortcode.match(titleBarLgRegex);
      if (titleBarLgMatch && titleBarLgMatch[1] && titleBarLgMatch[2]) {
        const title = titleBarLgMatch[2];
        const titleBarLgSubtitleRegex = /(\w+)=["']?((?:.(?!["']?\s+(?:\S+)=|\s*\/?[>"']))+.)["']?/gm;
        const [titleBarLgSubtitleMatch] = titleBarLgMatch[1].matchAll(titleBarLgSubtitleRegex);
        const subtitle = titleBarLgSubtitleMatch[2].trim().slice(1, -1);
        return <SoamesTitleBarLg title={title} subtitle={subtitle} />;
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
