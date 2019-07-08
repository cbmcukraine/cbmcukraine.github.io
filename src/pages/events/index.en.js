import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class EventsIndexPage extends React.Component {
  render() {

    const pageContext =  this.props.pageContext
    const langKey = pageContext.langKey

    return (
      <Layout pageContext={pageContext}>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `linear-gradient(-132deg, #00AAFF 0%, #01458E 100%)`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              color: 'white',
              padding: '1rem',
            }}
          >
            Latest Events
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll langKey={langKey}/>
              <br/>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
