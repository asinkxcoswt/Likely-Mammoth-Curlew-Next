import React from 'react'

import PropTypes from 'prop-types'

const Banner1 = (props) => {
  return (
    <>
      <div className="banner1-container thq-section-padding">
        <div className="banner1-max-width thq-section-max-width">
          <div className="banner1-container1">
            <h2 className="banner1-title thq-heading-2">{props.heading1}</h2>
            <h3 className="banner1-text thq-heading-3">{props.content1}</h3>
          </div>
          <button type="button" className="thq-button-filled">
            {props.action1}
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .banner1-container {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
          }
          .banner1-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .banner1-container1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .banner1-title {
            text-align: center;
          }
          .banner1-text {
            text-align: center;
          }
        `}
      </style>
    </>
  )
}

Banner1.defaultProps = {
  action1: 'Get Started',
  heading1: 'Discover Exciting Events Near You',
  content1:
    'Browse through a wide selection of events happening in your city and book your tickets hassle-free.',
}

Banner1.propTypes = {
  action1: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
}

export default Banner1
