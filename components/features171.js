import React from 'react'

import PropTypes from 'prop-types'

const Features171 = (props) => {
  return (
    <>
      <div className="features171-layout349 thq-section-padding">
        <div className="features171-max-width thq-section-max-width">
          <div className="features171-image-container">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="thq-img-ratio-16-9"
            />
          </div>
          <div className="features171-content">
            <div className="features171-section-title">
              <span className="thq-body-small">{props.feature1Slogan}</span>
              <div className="features171-content1">
                <h2 className="thq-heading-2">{props.feature1Title}</h2>
                <p className="thq-body-large">{props.feature1Description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features171-layout349 {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .features171-max-width {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            align-items: center;
          }
          .features171-image-container {
            flex: 1;
            display: flex;
            position: relative;
            align-items: center;
          }
          .features171-content {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .features171-section-title {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .features171-content1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          @media (max-width: 991px) {
            .features171-max-width {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Features171.defaultProps = {
  feature1Slogan: 'Book your event tickets hassle-free',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjEwMjI4MXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageAlt: 'Easy Ticket Booking Image',
  feature1Title: 'Easy Ticket Booking',
  feature1Description:
    'Our user-friendly interface allows you to easily browse and book tickets for your favorite events in just a few clicks.',
}

Features171.propTypes = {
  feature1Slogan: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1Title: PropTypes.string,
  feature1Description: PropTypes.string,
}

export default Features171
