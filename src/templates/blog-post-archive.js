import React from "react";
import { Link, graphql } from "gatsby";
import parse from "html-react-parser";

import Layout from "../components/layout";
import Seo from "../components/seo";
import HeroHeader from "../components/hero-header";

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPost.nodes;
  const archive = data.wpPage;

  if (!posts.length) {
    return (
      <Layout>
        <Seo title="All posts" />
        <HeroHeader
          title={archive.title ? parse(archive.title) : "Blog"}
          subhead={archive.excerpt ? parse(archive.excerpt) : ""}
          backgroundImage={archive.featuredImage ? archive.featuredImage.node.sourceUrl : null}
          backgroundImageTitle={archive.featuredImage ? archive.featuredImage.node.title : null}
        />
        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    )
  }

  return (
    <Layout isHomePage>
      <Seo title="All posts" />
      <HeroHeader
        title={archive.title ? parse(archive.title) : "Blog"}
        subhead={archive.excerpt ? parse(archive.excerpt) : ""}
        backgroundImage={archive.featuredImage ? archive.featuredImage.node.guid : null}
        backgroundImageTitle={archive.featuredImage ? archive.featuredImage.node.title : null}
      />

      <section className="soames-blog-roll">
        <div className="container">
          {
            posts.reduce((m, k, i) => {
              if (i % 3 === 0) {
                m.push([k])
              } else {
                m[m.length - 1].push(k)
              }
              return m
            }, []).map((grouped, index) => (
              <div key={index} className="media-container-row">
                {
                  grouped.map((post, j) =>
                    <div key={j} className="card p-3 col-12 col-lg-4">
                      <div className="card-wrapper">
                        {/* post.featuredImage && (
                          <div className="card-img">
                            <a href={'/blog' + post.uri}><img src={post.featuredImage.node.guid} alt="FDC+" title="FDC+" /></a>
                          </div>
                        )*/}
                        <div className="card-box">
                          <h4 className="card-title mbr-fonts-style display-5">
                            {parse(post.title)}
                          </h4>
                          <h4 className="mbr-fonts-style display-7">
                            {post.date}
                          </h4>
                          {parse(post.excerpt)}
                        </div>
                        <div className="mbr-section-btn text-center">
                          <Link
                            to={'/blog' + post.uri}
                            itemProp="url"
                            className="btn btn-primary display-4">
                            <span itemProp="headline">Read More</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    )
                }
              </div>
            ))
          }
        </div>
      </section>
      
      <section>
        {previousPagePath && (
          <>
            <Link to={'/blog' + previousPagePath}>Previous page</Link>
            <br />
          </>
        )}
        {nextPagePath && <Link to={'/blog' + nextPagePath}>Next page</Link>}
      </section>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(sort: {date: DESC}, limit: $postsPerPage, skip: $offset) {
      nodes {
        excerpt
        uri
        date(formatString: "MMMM DD, YYYY")
        title
        excerpt
        featuredImage {
          node {
            guid
          }
        }
      }
    }
    wpPage(isPostsPage: {eq: true}) {
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
