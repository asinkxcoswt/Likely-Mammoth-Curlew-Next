import React from 'react'

import PropTypes from 'prop-types'

const FAQ1 = (props) => {
  return (
    <>
      <div className="faq1-faq7 thq-section-padding">
        <div className="faq1-max-width thq-section-max-width">
          <div className="thq-flex-column">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="faq1-text1 thq-body-large">{props.content1}</p>
          </div>
          <div className="thq-flex-column faq1-list">
            <div className="faq1-list-item1">
              <p className="faq1-faq1-question thq-body-large">
                {props.faq1Question}
              </p>
              <span className="thq-body-small">{props.faq1Answer}</span>
            </div>
            <div className="faq1-list-item2">
              <p className="faq1-faq2-question thq-body-large">
                {props.faq2Question}
              </p>
              <span className="thq-body-small">{props.faq2Answer}</span>
            </div>
            <div className="faq1-list-item3">
              <p className="faq1-faq3-question thq-body-large">
                {props.faq3Question}
              </p>
              <span className="thq-body-small">{props.faq3Answer}</span>
            </div>
            <div className="faq1-list-item4">
              <p className="faq1-faq4-question thq-body-large">
                {props.faq4Question}
              </p>
              <span className="thq-body-small">{props.faq4Answer}</span>
            </div>
            <div className="faq1-list-item5">
              <p className="faq1-faq5-question thq-body-large">
                {props.faq5Question}
              </p>
              <span className="thq-body-small">{props.faq5Answer}</span>
            </div>
          </div>
          <div className="thq-flex-column">
            <div className="faq1-content1">
              <h2 className="thq-heading-2">{props.heading2}</h2>
              <p className="faq1-text3 thq-body-large">{props.content2}</p>
            </div>
            <div className="faq1-container">
              <button className="thq-button-outline faq1-button">
                <span className="thq-body-small">{props.action1}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .faq1-faq7 {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .faq1-max-width {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .faq1-text1 {
            text-align: center;
          }
          .faq1-list-item1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq1-faq1-question {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq1-list-item2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq1-faq2-question {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq1-list-item3 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq1-faq3-question {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq1-list-item4 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq1-faq4-question {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq1-list-item5 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq1-faq5-question {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq1-content1 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .faq1-text3 {
            text-align: center;
          }
          .faq1-container {
            display: flex;
            position: relative;
          }
          @media (max-width: 991px) {
            .faq1-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 767px) {
            .faq1-text1 {
              text-align: left;
            }
            .faq1-list {
              gap: var(--dl-space-space-twounits);
            }
            .faq1-button {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

FAQ1.defaultProps = {
  action1: 'Contact',
  faq1Answer:
    'To purchase tickets for an event, simply navigate to the Event Listing Page, select the event you are interested in, choose the number of tickets you wish to purchase, and proceed to the Checkout Page to complete your transaction.',
  faq2Answer:
    'Ticket cancellation and refund policies vary depending on the event organizer. Please refer to the specific event details or contact our customer support for assistance with cancellations and refunds.',
  faq5Question: 'How can I access my purchased tickets?',
  faq4Answer:
    'We accept various payment methods, including credit/debit cards, PayPal, and other secure online payment options. You can choose your preferred payment method during the checkout process.',
  faq3Question: 'Is my ticket purchase secure?',
  faq2Question: 'Can I cancel or refund my ticket purchase?',
  faq4Question: 'What payment methods are accepted?',
  faq5Answer:
    'Once your ticket purchase is confirmed, you will receive an email with your e-ticket or a link to download your tickets. You can also access your purchased tickets by logging into your User Account and viewing your order history.',
  heading1: 'FAQs',
  faq3Answer:
    'Yes, we prioritize the security of all ticket purchases made through our platform. We use encryption technology to protect your personal information and ensure a safe transaction process.',
  faq1Question: 'How do I purchase tickets for an event?',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  heading2: 'Still have a question?',
}

FAQ1.propTypes = {
  action1: PropTypes.string,
  faq1Answer: PropTypes.string,
  faq2Answer: PropTypes.string,
  faq5Question: PropTypes.string,
  faq4Answer: PropTypes.string,
  faq3Question: PropTypes.string,
  faq2Question: PropTypes.string,
  faq4Question: PropTypes.string,
  faq5Answer: PropTypes.string,
  heading1: PropTypes.string,
  faq3Answer: PropTypes.string,
  faq1Question: PropTypes.string,
  content1: PropTypes.string,
  content2: PropTypes.string,
  heading2: PropTypes.string,
}

export default FAQ1
