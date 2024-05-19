import React from 'react'

import PropTypes from 'prop-types'

const SignIn5 = (props) => {
  return (
    <>
      <div className="sign-in5-container thq-section-padding">
        <div className="sign-in5-max-width thq-section-max-width">
          <div className="sign-in5-container1 thq-section-padding">
            <div className="sign-in5-form-root">
              <div className="sign-in5-container2">
                <h2 className="sign-in5-text thq-heading-2">
                  {props.heading1}
                </h2>
                <p className="sign-in5-text1 thq-body-large">
                  Don&apos;t have an account? Sign up
                </p>
              </div>
              <div className="sign-in5-container3">
                <button className="sign-in5-button thq-button-outline">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="sign-in5-icon"
                  >
                    <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                  </svg>
                  <span className="thq-body-small">Continue with Facebook</span>
                </button>
                <button className="sign-in5-button1 thq-button-outline">
                  <svg
                    viewBox="0 0 860.0137142857142 1024"
                    className="sign-in5-icon2"
                  >
                    <path d="M438.857 449.143h414.286c4 22.286 6.857 44 6.857 73.143 0 250.286-168 428.571-421.143 428.571-242.857 0-438.857-196-438.857-438.857s196-438.857 438.857-438.857c118.286 0 217.714 43.429 294.286 114.857l-119.429 114.857c-32.571-31.429-89.714-68-174.857-68-149.714 0-272 124-272 277.143s122.286 277.143 272 277.143c173.714 0 238.857-124.571 249.143-189.143h-249.143v-150.857z"></path>
                  </svg>
                  <span className="thq-body-small">Continue with Google</span>
                </button>
                <button className="sign-in5-button2 thq-button-outline">
                  <svg viewBox="0 0 1024 1024" className="sign-in5-icon4">
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                  <span className="thq-body-small">Continue with Email</span>
                </button>
              </div>
            </div>
          </div>
          <div className="sign-in5-container4">
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="sign-in5-image thq-img-ratio-4-6"
            />
          </div>
        </div>
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="sign-in5-sign-up-image thq-img-ratio-16-9"
        />
        <div className="sign-in5-container5"></div>
      </div>
      <style jsx>
        {`
          .sign-in5-container {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sign-in5-max-width {
            height: 500px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .sign-in5-container1 {
            gap: var(--dl-space-space-twounits);
            width: auto;
            height: 100%;
            display: flex;
            z-index: 100;
            max-width: 500px;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
            border-top-left-radius: var(--dl-radius-radius-cardradius);
            border-top-right-radius: 0;
            border-bottom-left-radius: var(--dl-radius-radius-cardradius);
            border-bottom-right-radius: 0;
          }
          .sign-in5-form-root {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-shrink: 0;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: center;
          }
          .sign-in5-container2 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
          }
          .sign-in5-text {
            align-self: center;
          }
          .sign-in5-text1 {
            align-self: center;
          }
          .sign-in5-container3 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            box-sizing: border-box;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
          }
          .sign-in5-button {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            box-sizing: border-box;
            align-items: center;
            border-color: var(--dl-color-theme-primary1);
            border-style: solid;
            border-width: 1px;
            justify-content: center;
          }
          .sign-in5-icon {
            width: 24px;
            height: 24px;
          }
          .sign-in5-button1 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            box-sizing: border-box;
            align-items: center;
            border-color: var(--dl-color-theme-primary1);
            border-style: solid;
            border-width: 1px;
            justify-content: center;
          }
          .sign-in5-icon2 {
            width: 24px;
            height: 24px;
          }
          .sign-in5-button2 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            box-sizing: border-box;
            align-items: center;
            border-color: var(--dl-color-theme-primary1);
            border-style: solid;
            border-width: 1px;
            justify-content: center;
          }
          .sign-in5-icon4 {
            width: 24px;
            height: 24px;
          }
          .sign-in5-container4 {
            flex: 0 0 auto;
            width: 400px;
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            border-top-left-radius: 0;
            border-top-right-radius: var(--dl-radius-radius-radius4);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: var(--dl-radius-radius-radius4);
          }
          .sign-in5-image {
            width: 100%;
            height: 100%;
            z-index: 100;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius4);
            border-top-left-radius: 0;
            border-top-right-radius: var(--dl-radius-radius-cardradius);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: var(--dl-radius-radius-cardradius);
          }
          .sign-in5-sign-up-image {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
          }
          .sign-in5-container5 {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            bottom: 0px;
            height: 100%;
            display: flex;
            z-index: 10;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-size: cover;
            background-color: rgba(0, 0, 0, 0.4);
            background-image: url('https://images.unsplash.com/photo-1579492450119-80542d516179?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGNvbmNyZXRlfGVufDB8fHx8MTcxMzI2MTA0N3ww&ixlib=rb-4.0.3&w=1500');
          }
          @media (max-width: 991px) {
            .sign-in5-max-width {
              margin-top: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .sign-in5-form-root {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .sign-in5-max-width {
              margin-top: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .sign-in5-container1 {
              border-radius: var(--dl-radius-radius-cardradius);
              border-top-right-radius: var(--dl-radius-radius-cardradius);
              border-bottom-right-radius: var(--dl-radius-radius-cardradius);
            }
            .sign-in5-container4 {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .sign-in5-max-width {
              width: 100%;
            }
            .sign-in5-container1 {
              width: 100%;
            }
            .sign-in5-form-root {
              padding: 0px;
            }
            .sign-in5-text1 {
              text-align: center;
            }
            .sign-in5-button {
              width: 100%;
            }
            .sign-in5-button1 {
              width: 100%;
            }
            .sign-in5-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

SignIn5.defaultProps = {
  image2Src:
    'https://images.unsplash.com/photo-1549845375-ce0a0ba8288c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjEwMjc3OXw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Src:
    'https://images.unsplash.com/photo-1642784353173-11f8e2795cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjEwMjc4MHw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Sign In to Your Account',
  image2Alt: 'Create Account Image',
  image1Alt: 'Sign In Image',
}

SignIn5.propTypes = {
  image2Src: PropTypes.string,
  image1Src: PropTypes.string,
  heading1: PropTypes.string,
  image2Alt: PropTypes.string,
  image1Alt: PropTypes.string,
}

export default SignIn5
