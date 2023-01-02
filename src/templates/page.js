import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import parse from "html-react-parser"

import Seo from "../components/seo";
import HeroHeader from "../components/hero-header";

// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
import "../css/@wordpress/block-library/build-style/style.css"
import "../css/@wordpress/block-library/build-style/theme.css"

const Page = ({ data: { page }}) => (
  <Layout>
    <Seo title={page.title} />
    <HeroHeader
      title={parse(page.title)}
      subhead={page.excerpt ? parse(page.excerpt): ''}
      backgroundImage={page.featuredImage ? page.featuredImage.node.guid : null}
      backgroundImageTitle={page.featuredImage ? page.featuredImage.node.title : null}
    />
    {!!page.content && (
      <section
        id="gatsby-containter"
        style={{ backgroundColor: '#fff', backgroundImage: 'none', padding: '20px'}}>
        {parse(page.content)}  
      </section>
    )}
  </Layout>
);

export default Page;

export const pageQuery = graphql`
  query PageById(
    $id: String!
  ) {
    page: wpPage(id: { eq: $id }) {
      id
      content
      title
      excerpt
      date(formatString: "MMMM DD, YYYY")
      featuredImage {
        node {
          title
          guid
        }
      }
    }
  }
`