import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import parse from "html-react-parser";

const BlogSidebar = ({ postId }) => {
  const { posts } = useStaticQuery(
    graphql`
      query SidebarPostArchive {
        posts: allWpPost(sort: {date: DESC}) {
          nodes {
            id
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
      }
    `
  )

  return(
    <section className="soames-blog-roll pt-3">
      <div className="container">
        {posts.nodes.map((post, key) => (
          post.id !== postId && (
          <div className="media-container-row">
            <div key={key} className="card p-3 col-12">
              <div className="card-wrapper">
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
          </div>
        )))}
      </div>
    </section>
  )

}

export default BlogSidebar;