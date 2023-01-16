import React from "react";
import parse from "html-react-parser";

import RemoveContentAreaPadding from "../../components/@wordpress/shortcodes/remove-content-area-padding";
import SoamesTitle from "../../components/@wordpress/shortcodes/soames-title";
import SoamesTitleBar from "../../components/@wordpress/shortcodes/soames-title-bar";
import SoamesTitleBarLg from "../../components/@wordpress/shortcodes/soames-title-bar-lg";
import SoamesTextBlock from "../../components/@wordpress/shortcodes/soames-text-block";
import SoamesIconList from "../../components/@wordpress/shortcodes/soames-icon-list";

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
      const titleContent = getContent(shortcode.match(titleRegex));
      if (titleContent) {
        return <SoamesTitle title={titleContent} />;
      }
      const titleBarRegex = /\[soames-title-bar([^\]]*)\]([^\]]*)\[\/soames-title-bar\]/;
      const titleBarContent = getContent(shortcode.match(titleBarRegex));
      if (titleBarContent) {
        return <SoamesTitleBar title={titleBarContent} />;
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
      const textBlockRegex = /\[soames-text-block([^\]]*)\]([^\]]*)\[\/soames-text-block\]/;
      const textBlockContent = getContent(shortcode.match(textBlockRegex));
      if (textBlockContent) {
        return <SoamesTextBlock text={textBlockContent} />;
      }
      const iconListRegex = /\[soames-icon-list([^\]]*)\]([^\]]*)/;
      const attributes = getAttributes(shortcode.match(iconListRegex));
      if (attributes) {
        return <SoamesIconList attributes={attributes} />;
      }
    }
    
  }

  // If nothing then return original node
  return node;
};

const getContent = (regexMatch) => {
  if (regexMatch && regexMatch[2]) {
    const shortcodeContent = regexMatch[2];
    return shortcodeContent;
  }
  return null;
}

const getAttributes = (regexMatch) => {
  const attributes = {};
  if (regexMatch && regexMatch[1]) {
    const regex = /(\w+)=["']?((?:.(?!["']?\s+(?:\S+)=|\s*\/?[>"']))+.)["']?/g;
    regexMatch[1].match(regex).forEach(match => {
      if (match) {
        const label = match.split('=')[0];
        const valuesArray = match.replace(/[″”]+/g, '').split('=')[1].split(',');
        attributes[label] = valuesArray;
      }
    });
    return attributes;
  }
  return null;
}

export const Shortcodes = ({ children }) => {
  const reactElements = parse(children || "", {
    replace: handleShortcodes,
  });

  return <div>{reactElements}</div>;
};
