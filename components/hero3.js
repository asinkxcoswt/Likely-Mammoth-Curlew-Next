import React from 'react'

import PropTypes from 'prop-types'

const Hero3 = (props) => {
  return (
    <>
      <div className="hero3-header9">
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="thq-img-ratio-16-9"
        />
        <div className="hero3-content thq-section-padding">
          <div className="hero3-max-width thq-section-max-width thq-flex-row">
            <div className="hero3-column">
              <h1 className="thq-heading-1 hero3-text">{props.heading1}</h1>
            </div>
            <div className="hero3-column1">
              <p className="thq-body-large hero3-text1">{props.content1}</p>
              <div className="hero3-actions">
                <button className="thq-button-filled hero3-button">
                  <span className="thq-body-small">{props.action1}</span>
                </button>
                <button className="thq-button-outline hero3-button1">
                  <span className="thq-body-small">{props.action2}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero3-header9 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .hero3-content {
            display: flex;
            justify-content: center;
          }
          .hero3-max-width {
            align-self: center;
            align-items: center;
          }
          .hero3-column {
            flex: 1;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero3-column1 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero3-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          @media (max-width: 991px) {
            .hero3-column {
              width: 100%;
            }
            .hero3-column1 {
              width: auto;
            }
          }
          @media (max-width: 767px) {
            .hero3-text {
              text-align: center;
            }
            .hero3-text1 {
              text-align: center;
            }
            .hero3-actions {
              width: 100%;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .hero3-actions {
              flex-direction: column;
            }
            .hero3-button {
              width: 100%;
            }
            .hero3-button1 {
              width: 100%;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

Hero3.defaultProps = {
  action2: 'Browse Events',
  heading1: 'Welcome to our Event Ticketing Platform',
  content1: 'Find and book tickets for upcoming events near you',
  image1Alt: 'Image of a crowd at a concert',
  action1: 'Get Tickets',
  image1Src:
    'https://images.unsplash.com/photo-1633671336969-6f5ae3ac9399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjEwMjI3NXw&ixlib=rb-4.0.3&q=80&w=1080',
}

Hero3.propTypes = {
  action2: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  image1Alt: PropTypes.string,
  action1: PropTypes.string,
  image1Src: PropTypes.string,
}

export default Hero3
