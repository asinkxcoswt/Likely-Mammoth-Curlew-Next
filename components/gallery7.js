import React from 'react'

import PropTypes from 'prop-types'

const Gallery7 = (props) => {
  return (
    <>
      <div className="gallery7-gallery3 thq-section-padding">
        <div className="gallery7-max-width">
          <div className="gallery7-section-title">
            <h2 className="gallery7-text thq-heading-2">{props.heading1}</h2>
            <span className="gallery7-text1 thq-body-large">
              {props.content1}
            </span>
          </div>
          <div className="gallery7-container">
            <div className="gallery7-content">
              <div className="gallery7-container1">
                <img
                  alt={props.image1Alt}
                  src={props.image1Src}
                  className="gallery7-image1 thq-img-ratio-1-1"
                />
                <img
                  alt={props.image2Alt}
                  src={props.image2Src}
                  className="gallery7-image2 thq-img-ratio-1-1"
                />
              </div>
              <div className="gallery7-container2">
                <img
                  alt={props.image3Alt}
                  src={props.image3Src}
                  className="gallery7-image3 thq-img-ratio-4-3"
                />
                <img
                  alt={props.image4Alt}
                  src={props.image4Src}
                  className="gallery7-image4 thq-img-ratio-1-1"
                />
                <img
                  alt={props.image5Alt}
                  src={props.image5Src}
                  className="gallery7-image5 thq-img-ratio-4-3"
                />
              </div>
              <div className="gallery7-container3">
                <img
                  alt={props.image6Alt}
                  src={props.image6Src}
                  className="gallery7-image6 thq-img-ratio-1-1"
                />
                <img
                  alt={props.image7Alt}
                  src={props.image7Src}
                  className="gallery7-image7 thq-img-ratio-1-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .gallery7-gallery3 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery7-max-width {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .gallery7-section-title {
            gap: 24px;
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery7-text {
            text-align: center;
          }
          .gallery7-text1 {
            text-align: center;
          }
          .gallery7-container {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .gallery7-content {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .gallery7-container1 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .gallery7-image1 {
            width: 100%;
            height: 440px;
            object-fit: cover;
          }
          .gallery7-image2 {
            width: 100%;
            height: 440px;
            object-fit: cover;
          }
          .gallery7-container2 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: auto;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .gallery7-image3 {
            width: 100%;
            height: 240px;
            object-fit: cover;
          }
          .gallery7-image4 {
            width: 100%;
            height: 440px;
            object-fit: cover;
          }
          .gallery7-image5 {
            width: 100%;
            height: 240px;
            object-fit: cover;
          }
          .gallery7-container3 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: auto;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .gallery7-image6 {
            width: 100%;
            height: 440px;
            object-fit: cover;
          }
          .gallery7-image7 {
            width: 100%;
            height: 440px;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .gallery7-content {
              align-items: center;
              flex-direction: column;
            }
            .gallery7-container1 {
              width: 100%;
            }
            .gallery7-image1 {
              flex: 0 0 auto;
              width: 100%;
            }
            .gallery7-container2 {
              width: 100%;
            }
            .gallery7-container3 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .gallery7-section-title {
              gap: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

Gallery7.defaultProps = {
  image5Alt: 'Event Image 5',
  image2Src:
    'https://images.unsplash.com/photo-1646423875778-8f41a0623052?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjEyMDI5NHw&ixlib=rb-4.0.3&q=80&w=1080',
  image4Src:
    'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjEyMDI5M3w&ixlib=rb-4.0.3&q=80&w=1080',
  image3Alt: 'Event Image 3',
  image6Alt: 'Event Image 6',
  content1:
    'Browse through a collection of images from past events to get a glimpse of the exciting experiences we offer.',
  image7Src:
    'https://images.unsplash.com/photo-1530023367847-a683933f4172?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjEyMDI5Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  image4Alt: 'Event Image 4',
  image2Alt: 'Event Image 2',
  image5Src:
    'https://images.unsplash.com/photo-1522413452208-996ff3f3e740?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjEyMDI5M3w&ixlib=rb-4.0.3&q=80&w=1080',
  image1Src:
    'https://images.unsplash.com/photo-1607047740534-748140984f12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjEyMDI5NHw&ixlib=rb-4.0.3&q=80&w=1080',
  image7Alt: 'Event Image 7',
  image3Src:
    'https://images.unsplash.com/photo-1659267963335-6eeee4c0ba13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjEyMDI5Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Explore Our Gallery',
  image1Alt: 'Event Image 1',
  image6Src:
    'https://images.unsplash.com/photo-1521310192545-4ac7951413f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjEyMDI5M3w&ixlib=rb-4.0.3&q=80&w=1080',
}

Gallery7.propTypes = {
  image5Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image4Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image6Alt: PropTypes.string,
  content1: PropTypes.string,
  image7Src: PropTypes.string,
  image4Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image5Src: PropTypes.string,
  image1Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image3Src: PropTypes.string,
  heading1: PropTypes.string,
  image1Alt: PropTypes.string,
  image6Src: PropTypes.string,
}

export default Gallery7
