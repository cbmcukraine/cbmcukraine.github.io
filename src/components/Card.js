import React from 'react'
import PropTypes from 'prop-types'
// import Img from 'gatsby-image'

import verticalCBMC from '../img/verticalCBMC.svg'

const url = `/img/ukraine_houses.jpg`

const Card = ({ title, image }) => {
  return (
    <div
      className="card full-width-image margin-top-0"
    >
      <img src={verticalCBMC} alt="CBMC Ukraine" style={{height: '100%', marginLeft: '-30px'}}/>
      <img className="maskedImage" src={url} />
      <div className="title">
        <h1
          className="has-text-weight-bold is-size-4-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
            zIndex: 1
          }}
        >
          {
            title.split(' ').map( (word, key) => <p key={key}>{word}</p>)
          }
        </h1>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object
}

export default Card
