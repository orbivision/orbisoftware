import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroHeader from "../components/hero-header";

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPost.nodes

  if (!posts.length) {
    return (
      <Layout>
        <Seo title="All posts" />
        <HeroHeader title="Blog" subhead="" />
        <Bio />
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
      <HeroHeader title="Tech Blog" subhead="" />

      <section
        id="gatsby-containter"
        style={{ backgroundColor: '#fff', backgroundImage: 'none', padding: '20px'}}>

        <Bio />
        
        <ol style={{ listStyle: `none` }}>
          {posts.map(post => {
            const title = post.title

            return (
              <li key={post.uri}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={'/blog' + post.uri} itemProp="url">
                        <span itemProp="headline">{parse(title)}</span>
                      </Link>
                    </h2>
                    <small>{post.date}</small>
                  </header>
                  <section itemProp="description">{parse(post.excerpt)}</section>
                </article>
              </li>
            )
          })}
        </ol>

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
    }
  }
}
`
