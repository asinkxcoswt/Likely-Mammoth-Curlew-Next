import React from 'react'

import PropTypes from 'prop-types'

const Contact3 = (props) => {
  return (
    <>
      <div className="contact3-contact20 thq-section-padding">
        <div className="contact3-max-width thq-section-max-width">
          <div className="contact3-section-title">
            <span className="thq-body-small">{props.content2}</span>
            <div className="contact3-content">
              <h2 className="thq-heading-2">{props.heading1}</h2>
              <p className="contact3-text2 thq-body-large">{props.content1}</p>
            </div>
          </div>
          <div className="contact3-row">
            <div className="contact3-content1">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <div className="contact3-contact-info">
                <div className="contact3-content2">
                  <h3 className="contact3-text3 thq-heading-3">Email</h3>
                  <p className="contact3-text4 thq-body-large">
                    {props.content3}
                  </p>
                </div>
                <span className="contact3-email thq-body-small">
                  {props.email1}
                </span>
              </div>
            </div>
            <div className="contact3-content3">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
              </svg>
              <div className="contact3-contact-info1">
                <div className="contact3-content4">
                  <h3 className="contact3-text5 thq-heading-3">Phone</h3>
                  <p className="contact3-text6 thq-body-large">
                    {props.content4}
                  </p>
                </div>
                <span className="contact3-phone thq-body-small">
                  {props.phone1}
                </span>
              </div>
            </div>
            <div className="contact3-content5">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <div className="contact3-contact-info2">
                <div className="contact3-content6">
                  <h3 className="contact3-text7 thq-heading-3">Office</h3>
                  <p className="contact3-text8 thq-body-large">
                    {props.content5}
                  </p>
                </div>
                <span className="contact3-address thq-body-small">
                  {props.address1}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact3-contact20 {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .contact3-max-width {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact3-section-title {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact3-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact3-text2 {
            text-align: center;
          }
          .contact3-row {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .contact3-content1 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact3-contact-info {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact3-content2 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact3-text3 {
            align-self: stretch;
            text-align: center;
          }
          .contact3-text4 {
            text-align: center;
          }
          .contact3-email {
            text-align: center;
          }
          .contact3-content3 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact3-contact-info1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact3-content4 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact3-text5 {
            align-self: stretch;
            text-align: center;
          }
          .contact3-text6 {
            text-align: center;
          }
          .contact3-phone {
            text-align: center;
          }
          .contact3-content5 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact3-contact-info2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact3-content6 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact3-text7 {
            align-self: stretch;
            text-align: center;
          }
          .contact3-text8 {
            text-align: center;
          }
          .contact3-address {
            text-align: center;
          }
          @media (max-width: 767px) {
            .contact3-row {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Contact3.defaultProps = {
  email1: 'support@eventticketingplatform.com',
  heading1: 'Contact Us',
  content3:
    'Stay connected with us on social media for updates and promotions.',
  content5:
    'We value your feedback and strive to provide the best experience for our users.',
  content1: 'Have a question or need support? Feel free to reach out to us.',
  phone1: '+1 (800) 123-4567',
  address1: '123 Event Way, Cityville, State, 12345',
  content4: 'For business inquiries or partnerships, please contact our team.',
  content2: 'Our team is here to assist you with any inquiries you may have.',
}

Contact3.propTypes = {
  email1: PropTypes.string,
  heading1: PropTypes.string,
  content3: PropTypes.string,
  content5: PropTypes.string,
  content1: PropTypes.string,
  phone1: PropTypes.string,
  address1: PropTypes.string,
  content4: PropTypes.string,
  content2: PropTypes.string,
}

export default Contact3
