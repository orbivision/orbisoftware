import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

import Seo from "../components/seo";

const Page = ({ data: { page }}) => (
  <Layout>
    <Seo title={page.title} />
    <h1 dangerouslySetInnerHTML={{__html: page.title}} />
    <div dangerouslySetInnerHTML={{__html: page.content}} />
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
      date(formatString: "MMMM DD, YYYY")
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                placeholder: TRACED_SVG
                layout: FULL_WIDTH
              )
            }
          }
        }
      }
    }
  }
`