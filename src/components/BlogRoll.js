import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { data, langKey } = this.props
    const { edges } = data.allMarkdownRemark

    const posts = edges.filter( edge => edge.node.frontmatter.language === langKey)

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-6" key={post.id} style={{padding:'2rem'}}>
              <article className="blog-list-item tile is-child">
                <Link to={post.fields.slug}>
                <header className="event-block">
                  <div>
                    {
                      post.frontmatter.featuredimage &&
                      <div
                        className="event-featured-image"
                        style={{
                          backgroundImage: `url(${
                            !!post.frontmatter.featuredimage.childImageSharp ? post.frontmatter.featuredimage.childImageSharp.fluid.src : post.frontmatter.featuredimage
                          })`
                        }}
                      >
                        <div className="tint">
                          <span className="title">
                            {post.frontmatter.date.split(',').map( (d, index) => <div key={index}>{d}</div>)}
                          </span>
                        </div>
                      </div>
                    }
                  </div>
                  <p className={`post-meta title has-text-white is-size-4 ${post.frontmatter.featuredpost ? 'post-meta-featured' : ''}`} style={{color:'white'}}>
                    {post.frontmatter.title}
                  </p>
                </header>
                </Link>
                <p style={{textAlign: 'justify', textJustify: 'inter-word', margin: '1em'}}>
                  {post.excerpt}
                  <Link className="" to={post.fields.slug} style={{marginLeft: '5px'}}>
                    Read more
                  </Link>
                </p>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default ({langKey}) => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "event-page" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 140)
              id
              fields {
                slug
                langKey
              }
              frontmatter {
                title
                language
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 500, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} langKey={langKey}/>}
  />
)


/*

                

*/