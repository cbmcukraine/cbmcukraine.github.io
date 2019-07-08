import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Card from '../components/Card'
import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  langKey
}) => (
  <div>
    <Card title={title} />
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10">
              <div className="content">
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest events
                  </h3>
                  <BlogRoll langKey={langKey}/>
                  <br/>
                  <Link className="btn" to="/events">
                    More events
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  langKey: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter, fields } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        langKey={fields.langKey}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate($langKey: String!) {
    markdownRemark(fields: {langKey: {eq: $langKey} }, frontmatter: { templateKey: { eq: "index-page" } }) {
      fields {
        slug
        langKey
      }
      frontmatter {
        language
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
