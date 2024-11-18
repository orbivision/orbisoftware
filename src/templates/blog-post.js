import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
import "../css/@wordpress/block-library/build-style/style.css"
import "../css/@wordpress/block-library/build-style/theme.css"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

import HeroHeader from "../components/hero-header";
import BlogSidebar from "../components/blog-sidebar"

const BlogPostTemplate = ({ data: { previous, next, post, page } }) => {
  const featuredImage = {
    data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: post.featuredImage?.node?.alt || ``,
  }

  return (
    <Layout>
      <Seo title={post.title} description={post.excerpt} />
      <HeroHeader
          title={page.title ? parse(page.title) : "Blog"}
          subhead={page.excerpt ? parse(page.excerpt) : ""}
          backgroundImage={page.featuredImage ? page.featuredImage.node.guid : null}
          backgroundImageTitle={page.featuredImage ? page.featuredImage.node.title : null}
        />
      <section>
        <div className="media-container-row">
          <div className="col-12 col-lg-8">
          
            <section
              id="soames-gatsby-content-container"
              className="soames-gatsby-blog-content">
              
                <article
                  className="blog-post"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h1 itemProp="headline">{parse(post.title)}</h1>
                    <p>{post.date}</p>
                  </header>

                  {!!post.content && (
                    <section itemProp="articleBody" className="blog-post-content">{parse(post.content)}</section>
                  )}

                  <hr />

                  <footer>
                    <Bio />
                  </footer>
                </article>

                <nav className="blog-post-nav">
                  <ul
                    style={{
                      display: `flex`,
                      flexWrap: `wrap`,
                      justifyContent: `space-between`,
                      listStyle: `none`,
                      padding: 0,
                    }}
                  >
                    <li>
                      {previous && (
                        <Link to={'/blog' + previous.uri} rel="prev">
                          ← {parse(previous.title)}
                        </Link>
                      )}
                    </li>

                    <li>
                      {next && (
                        <Link to={'/blog' + next.uri} rel="next">
                          {parse(next.title)} →
                        </Link>
                      )}
                    </li>
                  </ul>
                </nav>

            </section>

          </div>
          <div className="col-12 col-lg-4">
            
            <section
              id="soames-gatsby-sidebar-container"
              className="soames-gatsby-sidebar">
              
              {/* if we have a featured image for this post let's display it */}
              {featuredImage?.data && (
                <GatsbyImage
                  image={featuredImage.data}
                  alt={featuredImage.alt ? featuredImage.alt : 'Featured Image'}
                  style={{ marginBottom: 50 }}
                />
              )}

              <h1>Recent Posts</h1>

              <BlogSidebar postId={post.id} />

            </section>

          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
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
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
    }
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
    }
    page: wpPage(isPostsPage: {eq: true}) {
      title
      excerpt
      featuredImage {
        node {
          guid
        }
      }
    }
  }
`
