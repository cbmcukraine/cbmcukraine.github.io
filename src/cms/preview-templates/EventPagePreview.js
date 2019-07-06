import React from 'react'
import PropTypes from 'prop-types'
import { EventPageTemplate } from '../../templates/event-page'

const EventPagePreview = ({ entry, widgetFor }) => (
  <EventPageTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

EventPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default EventPagePreview
