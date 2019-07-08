import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class EventsIndexPage extends React.Component {
  render() {

    const pageContext =  this.props.pageContext
    const langKey = pageContext.langKey

    return (
      <Layout pageContext={pageContext}>
        <div className="page-header-card">
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              color: 'white',
              padding: '1rem',
            }}
          >
            Последние События
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
